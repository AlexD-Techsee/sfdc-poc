function initCopilot() {
    const cpIframe = document.getElementById('ifr-cp');
    if (cpIframe) return;

    const iframe = createIframe('ifr-cp', 'copilot-app.html');
    document.getElementById('cp-container').append(iframe);
}

window.addEventListener('message', (m) => {
    if (m.data.source === 'TSL') {
        const cpIframe = document.getElementById('ifr-cp');
        cpIframe.contentWindow.postMessage(m.data);
    } else if (m.data.source === 'CP') {
        const el = document.createElement('div');
        el.innerText = "Message from Copilot" + JSON.stringify(m.data);
        document.getElementById('out').append(el)
        console.log("message from copilot to SDK", m.data);
    }
})