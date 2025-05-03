const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";

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
    const response = await fetch(`${FIREBASE_URL}/logos.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logo),
    });

    if (!response.ok) throw new Error("Failed to add logo");
    const data = await response.json();
    return { id: data.name, ...logo }; // Firebase returns { name: "-NxYz..." } for the generated ID
  } catch (error) {
    console.error("Error adding logo:", error);
    throw error;
  }
}
export async function updateLogo(logoId, logo) {
  try {
    const response = await fetch(`${FIREBASE_URL}/logos/${logoId}.json`, {
      method: "PATCH", // Using PATCH instead of PUT to update only the provided fields
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logo),
    });

    if (!response.ok) throw new Error("Failed to update logo");
    return { id: logoId, ...logo };
  } catch (error) {
    console.error("Error updating logo:", error);
    throw error;
  }
}
export async function deleteLogo(logoId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/logos/${logoId}.json`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete logo");
    return logoId;
  } catch (error) {
    console.error("Error deleting logo:", error);
    throw error;
  }
}
