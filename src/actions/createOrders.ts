
import Cookies from "js-cookie"

export async function createOrders(id:number) {
    try {
        const res = await fetch("http://localhost:3000/order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get("token")}`
                },
                body:JSON.stringify({
                    id_produto:id,
                    quantidade:1

                }),
            
            
            }
        )

        const json = await res.json()


        if(res.status != 200) throw new Error(json.message)

    }
    catch(e){
        if(e instanceof Error) return new Error(e.message)
        return new Error ("Erro ao buscar produtos")
    }
}