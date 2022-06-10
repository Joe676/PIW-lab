import { auth, firestore } from "./init";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
    } from "firebase/firestore";


const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export const loginWithGithub = async () => {
    try {
        const response = await signInWithPopup(auth, githubProvider);
        const user = response.user;
        
        const q = doc(firestore, "users", user.uid);

        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName+"-gh",
                authProvider: "google",
                email: user.email
            });
        }   

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        
        const q = doc(firestore, "users", user.uid);

        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }   

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};


export const logout = () => {
    signOut(auth);
};
