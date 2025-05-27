import React from 'react'
import type { ButtonSidebarProps } from './Button'
import Button from './Button'




function ButtonList({data}:{data:ButtonSidebarProps[]}) {
  return (
    <>
      {data.map((botao)=>{
        return <Button action={botao.action} title={botao.title} href={botao.href} src={botao.src} alt={botao.alt} key={botao.title} />
      })}
    </>
  )
}

export default ButtonList
