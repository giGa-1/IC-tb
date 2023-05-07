'use client'
import React, { useLayoutEffect, useRef } from 'react'

import cl from './Tokenomics.module.css'
import Image from 'next/image'
import { CopyToClipboard } from "react-copy-to-clipboard"; 
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

  const handleCopyTexst = (e, text) => {
  }

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
                           <strong>Max Supply </strong>             
                       21,000,000,000.00 
                       <strong> Burned Amount </strong>             

                       12,600,000,000.00 
                      <br/>
                      <strong>Total Supply </strong>             

                       8,400,000,000.00 
                      <strong> Circulating Supply </strong>             

                       4,650,000,000.00 
                       <strong> Oink Vault 1 </strong>             

                          1,000,000,000.00 
                          
                          <CopyToClipboard
                            text={`2FnB4SZyvHNenAPn6zCxDUkVA6HKxLp6vr4pog8aX4QV`}
                          
                          >
                            <strong className={cl.copy} onClick={e=>handleCopyTexst(e,`2FnB4SZyvHNenAPn6zCxDUkVA6HKxLp6vr4pog8aX4QV`)}> {`2FnB4SZyvHNenAPn6zCxDUkVA6HKxLp6vr4pog8aX4QV`.slice(0, 15)}...</strong>
                           </CopyToClipboard>
                          <br/>
                      
                       <strong> Oink Vault 2 </strong>             

                         600,000,000.00 
                         <CopyToClipboard
                            text={`38h6MwEpJEfj8uMhpxrZjAuexZWPF6BWgkb8t8VooAXC`}
                          
                          >
                         <strong className={cl.copy} onClick={e=>handleCopyTexst(e,`38h6MwEpJEfj8uMhpxrZjAuexZWPF6BWgkb8t8VooAXC`)}> {`38h6MwEpJEfj8uMhpxrZjAuexZWPF6BWgkb8t8VooAXC`.slice(0, 15)}...</strong>
                           
                           </CopyToClipboard>
                         <br/>
                      
                       <strong> Oink Vault 3 </strong>             

                         1,000,000,000.00 
                         <CopyToClipboard
                            text={`DDCQkuuyDuzHdztdKCmC5ma2NmXFnh4xSJeAcawVLoRS`}
                          
                          >
                                                    <strong className={cl.copy} onClick={e=>handleCopyTexst(e,`DDCQkuuyDuzHdztdKCmC5ma2NmXFnh4xSJeAcawVLoRS`)}> {`DDCQkuuyDuzHdztdKCmC5ma2NmXFnh4xSJeAcawVLoRS`.slice(0, 15)}...</strong>

                           </CopyToClipboard>
                         <br/>
                       <strong> Oink Vault 4 </strong>             

                         1,150,000,000.00 
                         <CopyToClipboard
                            text={`2aYHubRPAQ231W9Vcr5T5MDDW73Gr5dFY3bunzZfFsz1`}
                          
                          >
                                                    <strong className={cl.copy} onClick={e=>handleCopyTexst(e, `2aYHubRPAQ231W9Vcr5T5MDDW73Gr5dFY3bunzZfFsz1`)} > {`2aYHubRPAQ231W9Vcr5T5MDDW73Gr5dFY3bunzZfFsz1`.slice(0, 15)}...</strong>

                           </CopyToClipboard>
                         <br/>
                         
                         <strong> JiggyPiggies NFT Pool </strong>             
                        1,150,000,000.00 
                        <CopyToClipboard
                            text={`GJyxZfSZxzuoAwhsbP6A8i7F7LmJWTstiGRwESVzEhpY`}
                          
                          >
                    <strong className={cl.copy} onClick={e=>handleCopyTexst(e, `GJyxZfSZxzuoAwhsbP6A8i7F7LmJWTstiGRwESVzEhpY`)}> {`GJyxZfSZxzuoAwhsbP6A8i7F7LmJWTstiGRwESVzEhpY`.slice(0, 15)}...</strong>

                           </CopyToClipboard>
                      </div>
                    
                  </div>
                </div>
            </div>
            <div className={cl.conetntM}>
              <div className={cl.leftB}>
             <div className={cl.leftimg}></div>

                <div className={cl.textL}>
                  <strong>Max Supply </strong>
                   21 Bil
                  <br/>
                  <br/>
                  <strong>Burned Amount </strong>

                   12.6 Bil
                  <br/>
                  <br/>
                  <strong>Total Supply </strong>

                   8.4 Bil
                  <br/>
                  <br/>
                  <strong>Circ. Supply </strong>

                  4.6 Bil
                  <br/>
                  <br/>
                  <strong>Oink Vault 1 </strong>

                 - 1 Bil
                  <br/>
                  <br/>
                  <strong>Oink Vault 2 </strong>

                 - 0.6 Bil
                  <br/>
                  <br/>
                  <strong>Oink Vault 3 </strong>

                  - 0.3 Bil
                  <br/>
                  <br/>
                  <strong>Oink Vault 4 </strong>

                  - 1.15 Bi
                  <br/>
                  <br/>
                  <br/>


                        <strong>
                          Full Details on Web Version!
                        </strong>
                </div>
              </div>
              <div className={cl.rightB}>
                  <strong className={cl.textR}>
                    <Image src={'/img/ill 2.png'} width={300} height={350}/>
                    </strong>
                  
              <div className={cl.rightimg}></div>

              </div>
             
            </div>
        </div>
    </section>
  )
}
