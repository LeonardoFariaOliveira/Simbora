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
                            <img alt = "Voltar" className="-rotate-90" width={30} src="https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Farrow-up.svg?alt=media&token=f48bff06-130d-4cb7-9e74-19303d967759"/>
                        </div>
                        <div className="w-full mb-3 items-center justify-center flex flex-col">
                            <img alt = "Logo do lugar" className="rounded-full md:max-w-[8.805rem] max-w-[6.805rem] bg-[#eee]" src = {place.logo}/>
                        </div>                    
                        <h1 className="font-main  -mb-1 w-full text-center font-medium md:text-[1.875rem] text-[1.475rem] ">{place.nome}</h1>
                        <h3 className="font-text font-light md:text-[1rem] text-[0.9rem] ">{type}</h3>
                    </div>
                    <div className="modal-body relative  py-4 px-[1.375rem]">
                        <h5 className="font-main w-full text-left font-medium md:text-[1.15rem] text-[0.9rem]  ">Descri????o</h5>
                        <p className="font-text max-w-[20.625rem] md:text-[0.9rem] text-[0.75rem] sm:pr-2 sm:max-w-[32.625rem]">
                            {place.descricao}
                        </p>
                    </div>
                    <div className="modal-body flex flex-row flex-wrap justify-center relative py-2">
                        {/* <h5 className="font-main w-full mb-3 text-left font-medium ">Contato</h5> */}
                            <Link
                            href={`mailto:${place.email}`}>
                                <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] ml-2 md:ml-0 mr-3 md:p-2 p-[0.4rem] rounded-[4px]">
                                    <img alt = "Bot??o com Carta Icone" className="max-w-[3rem] w-full" src = "https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Femail.svg?alt=media&token=49eb3c36-6bf1-493d-a244-252d2020e31b"/>
                                </button>
                            </Link>
                            <Link
                            href={`${place.site}`}>
                                <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-3 md:p-2 p-[0.4rem] rounded-[4px]">
                                    <img alt = "Bot??o com Planeta Icone" className="max-w-[3rem] w-full"  src = "https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Fsite.svg?alt=media&token=d2fe618b-b8bd-4b34-8e9d-a1f168b8b149"/>
                                </button>
                            </Link>
                            <Link
                            href={`https://api.whatsapp.com/send?phone="${place.whats}`}>
                                <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-2 md:p-2 p-[0.4rem] rounded-[4px]">                                
                                    <img alt = "Bot??o com Whatsapp Logotipo" src = "https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Fwhatsapp.svg?alt=media&token=71af07d3-f6fa-4f1c-9da5-eec9becf4346"/>
                                </button>
                            </Link>
                            <Link
                            href={`${place.insta}`}>
                                <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-3 md:p-2 p-[0.4rem] rounded-[4px]">                                
                                    <img alt = "Bot??o com Instagram Logotipo" src = "https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Finstagram.svg?alt=media&token=3a46bfbe-6a18-4e68-a621-eba694140743"/>
                                </button>
                            </Link>
                            <Link
                            href={`${place.face}`}>
                                <button className="bg-brown transition-colors ease-linear duration-150 hover:bg-green md:mr-6 my-[0.5rem] mr-3 md:p-2 p-[0.4rem] rounded-[4px]">                                
                                    <img className="max-w-[4rem] w-full" alt = "Bot??o com Facebook Logotipo" src = "https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Ffacebook.svg?alt=media&token=3cdb2948-1ab2-4aaf-a209-b2aceb781a22"/>
                                </button>
                            </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}