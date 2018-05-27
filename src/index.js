import './index.scss';

export default class TextEmotion {
  constructor(opt) {

    this.wrapper = typeof opt.wrapper === 'object' ?
      opt.wrapper :
      document.querySelector(opt.wrapper);

    this.symbol = {
      face: {
        round: ['(', ')'],
        roundLeft: ['(', ''],
        roundRight: ['', ')'],
        square: ['[', ']'],
        squareLeft: ['[', ''],
        squareRight: ['', ']']
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
        triangle: '∆',
        kiss: '3',
        poker: '_',
        vi: 'v'
      },
      hands: {
        slash: ['\'', '/'],
        slashLeft: ['\'', ''],
        slashRight: ['', '/'],
        squareUp: ['⎣', '⎦'],
        squareDown: ['⎡', '⎤'],
        handDown: ['⎛', '⎞'],
        handWhat: ['⎞', '⎛'],
        handUp: ['⎝', '⎠']
      }
    };
  }
}
