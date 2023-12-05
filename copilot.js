let counter = 0;

function sendMessage() {
    const msg = {
        source: 'CP',
        value: counter
    }
    window.parent.postMessage(msg);
    counter++;
}

window.addEventListener('message', (m) => {
    if (m.data.source === 'TSL') {
        const el = document.createElement('div');
        el.innerText = "Message from Live" + JSON.stringify(m.data);
        document.getElementById('out').append(el)
        console.log("Message from Live", m.data);
    }
})