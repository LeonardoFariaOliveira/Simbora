import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider/indext'
import HasUserBeenFoundModal from '../components/Modals/HasUserBeenFoundModal'

const Home: NextPage = () => {

  const [latitude, setLatitude] = useState<number|null>(null)
  const [longitude, setLongitude] = useState<number|null>(null)
  const [hasUserBeenFound, setHasUserBeenFound] = useState<boolean>(false)
  const [city, setCity] = useState<string>()

  // useEffect(()=>{

  //   navigator.geolocation.getCurrentPosition((pos:any)=>{
  //     setLatitude(pos.coords.latitude)
  //     setLongitude(pos.coords.longitude)
  //     setHasUserBeenFound(true)

  //   })

    

  // }, [])

  
 
  return (

    <Layout>
      <Head>
        <title>Simbora!</title>
        <meta name="description" content="O mais novo guia de turismo que veio para trazer uma nova experiência para o turista brasileiro" />
        <link rel="icon" href="/icon-simbora.png" />
      </Head>
      {/* `https://api.tomtom.com/search/2/reverseGeocode/${latitudeFrom},${longitudeFrom}?key=YrGU0HeVxr169qOuGf8oZdggx3gthQFS&entityType=PostalCodeArea&mapcodes=International` */}

      {/* {hasUserBeenFound && (
        <HasUserBeenFoundModal
        setHasUserBeenFound={setHasUserBeenFound}
          latitude={latitude!}
          longitude={longitude!}
        />
      )} */}

      <div className=' bg-main bg-cover z-[-1]relative flex w-full min-h-[84vh] justify-center  align-middle'>
          <div className='flex flex-col z-50 p-8 max-w-[62.5rem] w-full '>
            <h1 className='font-main text-[1rem] sm:text-[1.275rem] mb-2 mt-[5rem] font-medium text-white' >Qual cidade você deseja turistar?</h1>
            <div className='w-full h-[4rem]'>
              <input
              className='max-w-[23.25rem] w-full p-3 h-[3.5rem] focus:outline-none rounded-[4px]'
              placeholder='Bandeirantes'
              onChange={(event:any) => setCity(event.target.value)}
              />
              <Link href={{
                pathname: `/cities/${city}/restaurants`,
              }}>
                <button className='bg-white box-border text-center align-middle -ml-12 mr-4 -mt-[0.8rem] h-[3.0rem] rounded-[4px]'>
                  <img alt = "Lupa para indicar que é um botão de pesquisa" className='mt-3' src = "./search.svg"/>
                </button>
              </Link>
            </div>
        </div>

      </div>
      <div className='bg-light-white z-10 relative justify-center align-middle flex w-full min-h-[84vh]'>
        <div className='flex flex-col mt-[5rem] pl-4 max-w-[62.5rem] w-full '>
          <h1 className='font-main font-medium text-black max-w-[18rem] md:text-[2.3rem] sm:max-w-[28rem] md:max-w-[38rem] text-left text-[1.45rem] sm:text-[1.75rem]'>Conheça paraísos culturais por todo o nosso Brasilzão!</h1>
          <div  className='flex  w-full relative -right-16 sm:-right-[20rem] md:-right-[8rem] z-0 max-w-[32rem] md:max-w-[75rem] md:h-[31.25rem] md:-mt-8 md:items-center mt-5 mb-8 md:mb-16  justify-end'>
            <Image
            quality={100}
            src={"/Blob-1.png"}
            alt="arara-azul"
            loading="lazy"
            placeholder="blur"
            width={600}
            height={550}
            layout="intrinsic" 
            blurDataURL="/Blob-1.png"
            />
          </div>
          <h5 className='font-text font-medium text-black text-left max-w-[20rem] text-[1rem] sm:text-[1.45rem] md:text-[1.6rem] sm:max-w-[32rem] md:max-w-[48rem]'>
            Nosso <strong>país tropical</strong> possui um grande acervo cultural, possuindo culturas de vários povos, além de possuir uma das maravilhas do mundo moderno, o <strong>Cristo Redentor</strong>
          </h5>
        </div>
      </div>
      <div className='bg-light-white justify-center align-middle flex w-full min-h-[84vh]'>
        <div className='w-full max-w-[62.5rem] flex flex-col mt-[10rem]'>
          <h1 className='font-main ml-4 font-medium text-black max-w-[18rem] md:text-[2.3rem] sm:max-w-[28rem] md:max-w-[35rem] text-left text-[1.45rem] sm:text-[1.75rem]'>Não tenho nenhum lugar para ir, a não ser todos os lugares</h1>
          <img alt = "Figura de pessoas" className='h-[20rem] sm:h-[35rem] md:h-[38rem] justify-center ' src='./Traveler.svg'/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
