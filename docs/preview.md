# Introduction

TextEmotion have 180+ emotion symbol and can combine with built-in effect, like :

- [Color & Background](#coloring)
- [Animation](#animation)

And then TextEmotion also can be inserted to paragraph text using Replacer, more info see link below.

- [Replacer](#replacer)

## Basic Usage

<div class="demo">Hi, my name @muhibbudins <span id="face"></span></div>

```html
<!-- HTML -->
<div>Hi, my name @muhibbudins <span id="face"></span></div>

<!-- JavaScript -->
<script>
  var basic = new TextEmotion({
    wrapper: document.querySelector('#face'),
    emotion: ['face180']
  });
</script>
```

## Color & Background

<div class="demo"><span id="colored-face"></span> Hoaaa i'm so green</div>

```html
<!-- HTML -->
<div><span id="colored-face"></span> Hoaaa i'm so green</div>

<!-- JavaScript -->
<script>
  var colored = new TextEmotion({
    wrapper: document.querySelector('#colored-face'),
    emotion: ['face72'],
    color: 'green'
  });
</script>
```

## Animation

<div class="demo"><span id="animated-face"></span> Hoaaa i'm so green</div>

```html
<!-- HTML -->
<div><span id="animated-face"></span> Hoaaa i'm so green</div>

<!-- JavaScript -->
<script>
</script>
```

## Replacer

lorem


<div id="custom"></div>
<div id="animate"></div>