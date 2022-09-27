import Image from "next/image";
import Link from "next/link";

export default function Footer(){


    return(

        <footer className="bg-green flex flex-1 self-end h-[11.25rem] p-4 max-w-full justify-center items-center text-font-footer ">
                <div className="flex flex-row justify-between max-w-[62.5rem] w-full">
                    <div className = "max-w-[6rem] transition-all duration-700 h-[6.4rem] cursor-pointer w-full relative ">
                            <Image 
                            src={'https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Ficone-simbora.png?alt=media&token=6631cdf7-6097-45a2-a05e-3a4103991a46'}
                            layout="fill"
                            alt="Icone do planetario em forma do localização"
                            objectFit="cover"
                            />
                    </div>
                    <div className="justify-end flex flex-col">
                        <h5 className="text-sm mb-4 text-right text-white">@Todos direitos reservado a UENP</h5>
                        <div className="flex justify-end">
                            <Link
                            scroll
                            href={"#navbar"}
                            >
                                {/* <button className="max-w-[1rem] transition-all duration-700 h-[1.4rem]"> */}
                                    <div className = "block max-w-[3.5rem] transition-all bg-light-brown justify-center align-middle  pt-4 pb-4 rounded duration-700  cursor-pointer w-full ">
                                        <Image  className="" layout="responsive" width={5} height={5} alt = "Botão para subir" src={'https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2Farrow-up.svg?alt=media&token=f48bff06-130d-4cb7-9e74-19303d967759'}/>
                                    </div>
                                {/* </button> */}
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </footer>

    )

}