
"use client"
import type { Orders } from '../../actions/getOrders'
import Pedidos from './Pedidos'

type ListaPedidosProps = {
  data:Orders[] | null
  loading:boolean
  error:string
}

function ListaPedidos({
  data,
  loading,
  error

}:ListaPedidosProps) {

    











  return (
    <>
    
      
      <div className='xl:flex  grid lg:grid-cols-3  gap-5 w-full min-w-full md:grid-cols-2  lg:justify-start justify-center '>

        
        {loading?"Carregando...":(data?(data.length>0?data.map((order)=>
          {
                  return <Pedidos quantidade={order.quantidade}  key={order.produto.id} descricao={order.produto.descricao} imagem={order.produto.imagem} nome={order.produto.nome} preco={order.produto.preco} />
          }

                      
        ):<h1 className='text-xl text-main'>Adicione Pedidos :</h1>):<h1 className='text-xl text-red-500'>{error}</h1>)}
          
      </div>
    
    </>
  )
}

export default ListaPedidos