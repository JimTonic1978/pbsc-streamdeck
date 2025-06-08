// RealtimeKit Socket.IO Client
// by ChatGPT for PBSC Wesel

// WICHTIG: Hier deine RTKit Room URL → KEINE wss://, sondern normale URL!
const RTKIT_ROOM_URL = "https://kit.rtirl.com/dbdd459b-aafe-4a55-adf2-795b547db572";

// Connect via Socket.IO
console.log("Connecting to RealtimeKit via socket.io...");
const socket = io(RTKIT_ROOM_URL);

socket.on('connect', () => {
    console.log("✅ Socket.IO connected!", socket.id);
});

socket.on('disconnect', (reason) => {
    console.log("⚠️ Socket.IO disconnected:", reason);
});

socket.on('connect_error', (error) => {
    console.error("❌ Socket.IO connection error:", error);
});

function switchScene(sceneName) {
    console.log("📤 Switching scene to:", sceneName);
    socket.emit("SetCurrentScene", { name: sceneName });
}

function startStreaming() {
    console.log("📤 Starting stream");
    socket.emit("StartStreaming");
}

function stopStreaming() {
    console.log("📤 Stopping stream");
    socket.emit("StopStreaming");
}
