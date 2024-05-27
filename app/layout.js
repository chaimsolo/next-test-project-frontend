import { Assistant } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Html } from "next/document";
const assistent = Assistent({subsets: ["hebrew", "latin"]})

export const metadata = {
  title: "fruits",
  description: "cheep fruits",
}

export default function RootLayot({children}){
  return (
    <html lang="en">
      <body className={assistent.className}>
      </body>
    </html>
  )
}

