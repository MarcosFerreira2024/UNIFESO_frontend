"use client"
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import { verifyToken } from '../utils/verifyToken'

type MiddlewareProps = {
    children: React.ReactNode
    routeType: "public" | "guest" | "private"
}


function Middleware({children,routeType}:MiddlewareProps) {
    const navigate = useNavigate()

    useEffect(()=>{
        async function checkToken(){

            const token = Cookies.get("token")
            if(!token){
                if(routeType === "private"){
                    return navigate("/login")
                }
                return 
            }
            const status = await verifyToken(token)
            if(status instanceof Error ){
                Cookies.remove("token")
                navigate("/login")
            }
            if(routeType === "guest"){
                return navigate("/dashboard")
            }
            
            
        }
        checkToken()
    },[navigate,routeType])




    
return <>{children}</>



}

export default Middleware
