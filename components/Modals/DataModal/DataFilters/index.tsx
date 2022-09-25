import Link from "next/link";


export default function DataFilters({title, iconUrl, active, type}:any){

    return(
        <>
            <div className={`flex flex-col  font-main font-${active ? "medium" : "regular"} text-black justify-center px-[1rem] py-1 cursor-pointer items-center md:max-w-[5.7rem]   max-w-[4.7rem]  `}>
                <img className="md:max-w-[3.5rem] max-w-[3rem] rounded-[4px] w-full" src = {iconUrl}/>
                <h5 className="text-[0.8rem] md:text-[1rem]">{title}</h5>
            </div> 
        </>
    )

}