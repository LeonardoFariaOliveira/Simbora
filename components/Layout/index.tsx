
import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({children}:PropsWithChildren){


    return(

        <div className="flex flex-1 flex-row overflow-x-hidden  w-full flex-wrap min-h-screen bg-hero font-body justify-center">
            <Navbar/>
            <main className=" flex flex-col w-full justify-center  ">
                {children}
            </main>
            <Footer/>
        </div>

    )


}