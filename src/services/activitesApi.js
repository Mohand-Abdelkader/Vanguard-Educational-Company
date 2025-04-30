const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";

export async function getActivities() {
  try {
    const response = await fetch(`${FIREBASE_URL}/activities.json`);
    if (!response.ok) throw new Error("Failed to fetch activities");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
}
export async function getActivityById(activityId) {
  try {
    const response = await fetch(
      `${FIREBASE_URL}/activities/${activityId}.json`
    );
    if (!response.ok) throw new Error("Failed to fetch activity");
    const data = await response.json();
    return data ? { id: activityId, ...data } : null;
  } catch (error) {
    console.error("Error fetching activity:", error);
    throw error;
  }
}
export async function addActivity(activity) {
  try {
    const response = await fetch(`${FIREBASE_URL}/activities.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    });

    if (!response.ok) throw new Error("Failed to add activity");
    const data = await response.json();
    return { id: data.name, ...activity }; // Firebase returns { name: "-NxYz..." } for the generated ID
  } catch (error) {
    console.error("Error adding activity:", error);
    throw error;
  }
}
export async function updateActivity(activityId, activity) {
  try {
    const response = await fetch(
      `${FIREBASE_URL}/activities/${activityId}.json`,
      {
        method: "PATCH", // Using PATCH instead of PUT to update only the provided fields
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activity),
      }
    );

    if (!response.ok) throw new Error("Failed to update activity");
    return { id: activityId, ...activity };
  } catch (error) {
    console.error("Error updating activity:", error);
    throw error;
  }
}
export async function deleteActivity(activityId) {
  try {
    const response = await fetch(
      `${FIREBASE_URL}/activities/${activityId}.json`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete activity");
  } catch (error) {
    console.error("Error deleting activity:", error);
    throw error;
  }
}
