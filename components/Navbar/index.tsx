import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SimboraLogo from './logo-simbora.svg'
import NavbarItem from "./Navbar-Item";
// import NavbarItem from "./Navbar-Item";




export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return(
        <>
        <nav className={`flex flex-1 shadow-lg z-[9999] flex-row text-white relative justify-center sm:bg-[#eee] bg-light-brown pt-[2rem] pb-[2rem] pr-[1.875rem] h-[6.563rem] pl-[1.875rem] w-full`}>
            <div className="flex flex-1 justify-between flex-row max-w-[90.5rem]">
                <div className = "max-w-[11.729rem]  w-full p-[1rem] h-[3rem] relative">
                    <Image
                    className="absolute z-[58]"
                    src={'/logo-simbora.png'}
                    layout="fill"
                    alt="Logo do Simbora!"
                    loading="lazy"
                    placeholder="blur"
                    objectFit="cover"
                    blurDataURL="/logo-simbora.svg"
                    />
                </div> 
                <div className="mt-2">
                    <div className = "max-w-[2.188rem] sm:hidden h-[2.438rem]  cursor-pointer w-full p-[1rem] relative ">
                        {!isMenuOpen &&
                            (
                                <Image
                                className="relative"
                                onClick = {()=> setIsMenuOpen(true)}
                                src={'/menu-left.svg'}
                                layout="fill"
                                alt="Menu Bars"
                                objectFit="cover"
                                />
                            )
                        }
                    </div> 
                    <div className="hidden font-medium cursor-pointer  sm:flex md:flex-rol md:text-[1rem] lg:text-[1.2rem]">
                        <Link
                        href={"./"}
                        >
                            <a className="text-black items-menu-transition hover:text-green transition-colors duration-200  font-text max-w-[17rem] ml-[1.875rem] mb-[1.563rem]">
                                Início
                            </a>
                        </Link>
                        <Link
                        href={"../../project"}
                        >
                            <a className="text-black items-menu-transition hover:text-green transition-colors duration-200  font-text max-w-[17rem] ml-[1.875rem] mb-[1.563rem]">
                                Projeto
                            </a>
                        </Link>
                        <Link
                        href={"../../add-your-city"}
                        >
                            <a className="text-black  items-menu-transition hover:text-green transition-colors duration-200 font-text max-w-[22rem] ml-[1.875rem] mb-[1.563rem]">
                                Adicione sua cidade ao mapa!
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
 
        </nav>
        {isMenuOpen && 
        (
            <div className="bg-light-brown  flex flex-col pb-4 justify-between w-full min-h-screen absolute z-[999999] menu-transition ">
                <div className=" flex justify-end pr-[1.875rem] pt-[2.5rem]">
                    <div className = "max-w-[2.188rem] transition-all duration-700 h-[2.438rem] cursor-pointer w-full relative ">
                        <Image 
                        onClick = {()=> setIsMenuOpen(false)}
                        src={'/cancel.svg'}
                        layout="fill"
                        alt="Cancel button"
                        objectFit="cover"
                        />
                    </div>
                </div>    
                <div className="mt-8 flex justify-start items-menu-transition">
                    <div className="flex flex-col ">
                        <NavbarItem
                        title="Início"
                        target="/"
                        />
                        <NavbarItem
                        title="Conheça nosso projeto"
                        target="/series"
                        />
                        <NavbarItem
                        title="Adicione sua cidade ao mapa!"
                        target="/movies"
                        />
                    </div>
                </div>
                <div className=" flex items-menu-transition">
                    <div className="flex flex-col pl-[1.875rem] pr-[1.875rem] items-center w-full justify-around h-28">
                        <button className=" text-center items-center pr-4 max-w-[20.875rem] w-full h-[3rem] pl-4 pt-2 pb-2 rounded-[4px] bg-brown text-white text-text font-medium ">
                            Entrar
                        </button>
                        <button className=" text-center items-center pr-4 max-w-[20.875rem] w-full h-[3rem] pl-4 pt-2 pb-2 rounded-[4px] bg-green text-white text-text font-medium ">
                            Cadastrar
                        </button>
                    </div>
                </div>

            </div>
        )
        }
        
        </>
        

    )


}