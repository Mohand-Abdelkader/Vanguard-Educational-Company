import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";

export const login = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return {
    user: userCredential.user,
  };
};
