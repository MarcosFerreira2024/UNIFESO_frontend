import type { ProductProps } from "../components/Produtos/Products"

export async function getProductList():Promise<ProductProps[]|Error> {
    try {
        const res = await fetch("http://localhost:3000/products")

        const json = await res.json()


        if(res.status != 200) throw new Error(json.message)

            console.log(json)

        return json as ProductProps[]
    }
    catch(e){
        if(e instanceof Error) return new Error(e.message)
        return new Error ("Erro ao buscar produtos")
    }
}