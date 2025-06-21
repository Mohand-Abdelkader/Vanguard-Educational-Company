const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";
import { auth } from "../config/firebase-config";

export async function getAdmission() {
  try {
    const response = await fetch(`${FIREBASE_URL}/admission.json`);
    if (!response.ok) throw new Error("Failed to fetch admission");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching admission:", error);
    throw error;
  }
}

export async function getAdmissionById(admissionId) {
  try {
    const response = await fetch(
      `${FIREBASE_URL}/admission/${admissionId}.json`
    );
    if (!response.ok) throw new Error("Failed to fetch admission");
    const data = await response.json();
    return data ? { id: admissionId, ...data } : null;
  } catch (error) {
    console.error("Error fetching admission:", error);
    throw error;
  }
}

export async function createAdmission(admission) {
  try {
    const response = await fetch(`${FIREBASE_URL}/admission.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admission),
    });

    if (!response.ok) throw new Error("Failed to create admission");
    const data = await response.json();
    return { id: data.name, ...admission }; // Firebase returns { name: "-NxYz..." } for the generated ID
  } catch (error) {
    console.error("Error adding admission:", error);
    throw error;
  }
}

export async function deleteAdmission(admissionId) {
  try {
    const user = auth.currentUser; // Get the current authenticated user
    if (!user) throw new Error("User is not authenticated");

    // Get the authentication token
    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/admission/${admissionId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Failed to delete admission");

    return true;
  } catch (error) {
    console.error("Error deleting admission:", error);
    throw error;
  }
}
