import React, { useEffect } from 'react'
import { getOrders, type Orders } from '../../actions/getOrders'

function useGetPedidos() {
    const [data,setData] = React.useState<Orders[] | null>(null)
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState("")

    const [totalAmount,setTotalAmount] = React.useState<string | null>(null)


    useEffect(()=>{

        const fetchPedidos= async()=>{
            const data = await getOrders()
            if(data instanceof Error){
                setError(data.message)
                setLoading(false)
                return
            }
            const amount = data.reduce((amount,order)=>{
              return amount += order.produto.preco * order.quantidade
            },0)
            setTotalAmount((amount/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            setData(data)
            setLoading(false)
            return
        }
        fetchPedidos()

    },[])



  return {
    data,
    loading,
    error,
    toPay: totalAmount


  }
}

export default useGetPedidos
