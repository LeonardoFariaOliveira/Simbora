import type {GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import DataModal from '../../../components/Modals/DataModal'
import Slider from '../../../components/Slider/indext'
import styles from '../styles/Home.module.css'


const Maps = dynamic(() => import('../../../components/Maps'), {
  ssr: false,
})


export const getStaticProps: GetStaticProps = async(context) => {

  const {params} = context
  
  let city=null,cityData=null, cityDataJson=null, latitude=null, longitude=null

  if(params?.city !== undefined){

    city = params.city
    cityData = await fetch(`https://api.tomtom.com/search/2/geocode/${city}.json?key=YrGU0HeVxr169qOuGf8oZdggx3gthQFS`)
    cityDataJson = await cityData.json()
    latitude = cityDataJson.results[0].position.lat
    longitude = cityDataJson.results[0].position.lon
    
  }

  
  const data = await fetch(`https://uenp.fun/turismo/api/atracoes/`)

  const jsonData = await data.json()
  const places = jsonData.atracoes

  return {
      props:{
         city: "Bandeirantes",
         latitude:latitude,
         longitude:longitude,
         places:places
      }
}

}

export const getStaticPaths = async () => {

  return {
    paths: [
    {
      params: { 
        city: "Bandeirantes",
        params: "events"
      }
    },
  ],
    fallback: false, // can also be true or 'blocking'
  }
}

const Events: NextPage = ({city, latitude, longitude, places}:any) => {

  useEffect(()=>{

    localStorage.setItem("city", city)

  },[])

  const [Ncity, setNCity] = useState()
  const [filter, setFilter] = useState("events")
  const [isInputHidden, setIsInputHidden] = useState<boolean>()
  const [isModalHidden, setIsModalHidden] = useState<boolean>()
  const [isPlaceeSelected, setIsPlaceeSelected] = useState<boolean>()
  const [init, setInit] = useState<number>(0)
  const [limit, setLimit] = useState<number>(5)


  const setPlacesLimit = (n1:number, n2:number)=> {

    setInit(n1)
    setLimit(n2)

  }

  const realPlaces = places
  return (
    <Layout>
        <Head>
          <title>Simbora!</title>
          <meta name="description" content="Visitar bandeirantes" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property='og:title' content='Simbora' />
          <meta
            property='og:description'
            content='Visitar bandeirantes'
          />
          <link rel="icon" href="/icon-simbora.png" />
        </Head>
        <div className='w-full relative green-gradient animate-bg min-h-screen'>
          <div className={`w-full ${isModalHidden && "hidden"} flex justify-center`}>
            <DataModal 
            key = {5}
            data ={realPlaces}
            type ={filter}
            setFilter ={setFilter}
            setIsInputHidden = {setIsInputHidden}
            setIsPlaceeSelected = {setIsPlaceeSelected}
            init = {init}
            limit = {limit}
            />

          </div>
          <div className={`absolute z-[99999] slide-on-modal w-full top-[3.4rem]  xs:top-[0rem] ${isInputHidden ? "hidden" : "flex"} p-2 items-center justify-center`}>
            <div className='flex flex-col px-0 max-w-[15.5rem] xs:max-w-[21rem] sm:max-w-[27rem] md:max-w-[34rem] w-full '>
              <h1 className='font-main text-[1rem] sm:text-[1.275rem] mb-2 mt-[5rem] font-medium text-black' >Qual cidade você deseja turistar?</h1>
              <div className='w-full h-[4rem]'>
                <input
                className='w-full p-3 h-[3.5rem] focus:outline-none rounded-[4px]'
                placeholder={city}
                onChange={(event:any) => setNCity(event.target.value)}
                />
                <Link href={{
                  pathname: `/cities/${city}/events`,
                }}>
                  <button className='bg-white box-border text-center align-middle -ml-12 mr-4 -mt-[0.8rem] h-[3.0rem] rounded-[4px]'>
                    <img className='mt-3' src = "../../../search.svg"/>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`hidden xs:flex xs:flex-col absolute ${isModalHidden ? "z-[999]" : "z-[99999]"}  px-4 w-full top-[36.8rem] xs:top-[1rem] ${isPlaceeSelected ? "md:top-[37.9rem]" : "md:top-[40rem]"} ${isPlaceeSelected ? "sm:top-[35rem]" : "sm:top-[29rem]"} items-center justify-center`}>
            <div className='  justify-end flex px-0 max-w-[15.5rem]  xs:max-w-[21rem] sm:max-w-[27rem] md:max-w-[34rem] w-full '>
              <button 
              onClick = {()=> {
              setIsModalHidden(!isModalHidden)
              if(isPlaceeSelected)
                setIsInputHidden(true)
              else
                setIsInputHidden(!isInputHidden)
              }} 
              className=' py-3 px-8 rounded-[4px] transition-colors ease-linear duration-150 text-white font-main bg-brown'>
                Ver {isModalHidden ? "atrações" : "mapa"}
              </button>
            </div>
          </div>
          {isModalHidden &&
              (
                <Maps 
                key = {6}
                latitude={latitude}  
                longitude={longitude} 
                icon_1="../../../person.svg" 
                icon_2="../../../no_person.svg"
                placesIcon= {`../../../${filter}Icon.svg`}
                places ={places}
                setIsPlaceeSelected = {isPlaceeSelected}
                />
              )

          }
        </div>
        
    </Layout>
  )
}

export default Events
