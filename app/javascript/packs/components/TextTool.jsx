import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { SketchPicker } from 'react-color';
import Radium from 'radium';

class TextTool extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      handleTextChange,
      handleColorPickerChange,
      handleColorPickerClick,
      handleColorPickerReset,
      displayColorPicker,
      color,
      colorRed,
      colorGreen,
      colorBlue,
      colorAlpha
    } = this.props;
    // console.log(color, 'bjb');
    const stateStyles = {
      toolbarTextColorPicker: {
        marginTop: '7px',
        width: '100% ',
        backgroundColor: `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, ${colorAlpha})`,
        lineHeight: '1.75em',
        border: '1px solid rgb(34, 34, 34)',
        color: 'rgb(256, 256, 256)',
        justifyContent: 'flex-end',
        display: 'flex',
        cursor: 'pointer'
      }
    };
    return (
      <div>
        <div style={defaultStyles.toolbarTextContainer}>
          <div style={defaultStyles.toolbarText}>{title}</div>
          <textarea
            className="textArea"
            onChange={handleTextChange}
            style={defaultStyles.toolbarTextArea}
            rows="3"
            spellCheck="false"
          />
          <div style={defaultStyles.toolbarText}>Text Color</div>

          <div onClick={handleColorPickerClick} style={stateStyles.toolbarTextColorPicker}>
            <div onClick={handleColorPickerReset} style={defaultStyles.toolbarTextColorPickerDefault}>
              <FontAwesome name="undo" />
            </div>

            {displayColorPicker
              ? <div>
                  <div style={defaultStyles.displayColorPickerModal} onClick={handleColorPickerClick} />

                  <div
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    style={{ zIndex: '10', position: 'fixed', left: '237px', top: '269px' }}
                  >
                    <SketchPicker color={color} onChange={handleColorPickerChange} />

                  </div>
                </div>
              : null}

          </div>

          {/* <div style={defaultStyles.toolbarText}>Text Size</div>
          <input style={defaultStyles.toolbarTextSize} type="range" /> */}
        </div>
      </div>
    );
  }
}

const defaultStyles = {
  toolbarTextContainer: {
    margin: '7px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
    // border: '1px yellow solid'
  },
  toolbarText: {
    paddingTop: '7px',
    color: 'rgb(255, 255, 255)',
    textAlign: 'left'

    // border: '1px yellow solid'
    // alignItems: 'flex-start'
  },
  toolbarDelete: {
    color: 'rgb(256, 256, 256)',
    alignSelf: 'flex-end',
    fontSize: '1em',
    border: 'none',
    backgroundColor: 'rgb(51, 51, 51)',
    outline: 'none'

    // justifyContent: 'space-between'
  },
  toolbarTextArea: {
    marginTop: '7px',
    backgroundColor: 'rgb(78, 78, 78)',
    color: 'rgb(256, 256, 256)',
    resize: 'none',
    outline: 'none',
    width: '97%',
    border: 'rgb(34, 34, 34) 1px solid',
    fontSize: '1em'
  },
  toolbarTextOption: {
    marginTop: '7px',
    color: 'rgb(256, 256, 256)',
    alignSelf: 'flex-end',
    fontSize: '1.25em',
    border: '1px solid rgb(34, 34, 34)',
    backgroundColor: 'rgb(78, 78, 78)',
    outline: 'none'
  },

  toolbarTextColorPickerDefault: {
    paddingRight: '7px',
    paddingLeft: '7px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: '1em',
    color: 'rgb(256, 256, 256)',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgb(57, 57, 57)'
    }
  },
  toolbarTextSize: {
    marginTop: '7px',
    width: '100% ',
    backgroundColor: 'rgb(78, 78, 78)',
    lineHeight: '1.75em',
    color: 'rgb(256, 256, 256)'
  },
  displayColorPickerModal: {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100vw',
    zIndex: '5'
  }
};

export default Radium(TextTool);
