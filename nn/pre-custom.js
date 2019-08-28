// utils function
function insertScript(d, s, id, url) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = url;
    fjs.parentNode.insertBefore(js, fjs);
}

function loadOrderScript(url1, url2){
    var script1 = document.createElement('script');
    script1.setAttribute('src', url1);
    script1.onload = function() {
        // console.log('url2: ' + url2);
        if (typeof(url2) != 'undefined')
        {
            var script2 = document.createElement('script');
            script2.setAttribute('src', url2);                    
            document.body.appendChild(script2);
        }
    }
    document.body.appendChild(script1);
}

// Ignore event for browser
window.addEventListener("touchstart", preventTouch, false);
window.addEventListener("touchmove", preventTouch, false);
window.addEventListener("touchend", preventTouch, false);
function preventTouch(evt) {
    evt.preventDefault();
}
