import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Draggable from 'react-draggable';

class Canvas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      image,
      bottomText,
      topText,
      topTextSize,
      topTextColorRed,
      topTextColorGreen,
      topTextColorBlue,
      topTextColorAlpha,
      bottomTextColorRed,
      bottomTextColorGreen,
      bottomTextColorBlue,
      bottomTextColorAlpha,
      bottomTextSize,
      handleCreatingImage
    } = this.props;
    const defaultStyles = {
      canvas: {
        color: 'rgb(34, 34, 34)',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      canvasLogo: {
        color: 'rgb(34, 34, 34)',
        width: '100%',
        position: 'relative',
        fontSize: '17em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      canvasItem: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px'
      },
      meme: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        border: '1px yellow solid'
      },
      memePhoto: {
        zIndex: '0',
        marginTop: '-70px',
        marginBottom: '-70px'
      },
      memeTextArea: {
        zindex: 1,
        fontFamily: 'Impact',
        lineHeight: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-between',
        textTransform: 'uppercase',
        width: '500px',
        height: '500px',
        flexWrap: 'wrap',
        textAlign: 'center',
        letterSpacing: '4px',
        textShadow:
          '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0px #000,  -3px 0px 0px #000, 0px -3px 0px #000'
      },
      memeTopText: {
        width: '100%',
        alignItems: 'flex-start',
        fontSize: `${topTextSize}`,
        color: `rgba(${topTextColorRed},${topTextColorGreen},${topTextColorBlue},${topTextColorAlpha})`
      },
      memeBottomText: {
        width: '100%',
        alignSelf: 'flex-end',
        fontSize: `${bottomTextSize}`,
        color: `rgba(${bottomTextColorRed},${bottomTextColorGreen},${bottomTextColorBlue},${bottomTextColorAlpha})`
      },
      memebackground: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '500px',
        width: '500px'
      },
      scrollHandle: {
        position: 'fixed',
        left: -50,
        fontFamily: 'sans-serif',
        fontSize: '60px',
        textShadow: 'none',
        color: 'rgb(0, 0, 0)',
        cursor: 'row-resize'
      }
    };
    let backgroundImage = '';
    if (image) {
      backgroundImage = (
        <div className="canvas" style={defaultStyles.memebackground}>
          <div style={defaultStyles.memeTextArea}>
            <div style={defaultStyles.memeTopText}>
              {topText
                ? <Draggable handle="strong" bounds={{ top: 0, bottom: 250 }} axis="y">
                    <div>
                      <strong style={defaultStyles.scrollHandle}>
                        <FontAwesome name="arrows-v" />
                      </strong>
                      {topText}
                    </div>
                  </Draggable>
                : null}

            </div>
            <div style={defaultStyles.memeBottomText}>
              {bottomText
                ? <Draggable handle="strong" bounds={{ top: -250, bottom: 0 }} axis="y">
                    <div>
                      <strong style={defaultStyles.scrollHandle}>
                        <FontAwesome name="arrows-v" />
                      </strong>
                      {bottomText}
                    </div>
                  </Draggable>
                : null}
            </div>
          </div>
        </div>
      );
    } else {
      backgroundImage = (
        <div style={defaultStyles.canvasLogo}>
          <FontAwesome name="image" /><div style={defaultStyles.canvasItem}>Select an Image</div>
        </div>
      );
    }
    return (
      <div className="canvas-container" style={defaultStyles.canvas}>

        <div className="my-photo-container" style={{ height: '500px', width: '500px' }}>
          {backgroundImage}
        </div>
        {/* <button onClick={handleCreatingImage}>button</button> */}
      </div>
    );
  }
}

export default Canvas;
