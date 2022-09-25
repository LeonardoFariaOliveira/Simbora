import Link from "next/link";


export default function DataPlaces({imgUrl, title, type}:any){

    return(
        <>
            <div className="flex  flex-row text-black">
                <img className="rounded-full mr-4 md:max-w-[5rem] max-w-[4rem] md:max-h-[5rem] max-h-[4rem] bg-[#eee]" src = {imgUrl}/>
                <div className="mt-2">
                    <h3 className="font-main -mb-1 font-medium md:text-[1.45rem] text-[1.25rem] ">{title}</h3>
                    <h5 className="font-text font-light md:text-[1rem] text-[0.85rem] ">{type}</h5>
                </div>
            </div>
        </>
    )

}