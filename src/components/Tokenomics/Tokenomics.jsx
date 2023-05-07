'use client'
import React, { useLayoutEffect, useRef } from 'react'

import cl from './Tokenomics.module.css'
import Image from 'next/image'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Tokenomics() {


  const sectionRef = useRef(null); 

  useLayoutEffect(()=>{
    const comp = sectionRef.current;


    gsap.fromTo(comp.querySelector(`.${cl.title}`),{x:-50, opacity:0}, {
      x: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp.querySelector(`.${cl.title}`),
        markers:false,
        end: `top ${window.innerHeight/100*80}px`,
        start: `bottom ${window.innerHeight/100*80}px`,
        scrub: true
      }
    })


    
  


    gsap.fromTo(comp.querySelector(`.${cl.imgL}`),{y:50, opacity:0}, {
      y: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp.querySelector(`.${cl.title}`),
        markers:false,
        end: `top ${window.innerHeight/100*70}px`,
        start: `bottom ${window.innerHeight/100*70}px`,
        scrub: true
      }
    })



    gsap.fromTo(comp.querySelector(`.${cl.imgR}`),{y:50, opacity:0}, {
      y: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp.querySelector(`.${cl.title}`),
        markers:false,
        end: `top ${window.innerHeight/100*70}px`,
        start: `bottom ${window.innerHeight/100*70}px`,
        scrub: true
      }
    })



    gsap.fromTo(comp.querySelector(`.${cl.textBlock}`),{y:150, opacity:0}, {
      y: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp.querySelector(`.${cl.title}`),
        markers:false,
        end: `top ${window.innerHeight/100*70}px`,
        start: `bottom ${window.innerHeight/100*70}px`,
        scrub: true
      }
    })


    
    gsap.fromTo(comp.querySelector(`.${cl.leftB}`),{x:-150, opacity:0}, {
      x: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp.querySelector(`.${cl.title}`),
        markers:false,
        end: `top ${window.innerHeight/100*70}px`,
        start: `bottom ${window.innerHeight/100*70}px`,
        scrub: true
      }
    })



    
    gsap.fromTo(comp.querySelector(`.${cl.rightB}`),{x:150, opacity:0}, {
      x: 0, opacity:1,  ease:true,
      smoothOrigin:true,
      scrollTrigger:  {
        trigger: comp.querySelector(`.${cl.title}`),
        markers:false,
        end: `top ${window.innerHeight/100*70}px`,
        start: `bottom ${window.innerHeight/100*70}px`,
        scrub: true
      }
    })




  },[])

  return (
    <section id='token' ref={sectionRef} className={cl.section}>
        <div className="container">
        <h2 className={['title', cl.title].join` `}>Tokenomics</h2>
            <div className={cl.content}>
                <div className={cl.blockL}></div>
                <div className={cl.blockR}></div>
                <div className={cl.textImgs}>
                  <Image src={'/img/moneyToken.png'}  width={432} height={432} className={cl.imgL} />
                  <Image src={'/img/svinToken.png'} width={500} height={420} className={cl.imgR} />
                  
                  <div className={cl.textBlock}>
                      <div className={cl.text}>
                        <strong>Introducing our Meme Coin with a total supply of 21 billion tokens:</strong>
                        <br/>
                        <br/>
                        <strong>Airdrop (1.5%): 315M tokens </strong>for promotion and engagement.
                        <strong>Circulating Supply (15%): 3.15B tokens</strong>for trading on DEX/CEX.
                        <strong> 3 Phase Burn (60%): 12.6B tokens </strong>  burned over time for scarcity.
                        <strong>Oink Vault (15%): 3.15B tokens</strong> for liquidity on CEX.
                        <strong>JiggyPool (8.5%): 1.785B tokens</strong> for staking rewards for JiggyPiggy NFT Collection
                        <br/>
                        <br/>
                        <br/>
                        <strong>
                          Join our community, trade, stake, and grow with us!
                        </strong>
                      </div>
                  </div>
                </div>
            </div>
            <div className={cl.conetntM}>
              <div className={cl.leftB}>
             <div className={cl.leftimg}></div>

                <div className={cl.textL}>
                        <strong>Airdrop (1.5%): 315M tokens </strong>for promotion and engagement.
                        <strong>Circulating Supply (15%): 3.15B tokens</strong>for trading on DEX/CEX.
                        <strong> 3 Phase Burn (60%): 12.6B tokens </strong>  burned over time for scarcity.
                        <strong>Oink Vault (15%): 3.15B tokens</strong> for liquidity on CEX.
                        <strong>JiggyPool (8.5%): 1.785B tokens</strong> for staking rewards for JiggyPiggy NFT Collection
                        <br/>
                        <br/>
                        <strong>
                          Join our community, trade, stake, and grow with us!
                        </strong>
                </div>
              </div>
              <div className={cl.rightB}>
                  <strong className={cl.textR}>
                    Introducing our Meme Coin with a total supply of 21 billion tokens
                  </strong>
              <div className={cl.rightimg}></div>

              </div>
             
            </div>
        </div>
    </section>
  )
}
