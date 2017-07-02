import React, { Component } from 'react';

import map from 'lodash/map';
import Radium from 'radium';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      images: []
    };
  }

  componentDidMount() {
    const url = 'images';

    fetch(url)
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        console.log(data);
        this.setState({ images: data });
      });
  }
  render() {
    const { handleImageClick, handleImageSelect } = this.props;
    const { mainImage, images } = this.state;
    return (
      <div>
        <div onClick={handleImageClick} style={defaultStyles.imageContainerPopup} />
        <div style={defaultStyles.imageContainer}>
          <div style={defaultStyles.imageContainerNav}>
            <div style={defaultStyles.imageContainerNavItem}>Select Image</div>
            <div onClick={handleImageClick} style={defaultStyles.closeButton}>
              Close
            </div>
          </div>
          <div style={defaultStyles.imageContainerBody}>
            <div style={defaultStyles.imageContainerSideNav}>
              <input style={defaultStyles.imageContainerSideNavSearch} placeholder="Search..." spellCheck="false" />
            </div>
            <div style={defaultStyles.imageArea}>
              {map(images, (image, key) =>
                <div key={key} onClick={handleImageSelect} value={image.url}>
                  <img
                    key={key}
                    style={defaultStyles.imageThumbnail}
                    src={
                      'http://res.cloudinary.com/hd0i4ur1p/image/upload/c_thumb,h_150,w_150/v1499013930/' + image.url
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const defaultStyles = {
  container: {
    position: 'relative',
    left: 0,
    margin: '30px',
    border: '1px red solid',
    width: '400px',
    height: '300px',
    color: 'blue'
  },
  imageContainer: {
    position: 'absolute',
    // backgroundColor: 'rgb(210, 210, 210)',
    backgroundColor: 'rgb(255, 255, 255)',
    width: '96%',
    height: '90%',
    marginLeft: '2%',
    marginTop: '40px',
    marginRight: '2%',
    marginBottom: '40px',
    left: 0,
    top: 0,
    zIndex: 4,
    opacity: '100',
    borderRadius: '1px',
    boxShadow: '.5px .5px 1px black',
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainerPopup: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 3,
    backgroundColor: 'rgb(0, 0, 0)',
    opacity: '.5'
  },
  imageContainerNav: {
    display: 'flex',
    backgroundColor: 'rgb(240, 240, 240)',
    color: 'rgb(0, 0, 0)',
    width: '100%',
    height: '90px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageContainerNavItem: {
    marginLeft: '25px',
    alignItems: 'center',
    fontSize: '1.5em'
  },
  closeButton: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: 'rgb(30, 30, 30)',
    borderRadius: '2px',
    color: 'rgb(255, 255, 255)',
    fontSize: '1em',
    marginRight: '25px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgb(78, 78, 78)'
    },
    ':active': {
      backgroundColor: 'rgb(30, 30, 30)'
    }
  },
  imageContainerBody: {
    display: 'inline-flex',
    width: '100%',
    height: '100%'
  },
  imageContainerSideNav: {
    display: 'flex',
    backgroundColor: 'rgb(240, 240, 240)',
    color: 'rgb(0, 0, 0)',
    width: '200px',
    height: '100%',
    justifyContent: 'space-between',
    overflowY: 'hidden',
    flexWrap: 'wrap'
  },
  imageContainerSideNavSearch: {
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    fontSize: '1.5em',
    width: '80%',
    justifyContent: 'flex-start',
    height: '1em',
    fontSize: '1em',
    borderRadius: '20px',
    outline: 'none',
    border: '.5px solid rgb(220, 220, 220)'
  },
  imageArea: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    // border: '1px red solid',
    overflowY: 'auto',
    // margin: '20px',
    padding: '20px',
    alignContent: 'flex-start'
  },
  imageThumbnail: {
    height: '150px',
    objectFit: 'cover',
    margin: '5px',
    padding: '0px',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0px 0px 23px -4px rgba(0,0,0,.9)',
      opacity: '.80'
    },
    ':active': {
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,.9)',
      opacity: '1'
    }
  }
};

export default Radium(Images);
