import {  uploadToCloud } from "../utils/uploadFile";

type CreateProductProps = {
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  image: File;
};

export async function createProduct({ nome, descricao,estoque, preco, image }:CreateProductProps) {
    try {

        const uploadImage = await uploadToCloud(image)

        if(uploadImage instanceof Error) throw new Error(uploadImage.message)

        const imagem = uploadImage.url



        const response = await fetch('http://localhost:3000/products', {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({nome,descricao,preco,imagem,estoque})
        })
        const json = await response.json()

        if(response.status != 200) throw new Error(json.message)

        return json


    }catch (error) {
        if (error instanceof Error) return new Error(error.message)
        return new Error("Erro ao criar produto")
    }

}
