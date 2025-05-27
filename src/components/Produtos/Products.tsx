import React from "react";
import ProductInfoModal from "./ProductInfoModal";
import useProductModal from "../../hooks/produtos/useProductModal";

export type ProductProps = {
    imagem: string;
    nome: string;
    descricao: string;
    preco: number ;
    id:number
    estoque:number
}



function Products({imagem,nome,descricao,preco,id,estoque}:ProductProps) {
    const { Modal,setShowModal} = useProductModal()


    const precoFormatado = (preco/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
    <ProductInfoModal id={id} estoque={estoque}  isOpen={Modal} setOpen={setShowModal} preco={precoFormatado} descricao={descricao} imagem={imagem} nome={nome} />
    <div  className="flex-1 group  pb-5 text-main w-full max-w-[350px]  flex flex-col gap-3  ">
      <div onClick={()=>setShowModal(true)} className="  relative rounded-sm cursor-pointer " >
        <img
          src={imagem}
          className="rounded-sm border-2 border-stroke dropShadow max-h-[300px] min-w-[300px] min-h-[300px] bg-main object-cover w-full"
          alt={nome}
        />
        <button
          title="Ver Mais Informações"
          className="absolute  cursor-pointer  top-2 right-2"
        >
          <img
            src="ui/info.svg"
            className="max-w-[24px]    max-h-[24px] min-w-[24px] min-h-[24px] object-cover  group-hover:scale-110 duration-150 ease-linear  "
            alt="Ver Mais"
          />
        </button>
      </div>
      <div className="flex flex-col justify-between  items-center ">
        <div className="flex flex-col text-center" onClick={()=>setShowModal(true)}>
          <h1 className="text-xl min-h-[40px] min-w-[180px] cursor-pointer">{nome}</h1>
          <p className="text-xl font-bold cursor-pointer">{precoFormatado}</p>
        </div>

      </div>
    </div>
    </>
  );
}

export default Products;
