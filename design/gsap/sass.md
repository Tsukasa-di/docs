# Sass設計
## Directory
``` bash
assets
  | --- sass
    | --- foundation
      | --- _app.scss
      | --- _base.scss
      | --- _reset.scss
    | --- setting
      | --- _app.scss
      | --- _variables.scss
      | --- _utility.scss
      | --- _mixin.scss
    | --- samples
```

## setting/_variables.scss
```scss
$color: (
  base: "#FFFFFF",
  main: "#40C1AC",
  sub: "#3A404C",
  sub-thin: "#D8DBE3",
  getting-started: "#FFAD00",
  learnign: "#5C88DA",
  samples: "#D22730"
);

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&family=Stardos+Stencil:wght@400;700&display=swap');

$fonts: (
  title: "'Stardos Stencil', cursive",
  index: "'Oswald', sans-serif",
  text: "'Roboto', sans-serif"
);
```
