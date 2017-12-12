requirejs.config({
    baseUrl: './',
    paths: {
        "posts": 'posts'
    }
});

requirejs(['posts'], function () {

});