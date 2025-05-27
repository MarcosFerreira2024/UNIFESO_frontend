import React, { useContext } from 'react'
import { AddProductContext } from '../../context/AddProductContext'
import ProductModalInput from './ProductModalInput'
import Button from '../ui/Button'
import useRegisterProduct from '../../hooks/produtos/useRegisterProduct'




function AddProductModal() {

    const {IsModalOpen, setIsModalOpen} = useContext(AddProductContext)

    const {erros,handleSubmit,loading} = useRegisterProduct()
    
    
    return (
    <>
     {
    IsModalOpen? 
    <div aria-expanded={IsModalOpen} onClick={()=> setIsModalOpen(false)} className='absolute top-0 text-main bg-black/20 z-100 right-0 left-0 bottom-0 flex justify-center items-center min-h-screen'>
        <div onClick={(e)=>e.stopPropagation()} className=' flex w-full max-w-[700px] px-5    flex-col  '>
            <div className='border-2 border-stroke rounded-sm bg-main-bg dropShadow'>
                <div className='bg-main flex justify-between dropShadow text-white gap-5 items-center h-[80px] px-5'>
                    <h1 className='md:text-3xl text-2xl'>Novo Produto</h1>
                    <button className='cursor-pointer text-main bg-main-bg max-w-[24px] dropShadow  min-h-[24px] min-w-[24px] max-h-[24px] rounded-sm border-1 border-stroke flex justify-center items-center' onClick={(e)=>{
                        e.stopPropagation()
                        setIsModalOpen(false)}}>X</button>

                </div>
                <form onSubmit={handleSubmit} method='postd' className='px-5 py-4 gap-5 flex flex-col'>
                    <ProductModalInput icon='ui/productName.svg'  name='nome' placeholder='Nome do Produto'  type='text'/>
                    <div className='flex gap-5 justify-between'>
                        <ProductModalInput icon='ui/preco.svg'  name='preco' placeholder='Preço'  type='number'/>
                        <ProductModalInput icon='ui/estoque.svg'  name='estoque' placeholder='Estoque'  type='number'/>
                    </div>

                    <ProductModalInput icon='ui/img.svg'  name='imagem' placeholder='Image'  type="file"/>

                    <textarea name="descricao" id="descricao"  placeholder='Descrição'  className='w-full group-hover:placeholder:text-white focus:outline-2 focus-within:outline-offset-1 transition-colors outline-main placeholder:text-main  bg-main-bg text-main group-hover:text-white resize-none min-h-[200px] group-hover:bg-main border-stroke rounded-sm dropShadow duration-300 p-5 border-2 max-h-[60px] '></textarea>


                    <div className={`justify-end relative flex gap-5  h-[80px]`}>
                        {erros?<div className='flex gap-4 items-center absolute left-0'>
                            <img src="ui/info.svg" className='max-w-[24px]' alt="" />
                            <p className='text-red-500 max-w-[200px]'>{erros}</p>
                        </div>:null}
                        <div className='max-w-[140px]  w-full'>
                            <Button size='md' variant='dark' type='submit' label={loading?"Enviando...":"Enviar"}>{loading?"Enviando...":"Enviar"}</Button>
                        </div>
                    </div>
                    
                    
                </form>   
            </div>

        </div>
      
    </div>: null
 }</>
  )
}

export default AddProductModal
