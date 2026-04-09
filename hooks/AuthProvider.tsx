"use client";

import { auth, db } from "@/firebase/config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { ReactNode, useEffect } from "react";

interface AuthContextType {
  user: User | null;
  admin?: boolean;
  role?: userRole | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<any>;
}
type userRole = "admin" | "manager" | "editor" | "viewer";

const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [role, setRole] = React.useState<userRole | null>(null);

  function updateUsertoFirestore(user: User) {
    const userRef = doc(db, "users", user.uid);
    setDoc(
      userRef,
      {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: isAdmin(user) ? "admin" : "viewer",
      },
      { merge: true },
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ?? null);
      if (user) {
        updateUsertoFirestore(user);
        setRole(isAdmin(user) ? "admin" : "viewer");
      }
    });
    return unsubscribe; // cleanup on unmount
  }, []);

  function isAdmin(user: User | null): boolean {
    // Implement your logic to determine if the user is an admin
    // For example, you could check the user's email against a list of admin emails
    const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
    return user ? adminEmails.includes(user.email ?? "") : false;
  }
  async function login(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
    // Implement your logout logic here, e.g., using Firebase Authentication  }
  }
  async function loginWithGoogle() {
    return await signInWithPopup(auth, new GoogleAuthProvider());
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        admin: isAdmin(user),
        role,
        login,
        logout,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
