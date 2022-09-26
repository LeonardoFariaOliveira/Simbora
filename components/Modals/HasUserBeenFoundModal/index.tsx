import Link from "next/link";
import Cancel from './cancel.svg'

interface HasUserBeenFoundModalProps{

    latitude:number
    longitude:number
    setHasUserBeenFound(value:boolean): void

}

export default function HasUserBeenFoundModal({latitude, longitude, setHasUserBeenFound}:HasUserBeenFoundModalProps){


    return(
        <>
            <div className="bg-light-green slide-on-modal absolute z-[999] md:top-[9rem] top-[20rem] right-1 md:right-3 rounded-[4px] py-5 pl-2 md:pl-6 pr-0 mb-4 max-w-[17rem] md:max-w-[24rem]  w-full text-base border-green border text-black" role="alert">
                <div className="flex-row flex justify-between pr-5">
                    <h4 className="text-md font-medium leading-tight mb-4">Ei encontramos você!</h4>
                    <div
                    onClick={()=> setHasUserBeenFound(false)} 
                     className = "max-w-[1.5rem] text-black transition-all duration-700 h-[2.438rem] cursor-pointer w-full relative ">
                        <img src="./cancel-555.svg"/>
                    </div>
                </div>
                <Link
                href={`/location?latitude=${latitude}&longitude=${longitude}`}
                >
                    <button className=" text-md  text-center items-center pr-4 max-w-[15.875rem] md:max-w-[20.875rem] w-full h-[3rem] pl-4 pt-2 pb-2 rounded-[4px] bg-green text-white text-text font-medium ">
                        Simbora turistar
                    </button>
                </Link>
            </div>
        </>
    )


}