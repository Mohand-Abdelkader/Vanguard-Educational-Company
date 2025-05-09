const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";
import { auth } from "../config/firebase-config";

export async function getLogos() {
  try {
    const response = await fetch(`${FIREBASE_URL}/logos.json`);
    if (!response.ok) throw new Error("Failed to fetch logos");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching logos:", error);
    throw error;
  }
}
export async function getLogoById(logoId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/logos/${logoId}.json`);
    if (!response.ok) throw new Error("Failed to fetch logo");
    const data = await response.json();
    return data ? { id: logoId, ...data } : null;
  } catch (error) {
    console.error("Error fetching logo:", error);
    throw error;
  }
}
export async function addLogo(logo) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(`${FIREBASE_URL}/logos.json?auth=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logo),
    });

    if (!response.ok) throw new Error("Failed to add logo");
    const data = await response.json();
    return { id: data.name, ...logo };
  } catch (error) {
    console.error("Error adding logo:", error);
    throw error;
  }
}
export async function updateLogo(logoId, logo) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/logos/${logoId}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logo),
      }
    );

    if (!response.ok) throw new Error("Failed to update logo");
    return { id: logoId, ...logo };
  } catch (error) {
    console.error("Error updating logo:", error);
    throw error;
  }
}
export async function deleteLogo(logoId) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/logos/${logoId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Failed to delete logo");
    return logoId;
  } catch (error) {
    console.error("Error deleting logo:", error);
    throw error;
  }
}
