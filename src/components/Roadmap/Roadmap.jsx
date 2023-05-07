'use client'
import React, { useLayoutEffect, useRef } from 'react'

import cl from './Roadmap.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';


import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {

    const stateCards = [
        {id:1, name: 'Phase ONE', content: 'To Be announced...', color: 'FBF4DD',class: cl.topCard},
        {id:2, name: 'Phase TWO', content: 'To Be announced...',color: 'FBEEBF',class: cl.midCard},
        {id:3, name: 'Phase THREE', content: 'To Be announced...',color: 'FBE288',class: cl.bottomCard},

    ]



    const sectionRef = useRef(null); 

    useLayoutEffect(()=>{
      const comp = sectionRef.current;
  
  
      gsap.fromTo(comp.querySelector(`.${cl.title}`),{x:-50, opacity:0}, {
        x: 0, opacity:1,  ease:true,
        smoothOrigin:true,
        scrollTrigger:  {
          trigger: comp.querySelector(`.${cl.title}`),
          markers:false,
          end: `top ${window.innerHeight/100*85}px`,
          start: `bottom ${window.innerHeight/100*85}px`,
          scrub: true
        }
      })


      gsap.fromTo(comp.querySelector(`.${cl.airdrop}`),{y:50, opacity:0}, {
        y: 0, opacity:1,  ease:true,
        smoothOrigin:true,
        scrollTrigger:  {
          trigger: comp.querySelector(`.${cl.airdrop}`),
          markers:false,
          end: `top ${window.innerHeight/100*90}px`,
          start: `bottom ${window.innerHeight/100*90}px`,
          scrub: true
        }
      })
      const a = [...comp.querySelectorAll(`.${cl.card}`)].map(card=>{
        gsap.fromTo(card,{y:50, opacity:0}, {
            y: 0, opacity:1,  ease:true,
            smoothOrigin:true,
            scrollTrigger:  {
              trigger: card,
              markers:false,
              end: `top ${window.innerHeight/100*160}px`,
              start: `bottom ${window.innerHeight/100*160}px`,
              scrub: true
            }
          })
      })

  

  
    },[])

  return (
    <sectiob id={'roadmap'} ref={sectionRef} className={cl.section}>
        <div className={['container', cl.cont].join` `}>
            <h2 className={['title', cl.title].join` `}>Roadmap</h2>

            <div className={cl.content}>
                <div className={cl.back}></div>
                <Image src={'/img/airdrop-mini.png'} height={368}  width={368} className={cl.airdrop}/>
                <ul className={cl.cards}>
                    {stateCards.map(card => {
                        return (
                            <React.Fragment key={card.id}>
                                <li className={cl.card}>
                                    <div className={[cl.itemContent, card.class].join` `}>
                                        <div className={cl.top}>
                                            <div className={cl.cardTitle}>{card.name}</div>
                                        </div>
                                        <div className={cl.bottom} style={{background: `#${card.color}`}}>
                                            <div className={cl.cardDescr}>{card.content}</div>
                                        </div>
                                    </div>
                                  
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
               
            </div>
        </div>
        <div className={cl.swiper}>
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            className={cl.swiperC}
        >
            {stateCards.map(card => {
                        return (
                            <SwiperSlide key={card.id} className={cl.swiperSlide}>
                                <li className={cl.card}>
                                    <div className={[cl.itemContent, ].join` `}>
                                        <div className={cl.top}>
                                            <div className={cl.cardTitle}>{card.name}</div>
                                        </div>
                                        <div className={cl.bottom} style={{background: `#${card.color}`}}>
                                            <div className={cl.cardDescr}>{card.content}</div>
                                        </div>
                                    </div>
                                  
                                </li>
                            </SwiperSlide>
                        )
                    })}
                     <SwiperSlide key={5} className={cl.swiperSlide}>
                               
                            </SwiperSlide>
                            <SwiperSlide key={6} className={cl.swiperSlide}>
                               
                               </SwiperSlide>
        </Swiper>

        </div>
    </sectiob>
  )
}
