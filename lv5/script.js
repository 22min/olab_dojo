function zero_padding(num){
    return ('00'+ num).slice(-2)
}
function update() {
    const now = new Date();
    const hour = zero_padding(now.getHours());
    const min = zero_padding(now.getMinutes());
    const sec = zero_padding(now.getSeconds());
    document.querySelector('h1').innerHTML = hour+'時'+min+'分'+sec+'秒';
}

document.addEventListener('DOMContentLoaded', function() {
    update();
    setInterval(update, 1000);
});