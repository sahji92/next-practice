import React from "react";

export default function AuthLayout({children}: 
    {
      children:React.ReactNode;
    }) {
  return <>
  {children}
  <h1>authlayout in login and password</h1>
  </>;
}
//{children} is replaced by login and register...not forget password
