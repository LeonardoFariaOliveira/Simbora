import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import LocationModal from '../components/Modals/LocationModal'

const Maps = dynamic(() => import('../components/Maps'), {
  ssr: false,
})

interface LocationProps{

  data:Object

}

export const getServerSideProps: GetServerSideProps = async(context) => {

  const {query} = context

  const {latitude, longitude} = query

  const data = await fetch(`https://uenp.fun/turismo/api/restaurantespageprox/5/${latitude}/${longitude}`)

   const cityData = await fetch(`https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}?key=YrGU0HeVxr169qOuGf8oZdggx3gthQFS&entityType=PostalCodeArea&mapcodes=International`)
  const cityDataJson = await cityData.json()
  
    const admin = await fetch('http://cadetutatu.uenp.edu.br:3333/user/leonardo.faria@cyberswitch.dev')//getData(email!.toString())    
  const adminData = await admin.json()
  console.log(adminData);

const city = cityDataJson.addresses[0].address.municipality
  const jsonData = await data.json()
  const places = jsonData.restaurantes.data

  return {
    props:{
      city: city,
        places: places,
        latitude:latitude,
        longitude:longitude
    }
  }

}

const Location: NextPage = ({places, latitude, longitude, city}:any) => {

   
  const [Ncity, setNCity] = useState()
  const [filter, setFilter] = useState("restaurants")
  const [isInputHidden, setIsInputHidden] = useState<boolean>()
  const [isModalHidden, setIsModalHidden] = useState<boolean>()
  const [isPlaceeSelected, setIsPlaceeSelected] = useState<boolean>()
 
  
  return (
    <Layout>
        <Head>
        <title>Simbora!</title>
        <meta name="description" content="O mais novo guia de turismo que veio para trazer uma nova experiência para o turista brasileiro" />
        <link rel="icon" href="/icon-simbora.png" />
        </Head>
        <div className='w-full relative green-gradient animate-bg min-h-screen'>
          <div className={`w-full ${isModalHidden && "hidden"} flex justify-center`}>
            <LocationModal 
            key = {5}
            data ={places}
            type ={filter}
            setFilter ={setFilter}
            city = {city}
            setIsInputHidden = {setIsInputHidden}
            setIsPlaceeSelected = {setIsPlaceeSelected}
            init = {0}
            limit = {1}
            setPlacesLimit = {()=>{}}
            />
          </div>
          <div className={`absolute z-[99999] slide-on-modal w-full top-[3.4rem]  xs:top-[0rem] ${isInputHidden ? "hidden" : "flex"} p-2 items-center justify-center`}>
            <div className='flex flex-col px-0 max-w-[15.5rem] xs:max-w-[21rem] sm:max-w-[27rem] md:max-w-[34rem] w-full '>
              <h1 className='font-main text-[1rem] sm:text-[1.275rem] mb-2 mt-[5rem] font-medium text-black' >Qual cidade você deseja turistar?</h1>
              <div className='w-full h-[4rem]'>
                <input
                className='w-full p-3 h-[3.5rem] focus:outline-none rounded-[4px]'
                placeholder="Bandeirantes"
                onChange={(event:any) => setNCity(event.target.value)}
                /> 
               <Link href={{
                  pathname: `/cities/${city}`,
                }}>
                  <button className='bg-white box-border text-center align-middle -ml-12 mr-4 -mt-[0.8rem] h-[3.0rem] rounded-[4px]'>
                    <img className='mt-3' src = "../../../search.svg"/>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`hidden xs:flex xs:flex-col absolute z-[9999]  px-4 w-full top-[36.8rem] xs:top-[1rem] md:top-[37.5rem] ${isPlaceeSelected ? "sm:top-[36rem]" : "sm:top-[29rem]"} items-center justify-center`}>
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
                Ver {isModalHidden ? "restaurantes" : "mapa"}
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

export default Location
