
import Cookies from "js-cookie"

export type Orders ={
    id: number,
    userId: number,
    produtoId: number,
    quantidade: number,
    produto: {
        id: number,
        nome: string,
        preco: number,
        descricao: string,
        estoque: number,
        imagem: string,
    }
}


export async function getOrders() {
    try {
        const res = await fetch("http://localhost:3000/orders",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get("token")}`
                }
            
            
            }
        )

        const json = await res.json()


        if(res.status != 200) throw new Error(json.message)

        return json as Orders[]
    }
    catch(e){
        if(e instanceof Error) return new Error(e.message)
        return new Error ("Erro ao buscar produtos")
    }
}