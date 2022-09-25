import { useState } from "react";
import Image from 'next/image'
import CardSlide from "./Card-Slide";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider(){

    return(
        <>
          
				<Swiper
				tag="div"
				className="border w-full"
				centeredSlides={true}
				initialSlide={1}
				spaceBetween= {50}
				slidesPerView= {3.5}
				modules={[Navigation]}
				breakpoints={
					{
						280:{
							spaceBetween: 10,
							slidesPerView: 1.3
						},
						640:{
							spaceBetween: 10,
							slidesPerView: 2.5
						},
						1024:{
							spaceBetween: 50,
							slidesPerView: 3.5
						}
					}
				}
				pagination={
					{
						clickable: true
					}
				}
				>
				
					<SwiperSlide>
						<div className=" w-full border sm:max-w-[40rem]  ">
							<img className="rounded-[4px]  w-full "   src = "./Group 23.svg"/>
							<div className="z-[99] justify-center w-full -mt-[6rem] flex flex-col align-middle items-center">
								<div className=" flex flex-col w-full text-left">
									<h1 className=" font-main font-medium text-black ">Santuário São Miguel Arcanjo</h1>
									<h3 className=" font-text font-regular text-black ">Bandeirantes(PR)</h3>
								</div>
								<button className="text-white w-full font-medium bg-green rounded-[4px] ">Saiba mais</button>
							</div>
						</div> 
					</SwiperSlide>
						
				</Swiper>
        
        </>
    )


}