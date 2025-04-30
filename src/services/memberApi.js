const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";

export async function getMembers() {
  try {
    const response = await fetch(`${FIREBASE_URL}/members.json`);
    if (!response.ok) throw new Error("Failed to fetch members");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching members:", error);
    throw error;
  }
}

export async function getMemberById(memberId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/members/${memberId}.json`);
    if (!response.ok) throw new Error("Failed to fetch member");
    const data = await response.json();
    return data ? { id: memberId, ...data } : null;
  } catch (error) {
    console.error("Error fetching member:", error);
    throw error;
  }
}

export async function addMember(member) {
  try {
    const response = await fetch(`${FIREBASE_URL}/members.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) throw new Error("Failed to add member");
    const data = await response.json();
    return { id: data.name, ...member }; // Firebase returns { name: "-NxYz..." } for the generated ID
  } catch (error) {
    console.error("Error adding member:", error);
    throw error;
  }
}

export async function updateMember(memberId, member) {
  try {
    const response = await fetch(`${FIREBASE_URL}/members/${memberId}.json`, {
      method: "PATCH", // Using PATCH instead of PUT to update only the provided fields
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) throw new Error("Failed to update member");
    const data = await response.json();
    return { id: memberId, ...data };
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
}

export async function deleteMember(memberId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/members/${memberId}.json`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete member");
    return true; // Return true on successful deletion
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
}
