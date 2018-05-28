import './index.scss';

export default class TextEmotion {
  constructor(opt) {
    /**
     * Face emotion by Kawaii Face
     * https://kawaiiface.net/happy-kawaii-faces/
     */
    this.emotionConfig = {
      face1: '(◕‿◕✿)',
      face2: '(◠‿◠✿)',
      face3: '(◠﹏◠✿)',
      face4: '（＊＾Ｕ＾）人（≧Ｖ≦＊）/',
      face5: 'ôヮô',
      face6: '∧( ‘Θ’ )∧',
      face7: '(¤﹏¤)',
      face8: '●‿●',
      face9: 'ʕ·ᴥ·ʔ',
      face10: '＼（＾○＾）人（＾○＾）／',
      face11: 'ヾ(＠⌒▽⌒＠)ﾉ',
      face12: '(°∀°)',
      face13: 'ヾ｜￣ー￣｜ﾉ',
      face14: '(☉‿☉✿)',
      face15: '┏(＾0＾)┛┗(＾0＾) ┓',
      face16: '(◡‿◡✿)',
      face17: '✿◕ ‿ ◕✿',
      face18: 'ヽ(‘ ∇‘ )ノ',
      face19: '☆(❁‿❁)☆',
      face20: '❀◕ ‿ ◕❀',
      face21: 'ヽ(^◇^*)/',
      face22: '(•⊙ω⊙•)',
      face23: '!⑈ˆ~ˆ!⑈',
      face24: '(*^ -^*)',
      face25: '(⊙‿⊙✿)',
      face26: '◕3◕',
      face27: '(ﾟヮﾟ)',
      face28: '¢‿¢',
      face29: 'ヅ',
      face30: '●ᴥ●',
      face31: '(∪ ◡ ∪)',
      face32: '≖‿≖',
      face33: '≧◡≦',
      face34: '٩◔‿◔۶',
      face35: '｡◕ ‿ ◕｡',
      face36: 'ヾ(＠＾▽＾＠)ﾉ',
      face37: '◃┆◉◡◉┆▷',
      face38: '(✿◠‿◠)',
      face39: '(￣ｰ￣)',
      face40: '╰(◡‿◡✿╰)',
      face41: '~,~',
      face42: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
      face43: '(*~▽~)',
      face44: '❀‿❀',
      face45: '◕‿◕',
      face46: '(^L^)',
      face47: '(^▽^)',
      face48: '◕ ◡ ◕',
      face49: '(◕‿◕✿)',
      face50: '（ ；´Д｀）',
      face51: '⊙﹏⊙',
      face52: '✿｡✿',
      face53: 'ヽ(゜∇゜)ノ',
      face54: '｡(✿‿✿)｡',
      face55: '(´ー｀)',
      face56: 'ツ',
      face57: 'q(❂‿❂)p',
      face58: '( ́ ◕◞ε◟◕`)',
      face59: '☆(◒‿◒)☆',
      face60: '(∩▂∩)',
      face61: '(¬‿¬)',
      face62: '(^Ｏ^)',
      face63: 'ʘ‿ʘ',
      face64: '（’◎’）',
      face65: '(◜௰◝)',
      face66: '(^ｰ^)',
      face67: '(o´ω｀o)',
      face68: '(^з^)-☆',
      face69: '(◕ω◕✿)',
      face70: '(づ｡◕‿‿◕｡)づ',
      face71: '(ﾟ▽^*)',
      face72: '(⌒o⌒)',
      face73: '(｡◕‿◕｡)',
      face74: 'ت',
      face75: '(. ﾟーﾟ)',
      face76: '१✌˚◡˚✌५',
      face77: '＼(●~▽~●)',
      face78: '(*˘︶˘*)',
      face79: '(✪㉨✪)',
      face80: '(ᅌᴗᅌ* )',
      face81: '^L^',
      face82: '(\/) (°„°) (\/)',
      face83: '＼(*^▽^*)/',
      face84: '(◠△◠✿)',
      face85: '( ಠ◡ಠ )',
      face86: '(〃^∇^)ﾉ',
      face87: '^^',
      face88: '|◔◡◉|',
      face89: '(●⌒∇⌒●)',
      face90: '⊂◉‿◉つ',
      face91: '.ʕʘ‿ʘʔ.',
      face92: '(*・∀・*)人(*・∀・*)',
      face93: '＼(^-^)／',
      face94: '∩(︶▽︶)∩',
      face95: '（☉∀☉）',
      face96: '(´ω｀)',
      face97: '●﹏●',
      face98: '（ ´∀｀）☆',
      face99: '•ᴥ•',
      face100: '(≧◡≦)',
      face101: '(◡‿◡✿)',
      face102: '(･ｪ-)',
      face103: '^‿^',
      face104: '٩(̾●̮̮̃̾•̃̾)۶',
      face105: '≖‿≖',
      face106: '(⊙ω⊙✿)',
      face107: '٩(-̮̮̃•̃)',
      face108: '(´･ω･`)',
      face109: '◤(¬‿¬)◥',
      face110: '^.^',
      face111: '(•‿•)',
      face112: '（＾⊆＾）',
      face113: '^( \'‿\' )^',
      face114: '☆d(o⌒∇⌒o)b',
      face115: '∑(゜Д゜;)',
      face116: '(▰˘◡˘▰)',
      face117: '(• ε •)',
      face118: '( ͡° ͜ʖ ͡°)',
      face119: '(\/) (°,,°) (\/)',
      face120: '(￣(エ)￣)',
      face121: '{◕ ◡ ◕}',
      face122: '(>‘o’)>',
      face123: 'シ',
      face124: '(❀‿❀)',
      face125: '< (^^,) >',
      face126: 'ヾ(●⌒∇⌒●)ﾉ',
      face127: '（ ´∀｀）',
      face128: '☾˙❀‿❀˙☽',
      face129: '°٢°',
      face130: '^o^',
      face131: '(=ﾟωﾟ)ﾉ',
      face132: '٩(●̮̮̃•̃)۶',
      face133: '(☞ﾟ∀ﾟ)☞',
      face134: '(=゜ω゜)',
      face135: '(｡✿‿✿｡)',
      face136: 'ó‿ó',
      face137: '◎[▪‿▪]◎',
      face138: '(▰˘◡˘▰)',
      face139: '(︶ω︶)',
      face140: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
      face141: '(◠ω◠✿)',
      face142: '٩(^‿^)۶',
      face143: '(●*∩_∩*●)',
      face144: '٩(-̮̮̃-̃)۶',
      face145: '<丶´Д｀>',
      face146: '(✿◠‿◠)',
      face147: 'ヽ(´▽｀)ノ',
      face148: '(°⌣°)',
      face149: '☆(❁‿❁)☆',
      face150: '(० ्०)',
      face151: '٩(-̮̮̃•̃)۶',
      face152: '（╹ェ╹）',
      face153: 'ᵔᴥᵔ',
      face154: '•(⌚_⌚)•',
      face155: 'ヽ( ´ ∇ ｀ )ノ',
      face156: '（ミ￣ー￣ミ）',
      face157: '(─‿‿─)',
      face158: '~(^з^)-',
      face159: '(*≗*)',
      face160: '~(^з^)-',
      face161: '(´･ω･`)',
      face162: '(｡◕‿◕｡)',
      face163: '.=^.^=',
      face164: '(◠︿◠✿)',
      face165: 'ッ',
      face166: '(`･ω･´)',
      face167: '´ ▽ ` )ﾉ',
      face168: '(´∀｀)',
      face169: '(◑‿◐)',
      face170: 'ヽ(ﾟｰﾟ*ヽ)ヽ(*ﾟｰﾟ*)ﾉ(ﾉ*ﾟｰﾟ)ﾉ',
      face171: '˚ᆺ˚',
      face172: 'ヽ(〃＾▽＾〃)ﾉ',
      face173: '｡◕‿◕｡',
      face174: '❀◕ ‿ ◕❀',
      face175: '( °٢° )',
      face176: 'Ü',
      face177: '(●´ω｀●)',
      face178: '<(\'o\'<)',
      face179: '◕‿◕',
      face180: 'ᵔᴥᵔ',
      face181: '◙‿◙'
    };
    this.bracket = [];

    if (opt) {
      this.wrapper = typeof opt.wrapper === 'object' ?
        opt.wrapper :
        document.querySelector(opt.wrapper);
      this.emotion = opt.emotion;
      this.animate = opt.animate;
      this.color = opt.color;
      this.background = opt.background;

      this.init();
    }
  }

  init() {
    this.bracket = [];

    this.emotion.map(item => {
      const result = this.emotionConfig[item];

      this.bracket.push(result);
    });

    if (this.bracket) {
      this.wrapper.appendChild(this.place(this.bracket[0]));
    }

    if (this.animate) {
      this.createAnimate(this.wrapper);
    }
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

  replace(opt) {
    const target = opt ? opt.target : '.t-inline';
    let wrapper = document.querySelectorAll(target);

    wrapper.forEach((el, index) => {
      el.dataset.id = this.unique();

      let face = '';
      let delimiter = ' ';

      const dataAttr = el.dataset;

      if (dataAttr.face.indexOf(',') > -1) {
        delimiter = ',';
      }

      face = dataAttr.face.split(delimiter).map(item => item.trim()).filter(item => item !== '');

      this.emotion = face;
      this.wrapper = document.querySelector(`${target}[data-id="${dataAttr.id}"]`);

      if (dataAttr.color) {
        this.color = dataAttr.color;
      }

      if (dataAttr.background) {
        this.background = dataAttr.background;
      }

      this.init();
    });
  }

  unique() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
