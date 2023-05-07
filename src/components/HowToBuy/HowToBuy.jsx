'use client'
import React, { useLayoutEffect, useRef } from 'react'
import cl from './HowToBuy.module.css'
import Image from 'next/image'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HowToBuy() {

    const stateTexts = [
        {id:1,color:'FBF5E2',  title: 'Create a Wallet', text: "Download Phantom, Solflare, or another wallet of your choice from the app store or their official website. Make sure to confirm it's the real one to avoid scams!"},
        {id:2,color:'FBEEC4' ,title: 'Get Some SOL', text: "Now you need some Solana! You can buy Solana in most wallets or purchase it on another exchange and send it to your new wallet before getting $OINK"},
        {id:3,color:'FBE7A6' ,title: 'Go to Raydium', text: "Connect to Raydium. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign."},
        {id:4,color:'FBE288', title: 'Switch SOL for $IONK', text: "Switch ETH for $OINK. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."},
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
