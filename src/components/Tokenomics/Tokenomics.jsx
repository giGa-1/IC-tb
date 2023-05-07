import React from 'react'
import cl from './Tokenomics.module.css'

export default function Tokenomics() {
  return (
    <section className={cl.section}>
        <div className="container">
        <h2 className={['title', cl.title].join` `}>Tokenomics</h2>
            <div className={cl.content}>
                <div className={cl.blockL}></div>
                <div className={cl.blockR}></div>
                <div className={cl.textImgs}>
                  <div className={cl.imgL}></div>
                  <div className={cl.imgR}></div>
                  <div className={cl.textBlock}>
                      <div className={cl.text}>
                        <strong>Introducing our Meme Coin with a total supply of 21 billion tokens:</strong>
                        <br/>
                        <br/>
                        <strong>
                          Airdrop (1.5%): 315M tokens 
                        </strong>
                        for promotion and engagement.
                     

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
        </div>
    </section>
  )
}
