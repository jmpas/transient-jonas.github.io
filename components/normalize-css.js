export default () => (
  <style global jsx>{`
    html {
      line-height: 1.15; /* 1 */
      -ms-text-size-adjust: 100%; /* 2 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    body {
      margin: 0;
    }

    article,
    aside,
    footer,
    header,
    nav,
    section {
      display: block;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    figcaption,
    figure,
    main { /* 1 */
      display: block;
    }

    figure {
      margin: 1em 40px;
    }

    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }

    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }


    a {
      background-color: transparent; /* 1 */
      -webkit-text-decoration-skip: objects; /* 2 */
    }

    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }

    b,
    strong {
      font-weight: inherit;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    dfn {
      font-style: italic;
    }

    mark {
      background-color: #ff0;
      color: #000;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    audio,
    video {
      display: inline-block;
    }

    audio:not([controls]) {
      display: none;
      height: 0;
    }

    img {
      border-style: none;
    }

    /**
     * Hide the overflow in IE.
     */

    svg:not(:root) {
      overflow: hidden;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: sans-serif; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */

    button,
    input { /* 1 */
      overflow: visible;
    }


    button,
    select { /* 1 */
      text-transform: none;
    }

    button,
    html [type="button"], /* 1 */
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button; /* 2 */
    }

    /**
     * Remove the inner border and padding in Firefox.
     */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    /**
     * Restore the focus styles unset by the previous rule.
     */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    /**
     * Correct the padding in Firefox.
     */

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      box-sizing: border-box; /* 1 */
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }

    /**
     * 1. Add the correct display in IE 9-.
     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */

    progress {
      display: inline-block; /* 1 */
      vertical-align: baseline; /* 2 */
    }

    /**
     * Remove the default vertical scrollbar in IE.
     */

    textarea {
      overflow: auto;
    }

    /**
     * 1. Add the correct box sizing in IE 10-.
     * 2. Remove the padding in IE 10-.
     */

    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }

    /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }

    /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */

    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }

    /**
     * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
     */

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }

    /* Interactive
       ========================================================================== */

    /*
     * Add the correct display in IE 9-.
     * 1. Add the correct display in Edge, IE, and Firefox.
     */

    details, /* 1 */
    menu {
      display: block;
    }

    /*
     * Add the correct display in all browsers.
     */

    summary {
      display: list-item;
    }

    /* Scripting
       ========================================================================== */

    /**
     * Add the correct display in IE 9-.
     */

    canvas {
      display: inline-block;
    }

    /**
     * Add the correct display in IE.
     */

    template {
      display: none;
    }

    /* Hidden
       ========================================================================== */

    /**
     * Add the correct display in IE 10-.
     */

    [hidden] {
      display: none;
    }
   `}</style>
)
