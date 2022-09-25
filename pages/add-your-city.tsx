import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const AddYourCity: NextPage = () => {
 
  return (
        <Layout>
            <Head>
                <title>Simbora!</title>
                <meta name="description" content="O mais novo guia de turismo que veio para trazer uma nova experiência para o turista brasileiro" />
                <link rel="icon" href="/icon-simbora.png" />
            </Head>
            <div className='w-full green-gradient p-2 animate-bg min-h-screen flex flex-col justify-center items-center align-middle'>
                <h1 className='sm:text-[2.5rem] text-[2.2rem]  sm:text-center text-left font-main text-black'>Ainda estamos desenvolvendo essa página...</h1>
            </div>
        </Layout>
    )
}

export default AddYourCity
