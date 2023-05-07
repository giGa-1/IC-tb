'use client'
import React, { useLayoutEffect, useRef } from 'react'
import cl from './Footer.module.css'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Footer() {




   
  const sectionRef = useRef(null); 

  useLayoutEffect(()=>{
    const comp = sectionRef.current;


    gsap.fromTo(comp.querySelector(`.${cl.blockBack}`),{y:150, opacity:0}, {
      y: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp,
        markers:false,
        end: `top ${window.innerHeight/100*110}px`,
        start: `bottom ${window.innerHeight/100*110}px`,
        scrub: true
      }
    })  


  },[])


  return (
    <footer  ref={sectionRef} className={cl.footer}>
      <div className={cl.blockBack}></div>
        <div className={cl.back}></div>
        <p className={cl.text}>$OINK TOKEN 2023</p>
    </footer>
  )
}
