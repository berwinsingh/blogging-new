"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Image from "next/image";
import { titillium_web } from "./font";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

    const signInWithGoogle = async ()=>{
        try {
            await signInWithPopup(auth, googleProvider);
          } catch (error) {
            console.error(error);
          }
    }

    const logout = async ()=>{
        try {
            await signOut(auth);
          } catch (error) {
            console.error(error);
          }
    
    }
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className={`${titillium_web.className} text-4xl font-bold`}>Login</h1>
      <Input
        placeholder="Email..."
        className="border-black w-96"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setEmail(e.currentTarget.value)
        }
      />
      <Input
        placeholder="Password..."
        className="border-black w-96"
        type="password"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPassword(e.currentTarget.value)
        }
      />
      <Button className="w bg-blue-700 font-semibold hover:bg-blue-800" onClick={signUp}>
        Login
      </Button>
      <p className="text-sm">or</p>
      <Button className="drop-shadow-md bg-white text-black text-md hover:bg-gray-100" onClick={signInWithGoogle}>
        <span id="google logo" className="mr-2">
          <Image src={"/Google icon.png"} width={18} height={18} alt="Sign in with Google icon" />
        </span>
        Sign in with Google
      </Button>
    </div>
  );
};

export default Auth;