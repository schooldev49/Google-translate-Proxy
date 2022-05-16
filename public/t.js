let button = document.querySelector('[aria-label="Translate website"]');

let thebox = document.querySelector('[title="Input must be a non-empty, well-formed web URL"')
button.addEventListener('click',function(event) {
  event.preventDefault();

    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
    let url = thebox.value
       
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

 const iframe = document.createElement("iframe")
        const style = iframe.style
        const link = document.createElement("link")

        document.title = "Classes"
        link.rel = "icon";
        link.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
            iframe.src = window.location.origin + '/schoolMath/' + __uv$config.encodeUrl(url);  
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.zIndex = 999
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        document.body.appendChild(iframe)
       // window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    })
})
function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};