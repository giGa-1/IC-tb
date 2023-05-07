'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import cl from './Hero.module.css'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const cont= useRef(null);


  const sectionRef = useRef(null); 

  // useLayoutEffect(()=>{
  //     const comp = sectionRef.current
  //     const options = (el, rev=false, end, start)=>({
  //         ease:true,
  //         smoothOrigin:true,
  //         scrollTrigger:  {
  //           trigger: el,
  //           markers:true,
  //           end: `top ${end}`,
  //           start: `bottom ${start}`,
  //           scrub: true
  //         }
  //       })


  //     gsap.context(()=>{
  //         gsap.fromTo(comp.querySelector(`.${cl.airdrop}`),
  //         {
  //             y: -145,
  //         }
  //         , {
  //             y: 0, 
  //         })
  //     }, comp)
  // },[])

  useEffect(()=>{
      const air = sectionRef.current.querySelector(`.${cl.airdrop}`);
      const airdropM = sectionRef.current.querySelector(`.${cl.airdropM}`)
      const sceneB = sectionRef.current.querySelector(`.${cl.sceneB}`);
      air.classList.add(cl.activeAir);airdropM.classList.add(cl.activeAirM);
      sceneB.classList.add(cl.activeScene)
  },[])



  return (
    <section id='home' ref={sectionRef} className={cl.section}>

        <div ref={cont} className={["container", cl.cont].join` `}>
          <Image src={'/img/airdrop.png'} className={cl.airdrop} width={520} height={430}/>
          <Image src={'/img/airdrop-mb.png'} className={cl.airdropM} width={180} height={130}/>

            <div className={cl.scene}>
              {/* <Image src={'/img/hero-mb.png'} className={cl.sceneM} width={cont.current !== null ? cont.current.innerWidth : 438} height={260}/> */}
                <div className={cl.sceneM}>


                </div>

                <Image src={'/img/hero-desk.png'} className={cl.sceneB} width={cont.current !== null ? cont.current.innerWidth : 1550} height={551}/>
            </div>
        </div>
    </section>
  )
}   