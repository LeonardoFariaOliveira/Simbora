import Link from "next/link"

export default function DataPlace({place, type,  setPlaces, setIsLoading}:any){


    return  (

    <div className="modal absolute slide-on-modal text-black fade z-[9999] p-2 top-[1.8rem] max-w-[16.5rem] xs:max-w-[22rem] sm:max-w-[28rem] md:max-w-[35rem]  w-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalFullscreen"  aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="cursor-pointer modal-header md:mb-2 mb-0 flex flex-col flex-shrink-0 items-center justify-center py-5 px-[1.375rem] rounded-t-md">
                    <div onClick={() => {
                        setIsLoading(true)
                        setPlaces()
                        setIsLoading(false)
                    }} className=" w-full mb-3  items-center justify-start flex">
                        <img className="-rotate-90" width={30} src="../../arrow-up.svg"/>
                    </div>
                    <div className="w-full mb-3 items-center justify-center flex flex-col">
                        <img className="rounded-full md:max-w-[8.805rem] max-w-[6.805rem] bg-[#eee]" src = {place.logo}/>
                    </div>                    
                    <h1 className="font-main  -mb-1 w-full text-center font-medium md:text-[1.875rem] text-[1.475rem] ">{place.nome}</h1>
                    <h3 className="font-text font-light md:text-[1rem] text-[0.9rem] ">{type}</h3>
                </div>
                <div className="modal-body relative  py-4 px-[1.375rem]">
                    <h5 className="font-main w-full text-left font-medium md:text-[1.15rem] text-[0.9rem]  ">Descrição</h5>
                    <p className="font-text max-w-[20.625rem] md:text-[0.9rem] text-[0.75rem] sm:pr-2 sm:max-w-[32.625rem]">
                        {place.descricao}
                    </p>
                </div>
                <div className="modal-body flex flex-row flex-wrap justify-center relative py-2">
                    {/* <h5 className="font-main w-full mb-3 text-left font-medium ">Contato</h5> */}
                        <Link
                        href={`mailto:${place.email}`}>
                            <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] ml-2 md:ml-0 mr-3 md:p-2 p-[0.4rem] rounded-[4px]">
                                <img className="max-w-[3rem] w-full" src = "../../email.svg"/>
                            </button>
                        </Link>
                        <Link
                        href={`${place.site}`}>
                            <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-3 md:p-2 p-[0.4rem] rounded-[4px]">
                                <img className="max-w-[3rem] w-full"  src = "../../site.svg"/>
                            </button>
                        </Link>
                        <Link
                        href={`https://api.whatsapp.com/send?phone="${place.whats}`}>
                            <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-2 md:p-2 p-[0.4rem] rounded-[4px]">                                
                                <img src = "../../whatsapp.svg"/>
                            </button>
                        </Link>
                        <Link
                        href={`${place.insta}`}>
                            <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-3 md:p-2 p-[0.4rem] rounded-[4px]">                                
                                <img src = "../../instagram.svg"/>
                            </button>
                        </Link>
                        <Link
                        href={`${place.face}`}>
                            <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-3 md:p-2 p-[0.4rem] rounded-[4px]">                                
                                <img className="max-w-[4rem] w-full" src = "../../facebook.svg"/>
                            </button>
                        </Link>
                        <button>
                            <img src = ""/>
                        </button>
                </div>
                
            </div>
        </div>
    </div>
    )
}