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
                    Say hello to $OINK - the super fun meme coin that's taking the Crypto and NFT world by storm! Join our Piggy-inspired squad and get ready for a crazy adventure with this limited supply token. With tons of silly memes and cool tech, $OINK is perfect for anyone who loves to have fun. So come hang out with us and be a part of the $OINK family - it's time to get wild and have some laughs!
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
