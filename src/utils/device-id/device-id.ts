async function createUniqueDeviceId(): Promise<string> {
    const navigator = window.navigator;
    const screen = window.screen;

    // Collect device characteristics similar to Android
    const userAgent = navigator.userAgent;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const colorDepth = screen.colorDepth;
    const pixelRatio = window.devicePixelRatio;
    const language = navigator.language;

    // Combine characteristics into a single string
    const deviceInfo = `${userAgent}|${screenWidth}x${screenHeight}|${colorDepth}|${pixelRatio}|${language}`;

    // Use SHA-256 hashing (similar to Android's UUID generation)
    return await sha256(deviceInfo);
}

async function sha256(str: string): Promise<string> {
    // Encode the string as UTF-8
    const msgBuffer = new TextEncoder().encode(str);

    // Hash the message
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

    // Convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // Convert bytes to hex string
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    // Take the first 16 characters of the hash (similar to UUID)
    return hashHex.slice(0, 16);
}

export async function generateDeviceId(): Promise<string> {
    // Check if a device ID already exists in local storage
    const storedDeviceId = localStorage.getItem("DEVICE_ID");

    if (storedDeviceId) {
        return storedDeviceId;
    }

    // Generate a new device ID
    const newDeviceId = await createUniqueDeviceId();

    // Store the new device ID in local storage
    localStorage.setItem("DEVICE_ID", newDeviceId);

    return newDeviceId;
}
