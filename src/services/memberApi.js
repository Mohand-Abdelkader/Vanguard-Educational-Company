const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";
import { auth } from "../config/firebase-config";

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
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(`${FIREBASE_URL}/members.json?auth=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) throw new Error("Failed to add member");
    const data = await response.json();
    return { id: data.name, ...member };
  } catch (error) {
    console.error("Error adding member:", error);
    throw error;
  }
}

export async function updateMember(memberId, member) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/members/${memberId}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      }
    );

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
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/members/${memberId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete member");
    return true;
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
}
