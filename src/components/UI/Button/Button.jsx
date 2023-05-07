import React from 'react'
import cl from './Button.module.css'

export default function Button({ classBtn,children, ...props}) {

  return (
    <button   className={[cl.btn, classBtn].join` `} {...props} >
        {children}
    </button>
  )
}
