import React from 'react'
import cl from './Hero.module.css'
export default function Hero() {
  return (
    <section className={cl.section}>

        <div className={["container", cl.cont].join` `}>
        <div className={cl.airdrop}></div>

            <div className={cl.scene}>

            </div>
        </div>
    </section>
  )
}
