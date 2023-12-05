let counter = 0;

function sendMessage() {
    const msg = {
        source: 'TSL',
        value: counter
    }
    window.parent.postMessage(msg);
    counter++;
}


// window.addEventListener('message', (m) => {
//     if (m.data.source === 'TSL') {
//         console.log("Message from Live", m.data);
//     }
// })