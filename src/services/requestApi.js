const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";
import { auth } from "../config/firebase-config";
export async function getRequests() {
  try {
    const response = await fetch(`${FIREBASE_URL}/requests.json`);
    if (!response.ok) throw new Error("Failed to fetch requests");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching requests:", error);
    throw error;
  }
}

export async function getRequestById(requestId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/requests/${requestId}.json`);
    if (!response.ok) throw new Error("Failed to fetch requests");
    const data = await response.json();
    return data ? { id: requestId, ...data } : null;
  } catch (error) {
    console.error("Error fetching request:", error);
    throw error;
  }
}

export async function createRequest(request) {
  try {
    const response = await fetch(`${FIREBASE_URL}/requests.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) throw new Error("Failed to create request");
    const data = await response.json();
    return { id: data.name, ...request }; // Firebase returns { name: "-NxYz..." } for the generated ID
  } catch (error) {
    console.error("Error adding request:", error);
    throw error;
  }
}

export async function deleteRequest(requestId) {
  try {
    const user = auth.currentUser; // Get the current authenticated user
    if (!user) throw new Error("User is not authenticated");

    // Get the authentication token
    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/requests/${requestId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Failed to delete request");

    return true;
  } catch (error) {
    console.error("Error deleting request:", error);
    throw error;
  }
}
