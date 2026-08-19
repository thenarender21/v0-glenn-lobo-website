const encoder = new TextEncoder();
const SECRET = process.env.SESSION_SECRET || "thakurjee-properties-secret-key-default-987654321";

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const normalized = base64.replace(/-/g, "+").replace(/_/g, "/");
  const binaryString = atob(normalized);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

async function signHmac(data: string, secret: string): Promise<string> {
  const keyBuf = encoder.encode(secret);
  const key = await crypto.subtle.importKey(
    "raw",
    keyBuf,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return arrayBufferToBase64(sigBuf);
}

async function verifyHmac(data: string, signature: string, secret: string): Promise<boolean> {
  try {
    const keyBuf = encoder.encode(secret);
    const key = await crypto.subtle.importKey(
      "raw",
      keyBuf,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
  );
  const sigBuf = base64ToArrayBuffer(signature);
  return await crypto.subtle.verify("HMAC", key, sigBuf, encoder.encode(data));
  } catch (e) {
    return false;
  }
}

export interface SessionPayload {
  email: string;
  expires: number;
}

export async function createSessionToken(email: string): Promise<string> {
  const duration = 24 * 60 * 60 * 1000; // 24 hours
  const expires = Date.now() + duration;
  const payload: SessionPayload = { email, expires };
  const payloadStr = JSON.stringify(payload);
  const payloadBase64 = btoa(payloadStr)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  
  const signature = await signHmac(payloadBase64, SECRET);
  return `${payloadBase64}.${signature}`;
}

export async function verifySessionToken(token: string | null | undefined): Promise<SessionPayload | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadBase64, signature] = parts;
  const isValid = await verifyHmac(payloadBase64, signature, SECRET);
  if (!isValid) return null;

  try {
    const normalized = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
    const payloadStr = atob(normalized);
    const payload: SessionPayload = JSON.parse(payloadStr);

    if (payload.expires < Date.now()) {
      return null; // Expired
    }
    return payload;
  } catch (e) {
    return null;
  }
}
