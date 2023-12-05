function initTSL(){
    const cpIframe = document.getElementById('ifr-tsl');
    if (cpIframe) return;

    const iframe = createIframe('ifr-tsl', 'tsl-app.html');
    document.getElementById('tsl-container').append(iframe);
}

function createIframe(id, src) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.id = id;
    iframe.width = "300px";
    iframe.height = "400px";
    return iframe;
}