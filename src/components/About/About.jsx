import Image from 'next/image'
import React from 'react'
import cl from './About.module.css'
export default function About() {
  return (
    <section className={cl.section}>
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
                    <Image src={'/img/about.png'} width={560} height={383}/>
                </div>
            </div>
        
        </div>
    </section>
  )
}
