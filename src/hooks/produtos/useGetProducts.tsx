import React, { useEffect } from 'react'
import { getProductList } from '../../actions/getProductList'
import type { ProductProps } from '../../components/Produtos/Products'

function useGetProducts() {
    const [data,setData] = React.useState<ProductProps[] | null>(null)
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState("")



    useEffect(()=>{

        const fetchProducts = async()=>{
            const data = await getProductList()
            if(data instanceof Error){
                setError(data.message)
                setLoading(false)
                return
            }
            setData(data)
            setLoading(false)
            return
        }
        fetchProducts()

    },[])



  return {
    data,
    loading,
    error,


  }
}

export default useGetProducts
