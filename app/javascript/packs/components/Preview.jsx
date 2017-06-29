import React, { Component } from 'react';

// const context = canvas.getContext('2d');
// const imageObj = new Image();
//
// imageObj.onload = function() {
//   context.drawImage(imageObj, 69, 50);
// };
// imageObj.src = 'https://imgflip.com/s/meme/Y-U-No.jpg';

class Preview extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   // const { image, topTextSize } = this.props;
  //   // const canvas = document.getElementById('my-canvas');
  //   // console.log(canvas);
  //   // const context = canvas.getContext('2d');
  //   // const img = new Image();
  //   // console.log(img);
  //
  //   const createShadow = (text, size, color, baseline) => {
  //     const position = baseline == 'top' ? 0 : canvas.height;
  //     context.shadowColor = color;
  //     context.textAlign = 'center';
  //     context.textBaseline = baseline;
  //     //bottom right
  //     context.shadowOffsetX = size;
  //     context.shadowOffsetY = size;
  //     context.fillText(text, canvas.width / 2, position, canvas.width);
  //     //top left
  //     context.shadowOffsetX = -size;
  //     context.shadowOffsetY = -size;
  //     context.fillText(text, canvas.width / 2, position, canvas.width);
  //     //top right
  //     context.shadowOffsetX = size;
  //     context.shadowOffsetY = -size;
  //     context.fillText(text, canvas.width / 2, position, canvas.width);
  //     //
  //     context.shadowOffsetX = -size;
  //     context.shadowOffsetY = size;
  //     context.fillText(text, canvas.width / 2, position, canvas.width);
  //
  //     context.fillText(text, canvas.width / 2, position, canvas.width);
  //   };
  //
  //   const createA = (size, text) => {
  //     context.fillStyle = 'white';
  //     context.font = `${size}px Impact`;
  //     context.strokeStyle = 'black';
  //     context.lineWidth = 3;
  //     //top left
  //     context.strokeText(text, canvas.width / 2 - 2, -2, canvas.width);
  //     context.strokeText(text, canvas.width / 2 - 3, -3, canvas.width);
  //     //top right
  //     context.strokeText(text, canvas.width / 2 + 2, -2, canvas.width);
  //     context.strokeText(text, canvas.width / 2 + 3, -3, canvas.width);
  //     //bottom left
  //     context.strokeText(text, canvas.width / 2 - 2, 2, canvas.width);
  //     context.strokeText(text, canvas.width / 2 - 3, 3, canvas.width);
  //     //bottom right
  //     context.strokeText(text, canvas.width / 2 + 2, 2, canvas.width);
  //     context.strokeText(text, canvas.width / 2 + 3, 3, canvas.width);
  //
  //     context.fillText(text, canvas.width / 2, 0, canvas.width);
  //   };
  //
  //   // context.fillStyle = 'white';
  //   //
  //   //
  //   // function generateMeme(img, topText, topTextSize) {
  //   //   context.clearRect(0, 0, 500, 500);
  //   //   context.drawImage(img, 0, 0);
  //   //   context.font = `${topTextSize} Impact`;
  //   //   context.fillStyle = 'white';
  //   //   context.fillText(topText, 0, 0);
  //   //   console.log(img);
  //   // }
  //
  //   // img.onload = function() {
  //   //   canvas.width = img.width;
  //   //   canvas.height = img.height;
  //   //   context.drawImage(img, 0, 0);
  //   //
  //   //   context.strokeStyle = 'black';
  //   //   context.textAlign = 'center';
  //   //
  //   //   //draw top text
  //   //   // const topFontSize = topTextSize.slice(0, topTextSize.length - 2);
  //   //   context.font = `${topTextSize} Impact`;
  //   //   context.fillStyle = 'white';
  //     // context.lineWidth = 3;
  //     // context.textBaseline = 'top';
  //     // createShadow('Y U NO', 4, 'black', 'top');
  //
  //     // createA(30, 'A');
  //     //
  //     // const topText = 'A B C D E F';
  //     // context.fillStyle = 'black';
  //     // context.font = `80px Impact`;
  //     // context.fillText(topText, canvas.width / 2 + 14, -6, canvas.width);
  //     // context.fillText(topText, canvas.width / 2 + 20, -6, canvas.width);
  //     //
  //     // context.fillStyle = 'white';
  //     // context.font = `70px Impact`;
  //     // context.fillText(topText, canvas.width / 2, 0, canvas.width);
  //
  //     // context.strokeText(topText, canvas.width / 2 + 2, 0, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 + 3, 0, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 - 2, 0, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 - 3, 0, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 - 2, -2, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 - 2, -3, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 + 2, -2, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 + 2, -3, canvas.width);
  //     //
  //     // context.strokeText(topText, canvas.width / 2, 2, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2, 3, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 + 2, 2, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 + 4, 3, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 - 2, 2, canvas.width);
  //     // context.strokeText(topText, canvas.width / 2 - 4, 3, canvas.width);
  //     // context.strokeText('A', canvas.width / 2 - 4, -4, canvas.width);
  //     // context.strokeText('A', canvas.width / 2, 0, canvas.width);
  //     // context.fillText(topText, canvas.width / 2, 0, canvas.width);
  //
  //     //
  //
  //     //draw bottom text
  //     // const botFontSize = topTextSize.slice(0, topTextSize.length - 2);
  //     // context.font = `${topTextSize} Impact`;
  //     // context.fillStyle = 'white';
  //     // context.lineWidth = 7;
  //     // context.textBaseline = 'bottom';
  //     // context.strokeText('Y A', canvas.width / 2, canvas.height, canvas.width);
  //     // context.fillText('Y A', canvas.width / 2, canvas.height, canvas.width);
  //     // context.strokeStyle = 'black';
  //     // context.lineWidth = 3;
  //     // createShadow('MAKE MEME', 4, 'black', 'bottom');
  //   };
  //   // img.src = image;
  //
  //   // context.font = `${this.props.topTextSize} Impact`;
  //   // context.fillText('Hello world', 0, 0);
  // }

  render() {
    const { handlePreviewToggle } = this.props;

    return (
      <div>
        <div
          onClick={handlePreviewToggle}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 1,
            backgroundColor: 'grey',
            opacity: '.8'
          }}
        />
        <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 5 }}>
          <canvas
            id="my-canvas"
            className="meme-canvas"
            width="500"
            height="500"
            style={{ width: '500px', height: '500px' }}
          >
            Your browser does not support a canvas tag
          </canvas>
        </div>
      </div>
    );
  }
}

export default Preview;
