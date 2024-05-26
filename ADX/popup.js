document.getElementById('capture').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: captureArea
        });
    });
});

function captureArea() {
    document.body.style.cursor = 'crosshair';

    const captureDiv = document.createElement('div');
    captureDiv.style.position = 'fixed';
    captureDiv.style.border = '2px dashed red';
    captureDiv.style.zIndex = '9999';
    document.body.appendChild(captureDiv);

    let startX, startY, endX, endY;

    const onMouseMove = (event)  => {
        endX = event.clientX;
        endY = event.clientY;
        captureDiv.style.width = `${Math.abs(endX - startX)}px`;
        captureDiv.style.height = `${Math.abs(endY - startY)}px`;
        captureDiv.style.left = `${Math.min(startX, endX)}px`;
        captureDiv.style.top = `${Math.min(startY, endY)}px`;
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.body.style.cursor = 'default';
        captureDiv.remove();

        chrome.runtime.sendMessage({
            startX,
            startY,
            width: Math.abs(endX - startX),
            height: Math.abs(endY - startY)
        });
    };

    document.addEventListener('mousedown', (event) => {
        startX = event.clientX;
        startY = event.clientY;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp, { once: true });
    }, { once: true });
}
