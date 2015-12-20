// Printing and PDF exports
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match(/print-pdf/gi) ? 'css/print/pdf.css' : 'css/print/paper.css';
document.getElementsByTagName('head')[0].appendChild(link);

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: false,
  progress: true,
  history: true,
  center: true,
  slideNumber: true,

  transition: 'fade', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [{
    src: 'lib/js/classList.js',
    condition: function() {
      return !document.body.classList;
    }
  }, {
    src: 'plugin/markdown/marked.js',
    condition: function() {
      return !!document.querySelector('[data-markdown]');
    }
  }, {
    src: 'plugin/markdown/markdown.js',
    condition: function() {
      return !!document.querySelector('[data-markdown]');
    }
  }, {
    src: 'plugin/highlight/highlight.js',
    async: true,
    callback: function() {
      hljs.initHighlightingOnLoad();
    }
  }, {
    src: 'plugin/zoom-js/zoom.js',
    async: true
  }, {
    src: 'plugin/notes/notes.js',
    async: true
  }]
});
