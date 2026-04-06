import React from "react";

export default function AuthProvider() {
  const AuthContext = React.createContext(null);
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("AuthProvider must be used within an AuthContext.Provider");
  }
}
