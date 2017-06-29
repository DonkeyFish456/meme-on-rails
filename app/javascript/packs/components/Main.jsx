import React, { Component } from 'react';

import Toolbar from './Toolbar';
import Canvas from './Canvas';
import Preview from './Preview';
import Images from './Images';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

const imageList = {
  one: 'http://res.cloudinary.com/stan/image/upload/v1498742628/Creepy-Condescending-Wonka_eorydc.jpg',
  two: 'http://res.cloudinary.com/stan/image/upload/v1498688003/one-does-not-simply_tpm9jc.jpg',
  three: 'http://res.cloudinary.com/stan/image/upload/v1498742630/the-most-interesting-man-in-the-world_auwd26.jpg'
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      image: imageList.three,
      textImage: '',
      topText: {
        title: '',
        size: '70px'
      },
      topColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 1
      },
      bottomColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 1
      },
      displayTopColorPicker: false,
      displayBottomColorPicker: false,
      bottomText: {
        title: '',
        size: '70px'
      },
      displayImages: false,
      displayPreview: false
    };
    this.handleTextChangeTop = this.handleTextChangeTop.bind(this);
    this.handleTextChangeBottom = this.handleTextChangeBottom.bind(this);
    this.handleTopColorPickerClick = this.handleTopColorPickerClick.bind(this);
    this.handleTopColorPickerChange = this.handleTopColorPickerChange.bind(this);
    this.handleTopColorPickerReset = this.handleTopColorPickerReset.bind(this);
    this.handleBottomColorPickerClick = this.handleBottomColorPickerClick.bind(this);
    this.handleBottomColorPickerChange = this.handleBottomColorPickerChange.bind(this);
    this.handleBottomColorPickerReset = this.handleBottomColorPickerReset.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.handleCreatePreview = this.handleCreatePreview.bind(this);
    this.handlePreviewToggle = this.handlePreviewToggle.bind(this);
    this.handleCreatingImage = this.handleCreatingImage.bind(this);
  }
  handleTextChangeTop(e) {
    this.setState({ topText: { title: e.target.value } });
  }
  handleTextChangeBottom(e) {
    this.setState({ bottomText: { title: e.target.value } });
  }
  handleTopColorPickerClick = e => {
    this.setState({ displayTopColorPicker: !this.state.displayTopColorPicker });
  };
  handleTopColorPickerChange = color => {
    this.setState({ topColor: color.rgb });
  };
  handleTopColorPickerReset = e => {
    e.stopPropagation();
    this.setState({ topColor: { r: 255, g: 255, b: 255, a: 1 } });
  };
  handleBottomColorPickerClick = e => {
    this.setState({ displayBottomColorPicker: !this.state.displayBottomColorPicker });
  };
  handleBottomColorPickerChange = color => {
    this.setState({ bottomColor: color.rgb });
  };
  handleBottomColorPickerReset = e => {
    e.stopPropagation();
    this.setState({ bottomColor: { r: 255, g: 255, b: 255, a: 1 } });
  };
  handleImageClick = e => {
    this.setState({ displayImages: !this.state.displayImages });
  };
  handleImageSelect = e => {
    e.preventDefault();
    this.setState({
      image: e.target.src,
      displayImages: !this.state.displayImages,
      topText: { title: document.getElementsByClassName('textArea')[0].value, size: '70px' },
      bottomText: { title: document.getElementsByClassName('textArea')[1].value, size: '70px' }
    });
  };
  handleResetAll = e => {
    document.getElementsByClassName('textArea')[0].value = '';
    document.getElementsByClassName('textArea')[1].value = '';
    this.setState({
      image: '',
      bottomColor: { r: 255, g: 255, b: 255, a: 1 },
      topColor: { r: 255, g: 255, b: 255, a: 1 },
      topText: { title: '', size: '70px' },
      bottomText: { title: '', size: '70px' }
    });
  };
  handleCreatePreview() {}
  handlePreviewToggle() {
    this.setState({ displayPreview: !this.state.displayPreview });
  }

  handleCreatingImage = e => {
    e.preventDefault;
    const node = document.getElementsByClassName('my-photo-container')[0];
    console.log(node);

    domtoimage.toBlob(node).then(function(blob) {
      FileSaver.saveAs(blob, 'my-node.png');
    });

    // domtoimage
    //   .toPng(node)
    //   .then(function(dataUrl) {
    //     console.log(dataUrl, '555555');
    //     var img = new Image();
    //     img.src = dataUrl;
    //     console.log(dataUrl, 'fdsaf');
    //     node.appendChild(img);
    //     console.log(img, 'treter');
    //   })
    //   .catch(function(error) {
    //     console.error('oops, something went wrong!', error);
    //   });
  };

  componentDidMount() {}

  render() {
    const {
      image,
      textImage,
      topColor,
      bottomColor,
      topText,
      bottomText,
      displayTopColorPicker,
      displayBottomColorPicker,
      displayImages,
      displayPreview
    } = this.state;
    return (
      <div style={defaultStyles.background}>
        <Toolbar
          image={image}
          handleTextChangeTop={this.handleTextChangeTop}
          handleTextChangeBottom={this.handleTextChangeBottom}
          handleTopColorPickerChange={this.handleTopColorPickerChange}
          handleTopColorPickerClick={this.handleTopColorPickerClick}
          handleTopColorPickerReset={this.handleTopColorPickerReset}
          topColor={topColor}
          topTextColorRed={topColor.r}
          topTextColorGreen={topColor.g}
          topTextColorBlue={topColor.b}
          topTextColorAlpha={topColor.a}
          displayTopColorPicker={displayTopColorPicker}
          handleBottomColorPickerChange={this.handleBottomColorPickerChange}
          handleBottomColorPickerClick={this.handleBottomColorPickerClick}
          bottomColor={bottomColor}
          bottomTextColorRed={bottomColor.r}
          bottomTextColorGreen={bottomColor.g}
          bottomTextColorBlue={bottomColor.b}
          bottomTextColorAlpha={bottomColor.a}
          displayBottomColorPicker={displayBottomColorPicker}
          handleBottomColorPickerReset={this.handleBottomColorPickerReset}
          handleImageClick={this.handleImageClick}
          handleResetAll={this.handleResetAll}
          handlePreviewToggle={this.handlePreviewToggle}
          handleCreatingImage={this.handleCreatingImage}
        />

        <Canvas
          image={image}
          topText={topText.title}
          topTextSize={topText.size}
          topTextColorRed={topColor.r}
          topTextColorGreen={topColor.g}
          topTextColorBlue={topColor.b}
          topTextColorAlpha={topColor.a}
          bottomText={bottomText.title}
          bottomTextColorRed={bottomColor.r}
          bottomTextColorGreen={bottomColor.g}
          bottomTextColorBlue={bottomColor.b}
          bottomTextColorAlpha={bottomColor.a}
          bottomTextSize={bottomText.size}
          // bottomTextColor={bottomText.color}
          handleCreatingImage={this.handleCreatingImage}
        />
        <div>
          {displayImages
            ? <Images handleImageClick={this.handleImageClick} handleImageSelect={this.handleImageSelect} />
            : null}
        </div>
        <div>
          {displayPreview
            ? <Preview
                handlePreviewToggle={this.handlePreviewToggle}
                image={image}
                textImage={textImage}
                topTextSize={topText.size}
                topText={topText.title}
                topTextColorRed={topColor.r}
                topTextColorGreen={topColor.g}
                topTextColorBlue={topColor.b}
                topTextColorAlpha={topColor.a}
                bottomText={bottomText.title}
                bottomTextColorRed={bottomColor.r}
                bottomTextColorGreen={bottomColor.g}
                bottomTextColorBlue={bottomColor.b}
                bottomTextColorAlpha={bottomColor.a}
                bottomTextSize={bottomText.size}
              />
            : null}
        </div>

        {/* <CanvasTwo /> */}
      </div>
    );
  }
}

const defaultStyles = {
  background: {
    backgroundColor: 'rgb(210, 210, 210)',
    display: 'inline-flex',
    width: '100%'
  },
  imageContainer: {
    position: 'absolute',
    backgroundColor: 'rgb(210, 210, 210)',
    width: '96%',
    height: '90%',
    marginLeft: '2%',
    marginTop: '55px',
    marginRight: '2%',
    marginBottom: '55px',
    left: 0,
    top: 0,
    zIndex: 4,
    border: '1px red solid',
    color: 'yellow',
    opacity: '100',
    borderRadius: '3px'
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
  modalContainer: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    opacity: '0',
    zindex: 1
  }
};

export default Main;
