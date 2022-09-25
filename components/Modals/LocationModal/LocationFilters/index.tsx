import Link from "next/link";


export default function LocationFilters({title, iconUrl, active, type}:any){

    return(
        <>
            <div className={`flex flex-row  font-main font-${active ? "medium" : "regular"} text-black justify-center px-[1rem] py-1 cursor-pointer items-center md:max-w-[25.7rem] max-w-[4.7rem]  `}>
                <img className=" rounded-[4px] w-[3.5rem] mr-2" src = {iconUrl}/>
                <h5 className="text-[0.8rem] md:text-[1.5rem]">{title}</h5>
            </div> 
        </>
    )

}