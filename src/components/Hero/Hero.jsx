'use client'
import React, { useRef } from 'react'
import cl from './Hero.module.css'
import Image from 'next/image'
export default function Hero() {
  const cont= useRef(null);
  return (
    <section className={cl.section}>

        <div ref={cont} className={["container", cl.cont].join` `}>
          <Image src={'/img/airdrop.png'} className={cl.airdrop} width={520} height={430}/>

            <div className={cl.scene}>
                <Image src={'/img/hero-desk.png'} className={cl.scene} width={cont.current ? cont.current.innerWidth : 1550} height={551}/>
            </div>
        </div>
    </section>
  )
}