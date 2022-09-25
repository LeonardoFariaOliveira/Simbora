import Link from "next/link";
import { ReactEventHandler, useState } from "react";
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
                                    <Link href={`../../cities/${city === undefined ? "Bandeirantes" : city}/restaurants`}>
                                        <a>
                                            <DataFilters
                                            key = {1}
                                            type = "restaurants"
                                            title="Restaurantes"
                                            iconUrl="../../../restaurantsIcon.svg"
                                            active={type == "restaurants" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                    <Link href={`../../cities/${city === undefined ? "Bandeirantes" : city}/pubs`}>
                                        <a>
                                            <DataFilters
                                            key = {2}
                                            type = "pubs"
                                            title="Bares"
                                            iconUrl="../../../pubsIcon.svg"
                                            active={type == "pubs" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                    <Link href={`../../cities/${city === undefined ? "Bandeirantes" : city}/hotels`}>
                                        <a>
                                            <DataFilters
                                            key = {3}
                                            type = "hotels"
                                            title="Hotéis"
                                            iconUrl="../../../hotelsIcon.svg"
                                            active={type == "hotels" ? true : false}
                                            />
                                        </a>
                                    </Link>
                                    <Link href={`../../cities/${city === undefined ? "Bandeirantes" : city}/events`}>
                                        <a>
                                            <DataFilters
                                            key = {4}
                                            type = "events"
                                            title="Atrações"
                                            iconUrl="../../../eventsIcon.svg"
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