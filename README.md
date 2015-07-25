# jQuery Navbar Plugin
> Slide navbar in and out of screen when you scroll up and down

## Getting started
### NPM
Install package with NPM and add it to your dependencies:
`npm install @mogusbi/jquery.navbar --save`

## Introducing it to your page
Include jQuery and the plugin to your page. Select your navbar and call the `navbar` method. This plugin will add a `is-hidden` class to the navbar as you scroll down the page and a `has-background` class when you are further down the page. Use your imagination to make your navbar interactive as your scroll up and down the page.

If the page isn't scrollable, a `no-scroll` class is added to the html tag.

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    <nav class="navbar"></nav>

    <script src="jquery.js"></script>
    <script src="jquery.navbar.js"></script>
    <script>
      $('.navbar').navbar();
    </script>
  </body>
</html>
```

The CSS below gives you a nice slide in and out effect as you scroll

```css
.navbar {
  transition: all 500ms ease-in-out;
}

  .navbar.is-hidden {
    transform: translate(0,-100%);
    opacity: 0;
  }
```

## License
Copyright &copy; Mo Gusbi.
Licensed under the MIT license.