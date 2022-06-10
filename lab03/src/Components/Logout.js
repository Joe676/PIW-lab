import React from "react";
import { logout } from "../Firebase/users";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/init";
import { logInWithGoogle } from "../Firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";

const Logout = () => {
    
    const [user, loading, error] = useAuthState(auth);

    if (user) {
        return (
            <>
                <button onClick={logout} className="nice-btn">Logout</button>
                <span className="user-name">{user.displayName}</span>
            </>
        );   
    }
}

export default Logout;