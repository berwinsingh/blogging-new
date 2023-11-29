"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { titillium_web } from "./font";
import { usePathname } from "next/navigation";

const NavElements = ()=>{
    const pathname = usePathname()
    return(
        <div className="flex gap-2 items-center">
            <Link href={"/home"} className={`link ${pathname === '/' ? "text-blue-700" : ""} text-sm hover:text-blue-800`}>Home</Link>
            <Link href={"/blog"} className={`link ${pathname === '/blog' ? "text-blue-700" : ""} text-sm hover:text-blue-800`}>Blog</Link>
            <Link href={"/about"} className={`link ${pathname === '/about' ? "text-blue-700" : ""} text-sm hover:text-blue-800`}>About</Link>
        </div>
    )
}

const InteractiveButtons = ()=>{
    return(
        <div className="flex gap-3 font-bold">
            <Link href={"/sign-in"}>
                <Button className="bg-blue-700 hover:bg-blue-800 p-2 drop-shadow-md">
                    Login
                </Button>
            </Link>
            <Link href={"/sign-up"}>
                <Button className="border-blue-700 bg-transparent text-black border-2 p-2 hover:bg-blue-800 hover:text-white drop-shadow-md">
                    Sign Up
                </Button>
            </Link>
        </div>
    )
}

const Header = ()=>{
    return(
        <div className="flex justify-between py-2 px-2 items-center bg-white bg-opacity-30 backdrop-blur-xl">
            <Link href={"/"} id="logo" className={`flex items-center gap-2`}>
                <Image src="/logo.png" alt="content canvas logo" width={35} height={35} className="rounded-lg"/>
                <h3 className={`${titillium_web.className} text-xl font-semibold`}>Content Canvas</h3>
            </Link>
            <NavElements/>
            <InteractiveButtons />
        </div>
    )
}

export default Header;