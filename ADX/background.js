chrome.action.onClicked.addListener((tab) => {
    const url = new URL(tab.url);

    // Ensure the extension does not run on chrome://, about:, or edge:// URLs
    if (url.protocol === "chrome:" || url.protocol === "about:" || url.protocol === "edge:") {
        console.log("Cannot capture chrome://, about:, or edge:// URLs");
        return;
    }

    console.log("Extension icon clicked. Injecting scripts into the page...");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['libs/html2canvas.min.js']
    }, () => {
        console.log("Scripts injected. Executing captureDiv function...");
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: captureDiv
        });
    });
});

function captureDiv() {
    console.log("captureDiv function executed. Looking for the specified div...");
    const div = document.querySelector('.chart-container-border');
    if (!div) {
        console.error('Div not found');
        return;
    }
    console.log("Specified div found. Capturing the screenshot...");

    html2canvas(div).then(canvas => {
        console.log("Screenshot captured. Converting canvas to Blob...");
        canvas.toBlob(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log("Blob converted to Data URL. Sending data to background script...");
                chrome.runtime.sendMessage({
                    imageData: reader.result
                });
            };
            reader.readAsDataURL(blob);
        });
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.imageData) {
        console.log("Received image data in background script. Sending data to Flask server...");
        console.log("Image data:", message.imageData);

        fetch('http://127.0.0.1:5003/save-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageData: message.imageData })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Image data successfully sent to Flask server. Response:", data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});