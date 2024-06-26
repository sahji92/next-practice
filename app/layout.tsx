import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header style={{
          backgroundColor:"lightblue",
          padding:"1rem"
        }}>
          <p>header</p></header>
        {children}
        <footer style={{
          backgroundColor:'lightgreen',
          padding:'1rem'
        }}><p>footer</p></footer>
        </body>
    </html>
  );
}
//every react layout accepts a child components that will be replaced by
//a child component when rendered in browser({children} inside body replaced by app/page.tsx)