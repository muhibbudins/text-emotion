import './index.scss';

export default class TextEmotion {
  constructor(opt) {

    this.wrapper = typeof opt.wrapper === 'object' ?
      opt.wrapper :
      document.querySelector(opt.wrapper);

    this.symbol = {
      face: {
        round: ['( ', ' )'],
        roundLeft: ['( ', ' '],
        roundRight: [' ', ' )'],
        square: ['[ ', ' ]'],
        squareLeft: ['[ ', ' '],
        squareRight: [' ', ' ]']
      },
      eyes: {
        plus: ['+', '+'],
        min: ['—', '—'],
        accent: ['^', '^'],
        not: ['-¬', '-¬'],
        tilde: ['~', '~'],
        arrow: ['>', '<']
      },
      mouth: {
        triangle: ['∆'],
        kiss: ['3'],
        poker: ['_'],
        vi: ['v']
      },
      hands: {
        slash: ['\'', '/'],
        slashLeft: ['\'', ''],
        slashRight: ['', '/'],
        squareUp: ['⎣', '⎦'],
        squareDown: ['⎡', '⎤'],
        handDown: ['⎛', '⎞'],
        handWhat: ['⎞', '⎛'],
        handUp: ['⎝', '⎠'],
        none: ['', '']
      }
    };
    this.emotion = {
      flat: ['mouth:poker', 'eyes:min', 'face:round', 'hands:none']
    };

    this.create(this.emotion['flat']);
  }

  create(config) {
    const face = [];

    config.map(item => {
      const value = item.split(':');

      if (!value[0]) throw Error('Symbol position isn\'t defined');
      if (!value[1]) throw Error('Face symbol isn\'t defined');

      const faceSymbol = this.symbol[value[0]][value[1]];

      if (faceSymbol.length > 1) {
        face.unshift(faceSymbol[0]);
        face[face.length + 1] = faceSymbol[1];
      } else {
        face.push(faceSymbol.join(''));
      }
    });

    this.wrapper.innerHTML = face.join('');
  }
}
