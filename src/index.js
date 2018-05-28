import './index.scss';

export default class TextEmotion {
  constructor(opt) {
    this.wrapper = typeof opt.wrapper === 'object' ?
      opt.wrapper :
      document.querySelector(opt.wrapper);
    this.emotion = opt.emotion;
    this.animate = opt.animate;
    this.color = opt.color;
    this.background = opt.background;
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
    this.emotionConfig = {
      test1: ['mouth:poker', 'eyes:accent', 'face:round', 'hands:none'],
      test2: ['mouth:poker', 'eyes:arrow', 'face:round', 'hands:handUp']
    };
    this.bracket = [];

    this.emotion.map(item => {
      const result = this.create(this.emotionConfig[item]);

      this.bracket.push(result);
    });

    if (this.bracket) {
      this.wrapper.appendChild(this.place(this.bracket[0]));
    }

    if (this.animate) {
      this.createAnimate();
    }
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

    return face.join('');
  }

  createAnimate() {
    let index = 0;

    const animate = () => {
      this.wrapper.innerHTML = null;
      this.wrapper.appendChild(this.place(this.bracket[index]));

      if (index === this.bracket.length - 1) {
        index = 0;
      } else {
        index += 1;
      }

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, this.animate[index]);
    };

    requestAnimationFrame(animate);
  }

  place(emot) {
    const wrap = document.createElement('div');

    wrap.className = 't-animate';
    wrap.innerHTML = emot;

    if (this.color) {
      wrap.style.color = this.color;
    }
    if (this.background) {
      wrap.style.backgroundColor = this.background;
    }

    return wrap;
  }
}
