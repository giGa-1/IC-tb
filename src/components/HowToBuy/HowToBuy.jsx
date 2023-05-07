'use client'
import React, { useLayoutEffect, useRef } from 'react'
import cl from './HowToBuy.module.css'
import Image from 'next/image'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HowToBuy() {

    const stateTexts = [
        {id:1,color:'FBF5E2',  title: 'Create a Wallet', text: "Download phantom, solflare, or any other wallet of your choice."},
        {id:2,color:'FBEEC4' ,title: 'Get Some SOL', text: "Now you need some Solana! You can buy Solana in most wallets or purchase it on another exchange and send it to your new wallet before getting $OINK"},
        {id:3,color:'FBE7A6' ,title: 'Go to Raydium', text: "Go to raydium, connect the wallet of your choice. paste the $OINK contract address."},
        {id:4,color:'FBE288', title: 'Switch SOL for $OINK', text: "Click swap, to buy $OINK with your SOL. If market conditions are volatile, don't forget to use slippage. Congrats, you are now $OINK Millionaire!"},
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

      const a = [...comp.querySelectorAll(`.${cl.item}`)].map(item => {

        gsap.fromTo(item,{x:-100, opacity:0}, {
            x: 0, opacity:1,  ease:true,
            smoothOrigin:true,
            scrollTrigger:  {
              trigger: item,
              markers:false,
              end: `top ${window.innerHeight/100*100}px`,
              start: `bottom ${window.innerHeight/100*100}px`,
              scrub: true
            }
          })
      })



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


    

  
    },[])



  return (
    <section id='how' ref={sectionRef} className={cl.section}>
        <div className="container">
            <h2 className={['title', cl.title].join` `}>How to buy</h2>

            <div className={cl.content}>
                <Image src={'/img/how-to-svin.jpg'} height={708} width={600} className={cl.svin}/>
                <ul className={cl.list}>
                    {stateTexts.map(item => {
                        return (
                            <React.Fragment key={item.id}>
                                <li className={cl.item} style={{background: `#${item.color}`}}>
                                    <h3 className={cl.itemTitle}>
                                        {item.title}
                                    </h3>
                                    <p className={cl.descr}>
                                        {item.text}
                                    </p>
                                </li>
                            </React.Fragment>
                        )
                    })}
                    <li className={cl.itemM}>
                        <div className={cl.itemImg}></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
