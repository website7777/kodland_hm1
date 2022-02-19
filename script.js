function show() {
    anime({
        targets: '.menu-small',
        translateX: [ '-100%', '0' ],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
}
function hide() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    
}
let pokazano = false;
$('.menu_small_icon').on('click', function () {
    if (!pokazano) {
show();
pokazano= true;
    }
    else{
        hide();
        pokazano= false;
    }
});
let xstart;
let xend;
$(document).on('touchstart', function (event) {
    xstart = event.changedTouches[0].pageX;
});
$(document).on('touchend', function (event) {
    xend = event.changedTouches[0].pageX;
    if (!pokazano && xend>xstart && (xend - xstart)>=100) {
        show();
        pokazano = true;
    }
    else if (xend<xstart && (xstart - xend)>=100) {
        hide();
        pokazano = false;
    }
});


/*$(document).on("touchstart", function (event) {
    console.log(event.changedTouches[0].pageX);
})

$(document).on("touchend", function (event) {
    console.log(event.changedTouches[0].pageX);
})*/ 