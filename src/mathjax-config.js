MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
        fontCache: 'global'
    },
    loader: {
        load: ['input/tex', 'output/svg', 'ui/menu']
    },
    startup: {
        ready: function () {
            MathJax.startup.defaultReady();
        }
    }
};