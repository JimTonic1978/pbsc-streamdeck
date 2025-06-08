// RealtimeKit Client Wrapper
// by ChatGPT for PBSC Wesel

// WICHTIG: DEINE RTKit Room URL:
const RTKIT_ROOM_URL = "https://kit.rtirl.com/dbdd459b-aafe-4a55-adf2-795b547db572";

console.log("Connecting to RTKit Client:", RTKIT_ROOM_URL);

// Client erzeugen
const rtkit = RTKit.createClient({
    url: RTKIT_ROOM_URL
});

rtkit.on("connected", () => {
    console.log("✅ RTKit client connected!");
});

rtkit.on("disconnected", () => {
    console.log("⚠️ RTKit client disconnected!");
});

rtkit.on("error", (error) => {
    console.error("❌ RTKit client error:", error);
});

// Button-Funktionen
function switchScene(sceneName) {
    console.log("📤 Switching scene to:", sceneName);
    rtkit.setCurrentScene(sceneName);
}

function startStreaming() {
    console.log("📤 Starting stream");
    rtkit.startStreaming();
}

function stopStreaming() {
    console.log("📤 Stopping stream");
    rtkit.stopStreaming();
}
