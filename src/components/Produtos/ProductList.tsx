
"use client"
import React from 'react'
import Products from './Products'
import useProducts from '../../hooks/produtos/useGetProducts'

function ProductList() {

    const {data,loading,error} = useProducts()









  return (
    <div className='xl:flex  grid lg:grid-cols-3  gap-5 w-full min-w-full md:grid-cols-2  lg:justify-start justify-center '>
      {loading?"Carregando...":(data?(data.length>0?data.map((product)=>{
          return <Products id={product.id} estoque={product.estoque} key={product.nome} descricao={product.descricao} imagem={product.imagem} nome={product.nome} preco={product.preco} />
                    
      }):<h1 className='text-xl text-main'>Adicione Produtos :</h1>):<h1 className='text-xl text-red-500'>{error}</h1>)}
        
    </div>
  )
}

export default ProductList
