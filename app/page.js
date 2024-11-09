"use client"
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BlogList from "@/components/BlogList";

export default function Home() {

  return (
    <>
    <ToastContainer theme="dark" />
    <Header/>
    <BlogList/>
    <Footer/>
    </>
  );
}
