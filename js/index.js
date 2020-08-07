$(document).ready(function () {
    var bubbleElem = document.getElementById('btnBubble');
    bubbleElem.addEventListener('click', bubbleClick, false);

    var captureElem = document.getElementById('btnCapture');
    captureElem.addEventListener('click', captureClcik,true);

    var main = document.getElementsByClassName('main')[0];
    main.addEventListener('click', function(e){
        console.log('main div clicked');
        console.log(e.screenX+','+e.screenY);
        console.log(e.clientX + ',' + e.clientY);
    }, true);

    // $('.main').click(function (e) {
    //     console.log('main div clicked');
    // });

    bubbleElem.addEventListener('test', function (event) {
        console.log('custom event [' + event + '] triggered');
    }, true);

    var e = new Event('test');
    bubbleElem.dispatchEvent(e);
});

function bubbleClick(event) {
    var phase = event.eventPhase;
    console.log('btnBubble clicked phase:' + phase);
}

function captureClcik() {
    var phase = event.eventPhase;
    console.log('btnCapture clicked phase:' + phase);
}