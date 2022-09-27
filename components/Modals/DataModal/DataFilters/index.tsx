
import Image from "next/image";

export default function DataFilters({title, iconUrl, active, type}:any){

    return(
        <>
            <div className={`flex flex-col  font-main font-${active ? "medium" : "regular"} text-black justify-center px-[1rem] py-1 cursor-pointer items-center md:max-w-[5.7rem]   max-w-[4.7rem]  `}>
                <div className="block md:max-w-[3rem] max-w-[3rem] rounded-[4px] w-full"><Image layout="responsive" width={20} height = {20} className="" src = {iconUrl}/></div>
                <h5 className="text-[0.8rem] md:text-[1rem]">{title}</h5>
            </div> 
        </>
    )

}