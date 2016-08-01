
goog.array.forEach(goog.dom.query('.pic-mini-a'), function(link) {
    goog.events.listen(link, 'click', function(funk){
        funk.preventDefault();
        
        goog.dom.setProperties(goog.dom.$("pic-prev"), { src: this.href });
run("pic-prev")
    }, false, link);
});

function run(el) {
var elem = goog.dom.$(el);
var queue = new goog.fx.AnimationSerialQueue();
queue.add(new goog.fx.dom.Fade(elem, 0, 1, 600));
queue.play();
}


