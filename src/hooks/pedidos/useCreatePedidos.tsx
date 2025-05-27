import React, { type FormEvent } from 'react'
import { createOrders } from '../../actions/createOrders'

function useCreatePedidos(id:number) {
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState("")

    const handleSubmit = async (e:FormEvent) =>{
        e.preventDefault()
        setLoading(true)
      
        const created = await createOrders(id)
            if(created instanceof Error){
                setError(created.message)
                setTimeout(()=>setLoading(false),300)
                return
            }

            setTimeout(()=>setLoading(false),300)
            return
        }

    




  return {
    loading,
    error,
    handleSubmit


  }
}

export default useCreatePedidos
