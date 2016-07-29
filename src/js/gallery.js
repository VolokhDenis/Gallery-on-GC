
goog.array.forEach(goog.dom.query('.pic-mini-a'), function(link) {
    goog.events.listen(link, 'click', function(funk){
        funk.preventDefault();
        goog.dom.setProperties(goog.dom.$("pic-prev"), { src: this.href });
    }, false, link);
});