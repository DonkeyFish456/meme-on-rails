import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import TextTool from './TextTool';
import Radium from 'radium';

class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      image,
      handleTextChangeTop,
      handleTextChangeBottom,
      handleTopColorPickerClick,
      handleTopColorPickerChange,
      handleTopColorPickerReset,
      topTextColorRed,
      topTextColorGreen,
      topTextColorBlue,
      topTextColorAlpha,
      displayTopColorPicker,
      topColor,
      handleBottomColorPickerClick,
      handleBottomColorPickerChange,
      handleBottomColorPickerReset,
      bottomTextColorRed,
      bottomTextColorGreen,
      bottomTextColorBlue,
      bottomTextColorAlpha,
      displayBottomColorPicker,
      bottomColor,
      handleImageClick,
      handleResetAll,
      handlePreviewToggle,
      handleCreatingImage
    } = this.props;
    let backgroundImage = '';
    if (image) {
      backgroundImage = <img key="image1" src={image} style={defaultStyles.toolbarImage} alt="" />;
    } else {
      backgroundImage = (
        <div key="image2" style={defaultStyles.toolbarImage}>
          <div style={defaultStyles.toolbarImageLogo}>
            <FontAwesome name="image" />
          </div>
          <div style={defaultStyles.toolbarImageSelect}>Select</div>
        </div>
      );
    }
    return (
      <div style={defaultStyles.toolbarContainer}>
        <div style={defaultStyles.miniToolbar}>
          <div style={defaultStyles.miniToolbarTop}>
            <div key="1" onClick={handleCreatingImage} style={defaultStyles.miniToolbarIcon}>
              <FontAwesome name="download" />
            </div>
            <div key="2" style={defaultStyles.miniToolbarIcon}><FontAwesome name="share-alt" /></div>
            <div key="3" style={defaultStyles.miniToolbarIcon}><FontAwesome name="cogs" /></div>
            <div key="4" onClick={handleResetAll} style={defaultStyles.miniToolbarIcon}>
              <FontAwesome name="trash-o" />
            </div>

          </div>
          <div style={defaultStyles.miniToolbarBottom}>
            <div key="5" style={defaultStyles.miniToolbarIconBottom}><FontAwesome name="github" /></div>

          </div>

        </div>
        <div style={defaultStyles.toolbar}>
          <div onClick={handleImageClick}>
            {backgroundImage}
          </div>
          <div style={defaultStyles.toolbarDivider} />
          <TextTool
            handleTextChange={handleTextChangeTop}
            handleColorPickerChange={handleTopColorPickerChange}
            handleColorPickerClick={handleTopColorPickerClick}
            handleColorPickerReset={handleTopColorPickerReset}
            color={topColor}
            colorRed={topTextColorRed}
            colorGreen={topTextColorGreen}
            colorBlue={topTextColorBlue}
            colorAlpha={topTextColorAlpha}
            displayColorPicker={displayTopColorPicker}
            title="Top Text"
          />
          <div style={defaultStyles.toolbarDivider} />
          <TextTool
            handleTextChange={handleTextChangeBottom}
            handleColorPickerChange={handleBottomColorPickerChange}
            handleColorPickerClick={handleBottomColorPickerClick}
            handleColorPickerReset={handleBottomColorPickerReset}
            color={bottomColor}
            colorRed={bottomTextColorRed}
            colorGreen={bottomTextColorGreen}
            colorBlue={bottomTextColorBlue}
            colorAlpha={bottomTextColorAlpha}
            displayColorPicker={displayBottomColorPicker}
            title="Bottom Text"
          />
        </div>
      </div>
    );
  }
}

const defaultStyles = {
  toolbarContainer: {
    height: '100vh',
    display: 'inline-flex'
  },
  toolbar: {
    height: '100%',
    width: '170px',
    maxWidth: '170px',
    zIndex: 1,
    backgroundColor: 'rgb(51, 51, 51)',
    overflow: 'auto',
    transition: '0.5s',
    textAlign: 'center',
    borderRight: 'rgb(0, 0, 0) 1px solid',
    position: 'relative'
  },
  toolbarImage: {
    marginLeft: '7px',
    marginRight: '7px',
    marginTop: '7px',
    marginBottom: '0px',
    height: '156px',
    backgroundColor: 'rgb(78, 78, 78)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgb(70, 70, 70)'
    }
  },
  toolbarImageLogo: {
    fontSize: '6em',
    padding: '0px',
    margin: '0px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbarImageSelect: {
    marginTop: '0px',
    border: '1px black solid',
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'rgb(255, 255, 255)',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderRadius: '15px',
    fontSize: '1em',
    ':hover': {
      backgroundColor: 'rgb(34, 34, 34)',
      border: '1px rgb(34, 34, 34) solid'
    }
  },
  toolbarDivider: {
    paddingTop: '7px',
    marginLeft: '7px',
    marginRight: '7px',
    borderBottom: '1px solid rgb(78, 78, 78)'
  },
  miniToolbar: {
    height: '100%',
    width: '70px',
    backgroundColor: 'rgb(34, 34, 34)',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // flexWrap: 'wrap',
    flexDirection: 'column'

    // fontSize: '1.5em',
    // color: 'rgb(255, 255, 255)'
  },
  miniToolbarTop: {
    width: '70px',
    backgroundColor: 'rgb(34, 34, 34)',
    zIndex: '1',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    fontSize: '1.5em',
    color: 'rgb(255, 255, 255)'
  },
  miniToolbarBottom: {
    width: '70px',
    backgroundColor: 'rgb(34, 34, 34)',
    zIndex: '1',
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    flexDirection: 'column',
    fontSize: '1.5em',
    color: 'rgb(255, 255, 255)'
  },
  miniToolbarIcon: {
    height: '70px',
    width: '100%',
    fontSize: '1em',
    borderBottom: '1px solid rgb(51, 51, 51)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    ':hover': {
      backgroundColor: 'rgb(51, 51, 51)',
      borderTop: '1px solid rgb(34, 34, 34)',
      borderRight: '1px solid rgb(34, 34, 34)',
      borderBottom: '1px solid rgb(34, 34, 34)',
      boxShadow: '0px -2px 0px 0px rgb(34, 34, 34)'
    }
  },

  miniToolbarIconBottom: {
    height: '70px',
    width: '100%',
    fontSize: '1em',
    borderTop: '1px solid rgb(51, 51, 51)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    ':hover': {
      backgroundColor: 'rgb(51, 51, 51)',
      borderTop: '1px solid rgb(34, 34, 34)',
      borderRight: '1px solid rgb(34, 34, 34)',
      borderBottom: '1px solid rgb(34, 34, 34)',
      boxShadow: '0px -2px 0px 0px rgb(34, 34, 34)'
    }
  }
};

export default Radium(Toolbar);
