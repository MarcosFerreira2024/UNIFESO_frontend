import React from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../actions/createProduct";

function useRegisterProduct() {
  const [erros, setErros] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean | null>(null);

  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const nome = formData.get("nome") as string;
    const estoque = formData.get("estoque") as string;
    const descricao = formData.get("descricao") as string;
    const preco = formData.get("preco") as string;
    const image = formData.get("imagem") as File;
    if (!nome || !descricao || !preco || !image) {
      setErros("Preencha todos os campos");
      return;
    }
    else if(!estoque || parseInt(estoque) <= 0) setErros("Estoque precisa ser maior que 0")
      
    else if(image.type != "image/png" && image.type != "image/jpeg") setErros("Imagem precisa ser png ou jpeg")
    else {
      try {
        setErros("");
        setLoading(true);
        const product = await createProduct({ nome,estoque: parseInt(estoque), descricao, preco: parseInt(preco), image });
        if (product instanceof Error) throw new Error(product.message);

        navigate("/dashboard");
      } catch (error) {
        if (error instanceof Error) setErros(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return {
    erros,
    handleSubmit,
    loading,
  };
}

export default useRegisterProduct;
