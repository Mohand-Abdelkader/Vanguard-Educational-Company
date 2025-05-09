const FIREBASE_URL =
  "https://vanguard-educational-company-default-rtdb.firebaseio.com";
import { auth } from "../config/firebase-config";

export async function getBlogs() {
  try {
    const response = await fetch(`${FIREBASE_URL}/blogs.json`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const data = await response.json();
    // Convert Firebase object to array
    return data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
export async function getBlogById(blogId) {
  try {
    const response = await fetch(`${FIREBASE_URL}/blogs/${blogId}.json`);
    if (!response.ok) throw new Error("Failed to fetch blog");
    const data = await response.json();
    return data ? { id: blogId, ...data } : null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}
export async function addBlog(blog) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(`${FIREBASE_URL}/blogs.json?auth=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (!response.ok) throw new Error("Failed to add blog");
    const data = await response.json();
    return { id: data.name, ...blog };
  } catch (error) {
    console.error("Error adding blog:", error);
    throw error;
  }
}
export async function updateBlog(blogId, blog) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/blogs/${blogId}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    if (!response.ok) throw new Error("Failed to update blog");
    return { id: blogId, ...blog };
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
}
export async function deleteBlog(blogId) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
      `${FIREBASE_URL}/blogs/${blogId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete blog");
    return blogId;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
}
export async function getBlogByTitle(title) {
  try {
    const response = await fetch(`${FIREBASE_URL}/blogs.json`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const data = await response.json();

    if (!data) return null;

    // Convert Firebase object to array and find the blog with matching title
    const blogs = Object.entries(data).map(([id, blog]) => ({
      id,
      ...blog,
    }));

    // Find blog where either English or Arabic title matches
    const foundBlog = blogs.find(
      (blog) => blog.title.en === title || blog.title.ar === title
    );

    return foundBlog || null;
  } catch (error) {
    console.error("Error fetching blog by title:", error);
    throw error;
  }
}
