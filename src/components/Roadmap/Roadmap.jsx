import React from 'react'
import cl from './Roadmap.module.css'

export default function Roadmap() {

    const stateCards = [
        {id:1, name: 'Phase ONE', content: 'To Be announced...', color: 'FBF4DD',class: cl.topCard},
        {id:2, name: 'Phase TWO', content: 'To Be announced...',color: 'FBEEBF',class: cl.midCard},
        {id:3, name: 'Phase THREE', content: 'To Be announced...',color: 'FBE288',class: cl.bottomCard},

    ]
  return (
    <sectiob className={cl.section}>
        <div className={['container', cl.cont].join` `}>
            <h2 className={['title', cl.title].join` `}>Roadmap</h2>

            <div className={cl.content}>
                <div className={cl.back}></div>
                <div className={cl.airdrop}></div>
                <ul className={cl.cards}>
                    {stateCards.map(card => {
                        return (
                            <React.Fragment key={card.id}>
                                <li className={cl.card}>
                                    <div className={[cl.itemContent, card.class].join` `}>
                                        <div className={cl.top}>
                                            <div className={cl.cardTitle}>{card.name}</div>
                                        </div>
                                        <div className={cl.bottom} style={{background: `#${card.color}`}}>
                                            <div className={cl.cardDescr}>{card.content}</div>
                                        </div>
                                    </div>
                                  
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </div>
    </sectiob>
  )
}
