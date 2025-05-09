const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";
import { auth } from "../config/firebase-config";

export async function getService() {
  try {
    const response = await fetch(`${FIREBASE_URL}/services.json`);
    if (!response.ok) throw new Error("Failed to fetch services");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}
export async function getServiceById(serviceId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/services/${serviceId}.json`);
    if (!response.ok) throw new Error("Failed to fetch service");
    const data = await response.json();
    return data ? { id: serviceId, ...data } : null;
  } catch (error) {
    console.error("Error fetching service:", error);
    throw error;
  }
}
export async function addService(service) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/services.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      }
    );

    if (!response.ok) throw new Error("Failed to add service");
    const data = await response.json();
    return { id: data.name, ...service };
  } catch (error) {
    console.error("Error adding service:", error);
    throw error;
  }
}
export async function updateService(serviceId, service) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/services/${serviceId}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      }
    );

    if (!response.ok) throw new Error("Failed to update service");
    return { id: serviceId, ...service };
  } catch (error) {
    console.error("Error updating service:", error);
    throw error;
  }
}
export async function deleteService(serviceId) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/services/${serviceId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete service");
    return true;
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
}
