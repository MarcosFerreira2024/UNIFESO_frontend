"use client"
import React from 'react'
import Button from '../ui/Button'
import useCreatePedidos from '../../hooks/pedidos/useCreatePedidos'

type ModalProps={
    isOpen:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    descricao:string
    imagem:string
    nome:string
    preco:string
    id:number
    estoque:number
}


function ProductInfoModal({isOpen,id,estoque,setOpen,descricao,imagem,nome,preco}:ModalProps) {


    const {loading,error,handleSubmit} = useCreatePedidos(id)
  
  
    return (
    <>
     {
    isOpen? 
    <div onClick={()=> setOpen(false)} className='absolute top-0 text-main bg-black/20 z-100 right-0 left-0 bottom-0 flex justify-center items-center min-h-screen'>
        <form onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()} className='bg-main-bg flex  flex-col border-2 border-stroke rounded-sm dropShadow '>
            <div className='bg-main flex justify-between dropShadow text-white gap-5 items-center h-[80px] px-5'>
                <h1 className='md:text-3xl text-2xl'>{nome}</h1>
                
                <button className='cursor-pointer text-main bg-main-bg max-w-[24px] dropShadow  min-h-[24px] min-w-[24px] max-h-[24px] rounded-sm border-1 border-stroke flex justify-center items-center' onClick={(e)=>{
                    e.stopPropagation()
                    setOpen(false)}}>X</button>

            </div>
            <div className='flex flex-row  gap-5 p-5'>
                
                <div className='flex flex-col justify-between gap-5'>
                    <p className='text-xl md:max-w-[200px] break-words hyphens-auto max-w-[200px] min-w-[200px] md:min-w-[300px]'>
                        {
                            descricao
                        }

                    </p>
                    <div className='flex flex-col gap-2'>
                        <p className='text-red-500 max-w-[200px]'>{error}</p>
                        <p className='text-2xl font-bold'>{preco}</p>
                        <Button type='submit' label={loading?"Enviando...":"Adicionar Pedido"}  disabled={loading || estoque <= 0} >{loading?"Enviando...":"Adicionar Pedido"}</Button>
                    </div>
                </div>
                <div title={nome} className='cursor-pointer' onClick={()=> {
                    window.open(imagem,'_blank')
                }}>
                    <img loading='eager' src={imagem} alt={nome} className=' max-w-[200px] md:max-w-[300px] border-2 border-stroke rounded-sm dropShadow object-cover' />
                </div>
            </div>

        </form>
      
    </div>: null
 }</>
  )
}

export default ProductInfoModal
