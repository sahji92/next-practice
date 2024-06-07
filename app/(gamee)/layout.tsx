'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function GameLayout({children}: 
    {
      children:React.ReactNode;
    }) {
        const navLinks=[
            {name:'rock',href:'/rock'},
            {name:'paper',href:'/paper'},
            {name:'scissor',href:'/scissor'}
        ];
        const pathName=usePathname();
  return( 
  <div>
   {navLinks.map((link)=>{
    const isActive=pathName.startsWith(link.href); 
    return(
        <Link href={link.href} key={link.name}
        className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>
        {link.name}
        </Link>
    );
   })}
  
  </div>
  );
}
