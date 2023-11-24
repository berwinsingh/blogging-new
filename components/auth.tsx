"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Image from "next/image";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

    const signInWithGoogle = async ()=>{
        try {
            await signInWithPopup(auth, googleProvider);
            // await console.log(auth?.currentUser?.email);
            
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
      <Button className="w" onClick={signIn}>
        Login
      </Button>
      <Button className="drop-shadow-md bg-white text-black text-md hover:bg-gray-100" onClick={signInWithGoogle}>
        <span id="google logo" className="mr-2">
          <Image src={"/Google icon.png"} width={18} height={18} alt="" />
        </span>
        Sign in with Google
      </Button>
    </div>
  );
};

export default Auth;
