
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', click);
    }
});

function click(e) {
    var bloke = e.target.id;
    blokeify(bloke);
    updateIcon(bloke);
}

function blokeify(bloke) {
    console.log("Attempting to blokeify...");
    chrome.tabs.executeScript(null, {code: `_yozify_bloke = '${bloke}';`});
    chrome.tabs.executeScript(null, {file: "yoz.js"});
}

function updateIcon(bloke) {
    chrome.browserAction.setIcon({path: bloke + '32.png'})
    chrome.browserAction.setTitle({
        title: "Show this to " + bloke.charAt(0).toUpperCase() + bloke.slice(1)
    })
}