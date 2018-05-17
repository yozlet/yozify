
var oldYozDiv = document.getElementById('yozdiv');
if (oldYozDiv) {
    oldYozDiv.parentNode.removeChild(oldYozDiv);
}

var yozDiv = document.createElement('div');
yozDiv.setAttribute('id', 'yozdiv');
var yozImg = document.createElement('img');
yozImg.src = chrome.runtime.getURL(_yozify_bloke + "_sm.png");
yozDiv.appendChild(yozImg);
yozDiv.style = 'position: fixed; top: 100%; left: 100%; margin-left: -200px; margin-top: -200px';
document.body.appendChild(yozDiv);
console.log(`Appendified with a ${_yozify_bloke}!`);
