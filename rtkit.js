// RealtimeKit WebSocket Client
// by ChatGPT for PBSC Wesel

const RTKIT_URL = "wss://kit.rtirl.com/socket.io/?EIO=4&transport=websocket";

let socket;

function connectSocket() {
    console.log("Connecting to RealtimeKit WebSocket...");
    socket = new WebSocket(RTKIT_URL);

    socket.onopen = () => {
        console.log("✅ WebSocket connected.");
    };

    socket.onclose = (event) => {
        console.log("⚠️ WebSocket disconnected. Reconnecting in 3s...", event);
        setTimeout(connectSocket, 3000);
    };

    socket.onerror = (error) => {
        console.error("WebSocket error:", error);
    };

    socket.onmessage = (msg) => {
        console.log("🔄 Message from RTKit:", msg.data);
    };
}

function sendSocketCommand(command, payload = {}) {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket not connected. Command not sent:", command);
        return;
    }

    // RealtimeKit uses a "42" prefix for socket.io messages
    const message = `42["${command}",${JSON.stringify(payload)}]`;
    console.log("📤 Sending:", message);
    socket.send(message);
}

function switchScene(sceneName) {
    sendSocketCommand("SetCurrentScene", { name: sceneName });
}

function startStreaming() {
    sendSocketCommand("StartStreaming");
}

function stopStreaming() {
    sendSocketCommand("StopStreaming");
}

// Start connection on load:
connectSocket();
