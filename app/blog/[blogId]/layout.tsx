import React from "react";

export default function blogDetailsLayout({children}: 
    {
      children:React.ReactNode;
    }) {
  return <>
  {children}
  <h1>Features Products</h1>
  </>;
}
//here {children} replaced by [blogId]/page.tsx
