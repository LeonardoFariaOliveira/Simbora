import { useState } from "react";
import Image from 'next/image'


interface CardSlideProps{

    scrollX: number

}

export default function CardSlide({scrollX}:CardSlideProps){

    return(
        <>
            <div className={`relative inline-block ml-[${scrollX}] `}>
                <div className="  z-[1]">
                    <img className="w-full max-w-[28rem]" src = "./Group 23.svg"/>
                </div>
                {/* <div className="z-[99] absolute w-full max-w-[20.375rem] -mt-[6.8rem] pl-6">
                    <h1 className=" font-main font-medium text-black text-[1rem]">Santuário São Miguel Arcanjo</h1>
                    <h3 className=" font-text font-regular text-black text-[0.8rem] mb-2">Bandeirantes(PR)</h3>
                    <button className="h-[2.8rem] text-white font-medium max-w-[17.375rem] w-full bg-green rounded-[4px] ">Saiba mais</button>
                </div> */}
                
            </div>
        </>
    )


}