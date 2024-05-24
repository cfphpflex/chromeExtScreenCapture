chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['libs/html2canvas.min.js']
    }, () => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: captureDiv
        });
    });
});

function captureDiv() {
    const div = document.querySelector('.layout__area--center');
    if (!div) {
        console.error('Div not found');
        return;
    }

    html2canvas(div).then(canvas => {
        canvas.toBlob(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                chrome.runtime.sendMessage({
                    imageData: reader.result
                });
            };
            reader.readAsDataURL(blob);
        });
    });
}