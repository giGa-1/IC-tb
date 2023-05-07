'use client'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'

import cl from './About.module.css'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function About() {
    const sectionRef = useRef(null); 

    useLayoutEffect(()=>{
        const comp = sectionRef.current
        const options = (el, rev=false)=>({
            ease:true,
            smoothOrigin:true,
            scrollTrigger:  {
              trigger: el,
              markers:false,
              end: `top 100px`,
              start: `bottom 100px`,
              scrub: true
            }
          })


        // gsap.context(()=>{
        //     gsap.to(comp.querySelector(`.${cl.cont}`), {
        //         y: -65,backgroundColor: '#1E1E1E', ...options(comp.querySelector(`.${cl.cont}`))
        //     })
        // }, comp)
    },[])

  return (
    <section id='about' ref={sectionRef} className={cl.section}>
        <div className="container">
            <h2 className={['title', cl.title].join` `}>About OINK</h2>

            <div className={cl.listBlocks}>
                <div className={cl.blockLeft}>
                    <p className={cl.descr}>
                    Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.<br/><br/><br/>
                    Pepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way.
                    </p>
                </div>
                <div className={cl.rightBlock}>
                    <Image src={'/img/about.png'} className={cl.rigthD} width={560} height={383}/>
                    <div className={cl.rightImg}>

                    </div>
                </div>
            </div>
        
        </div>
    </section>
  )
}
