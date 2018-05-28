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

<div class="demo">I am so cuttee <span id="animated-face"></span></div>

```html
<!-- HTML -->
<div>I am so cuttee <span id="animated-face"></span></div>

<!-- JavaScript -->
<script>
  var animated = new TextEmotion({
    wrapper: document.querySelector('#animated-face'),
    emotion: ['face49', 'face146'],
    animate: [800, 300],
    color: '#27ae60'
  });
</script>
```

## Replacer

<div class="demo">
  This is example of paragraph, Quo vel eius quae <span class="t-inline" data-face="face20"></span> atque laboriosam accusantium unde officiis corrupti, modi facere adipisci amet, voluptas tempore <span class="t-inline" data-face="face140" data-color="green"></span> similique architecto repellendus fugit animi <span class="t-inline" data-face="face160" data-color="#333333" data-background="#EFEFEF"></span> distinctio! Optio, enim amet.
</div>

```html
<!-- HTML -->
<div>
  This is example of paragraph, Quo vel eius quae <span class="t-inline" data-face="face20"></span>
  atque laboriosam accusantium unde officiis corrupti, modi facere adipisci amet, voluptas tempore
  <span class="t-inline" data-face="face140" data-color="green"></span> similique architecto
  repellendus fugit animi <span class="t-inline" data-face="face160" data-color="#333333" data-background="#EFEFEF"></span>
  distinctio! Optio, enim amet.
</div>

<!-- JavaScript -->
<script>
  const replace = new TextEmotion()
  replace.replace();
</script>
```

### Replacer (Custom class name)

<div class="demo">
  Dicta alias aspernatur corporis voluptatem a, officia consequatur 
  <span class="custom-class-name" data-face="face122" data-color="red"></span> sunt culpa similique beatae 
  blanditiis est laboriosam sit reprehenderit deserunt dolorum!
</div>

```html
<!-- HTML -->
<div>
  Dicta alias aspernatur corporis voluptatem a, officia consequatur 
  <span class="custom-class-name" data-face="face122" data-color="red"></span> sunt culpa similique beatae 
  blanditiis est laboriosam sit reprehenderit deserunt dolorum!
</div>

<!-- JavaScript -->
<script>
  const customTarget = new TextEmotion()
  customTarget.replace({
    target: '.custom-class-name'
  });
</script>
```
