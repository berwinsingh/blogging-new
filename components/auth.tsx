"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { auth, googleProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Image from "next/image";
import { titillium_web } from "./font";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Auth = () => {
  const pathname = usePathname();
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
    <div id="authentication-menu" className="flex flex-col items-center gap-3 xs:gap-2 xs:absolute">
      <h1 className={`${titillium_web.className} text-4xl font-bold xs:mt-5`}>
        {pathname === "/sign-in" ? "Login" : "Sign Up"}
      </h1>
      <Input
        placeholder="Email..."
        type="email"
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
        {pathname === "/sign-in" ? "Login" : "Sign Up"}
      </Button>
      <p className="text-sm">or</p>
      <Button className="drop-shadow-md bg-white text-black text-md hover:bg-gray-100" onClick={signInWithGoogle}>
        <span className="mr-2">
          <Image id="google-logo" src={"/Google icon.png"} width={18} height={18} alt="Sign in with Google, Google logo" className="xs:scale-150" />
        </span>
        {pathname === "/sign-in" ? "Login using" : "Sign up with"} Google
      </Button>
      <Link href={pathname === "/sign-in" ? "sign-up" : "sign-in"} className="underline text-blue-500 text-sm hover:text-blue-600 xs:mb-4">
        {pathname === "/sign-in" ? "Create a new account" : "Already have a account? Login."}
      </Link>
    </div>
  );
};

export default Auth;