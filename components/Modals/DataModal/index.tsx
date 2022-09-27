import Link from "next/link";
import { ReactEventHandler, useEffect, useState } from "react";
import Loading from "../../Loading";
import DataFilters from "./DataFilters";
import DataPlace from "./DataPlace";
import DataPlaces from "./DataPlaces";


export default function DataModal({data, type, city, setIsInputHidden, setIsPlaceeSelected, setPlacesLimit, init, limit}:any){

    const [isPlaceSelected, setIsPlaceSelected] = useState<boolean>(false)
    const [placeId, setPlaceId] = useState<number | null>(null)
    const [placeData, setPlaceData] = useState({})
    const [isLoading, setIsLoading] = useState<boolean>()
    const [a, setA] = useState()
    const [cacheCity, setCacheCity] = useState<string |null>()
    

    useEffect(()=>{

        setCacheCity(localStorage.getItem("city"))

    })

    const setPlaces = () => {

        setIsPlaceSelected(false)
        setIsInputHidden(false)
        setIsPlaceeSelected(false)
        setPlaceData({})

    }

    const handleSelect = async(event:any, id:number) =>{


        event.preventDefault()
        setIsLoading(true)
        const tipo = type === "restaurants" ? "restaurantes" : type === "pubs" ? "bares" : type === "hotels" ? "hoteis" : "atracoes"
        const place = await fetch(`https://uenp.fun/turismo/api/${tipo}/${id}`)
        const aux = await place.json()
        if(tipo === "restaurantes")
        setPlaceData(aux.restaurantes[0])
        else if(tipo === "bares")
        setPlaceData(aux.bares[0])
        else if(tipo === "hoteis")
        setPlaceData(aux.hoteis[0])
        else if(tipo === "atracoes")
        setPlaceData(aux.atracoes[0])
        setIsLoading(false)
        setIsInputHidden(true)
        setIsPlaceSelected(true)
        setIsPlaceeSelected(true)
    
    }

    return(
        <>
            
            {isLoading &&
            (
                <Loading
                key = {88}
                />
            )}
            {isPlaceSelected ? 
                (
                <DataPlace
                key = {85}
                place={placeData}
                setPlaces = {setPlaces}
                setIsLoading = {setIsLoading}
                type = {type === "restaurants" ? "Restaurante" : type === "pubs" ? "Bares" : type === "hotels" ? "Hoteis" : "Atrações"}
                />
                )
                :
                (
                    <div className="modal absolute slide-on-modal fade  z-[9999] p-2 top-[15rem] xs:top-[11rem] md:top-[11.5rem] max-w-[16.5rem] xs:max-w-[22rem] sm:max-w-[28rem] md:max-w-[35rem]  w-full outline-none overflow-x-hidden overflow-y-auto"
                        id="exampleModalFullscreen"  aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
                            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div className="modal-header flex flex-shrink-0 items-center justify-between py-4 px-[1.375rem] mb-4 flex-wrap rounded-t-md">
                                    <Link href={`../../cities/${city === undefined ? cacheCity : city}/restaurants`}>
                                        <a>
                                            <DataFilters
                                            key = {1}
                                            type = "restaurants"
                                            title="Restaurantes"
                                            iconUrl="https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2FrestaurantsIcon.svg?alt=media&token=9f3f0d44-c101-47d2-97c3-21afaf1312c1"
                                            active={type == "restaurants" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                    <Link href={`../../cities/${city === undefined ? cacheCity : city}/pubs`}>
                                        <a>
                                            <DataFilters
                                            key = {2}
                                            type = "pubs"
                                            title="Bares"
                                            iconUrl="https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2FpubsIcon.svg?alt=media&token=576b5e4f-cd62-4039-be4d-8539c0574722"
                                            active={type == "pubs" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                    <Link href={`../../cities/${city === undefined ? cacheCity : city}/hotels`}>
                                        <a>
                                            <DataFilters
                                            key = {3}
                                            type = "hotels"
                                            title="Hotéis"
                                            iconUrl="https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2FhotelsIcon.svg?alt=media&token=c01886e8-6685-4c05-ad33-760084030e0f"
                                            active={type == "hotels" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                    <Link href={`../../cities/${city === undefined ? cacheCity : city}/events`}>
                                        <a>
                                            <DataFilters
                                            key = {4}
                                            type = "events"
                                            title="Atrações"
                                            iconUrl="https://firebasestorage.googleapis.com/v0/b/cadetutatu-d1a75.appspot.com/o/public%2FeventsIcon.svg?alt=media&token=ef4ed457-d39f-4f95-bdbd-d9defe967487"
                                            active={type == "events" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="modal-body overflow-y-scroll max-h-[19rem] flex flex-col   pt-4 pb-4 px-[1.375rem]">
                                    {data?.map((item:any) => (
                                        <div 
                                        className="cursor-pointer py-5"
                                        onClick = {(event)=> handleSelect(event, item.id)}
                                        >
                                            <DataPlaces
                                            key = {item.id+10}
                                            title = {item.nome}
                                            imgUrl = {item.logo}
                                            type = {type === "restaurants" ? "Restaurante" : type === "pubs" ? "Bar" : type === "hotels" ? "Hotel" : "Atração"}
                                            />
                                        </div>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
            
        </>
    )

}