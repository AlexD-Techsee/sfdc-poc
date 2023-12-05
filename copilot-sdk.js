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
        console.log("message from copilot to SDK", m.data);
    }
})