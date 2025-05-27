import usePedidosModal from "../../hooks/pedidos/usePedidosModal";
import PedidosInfoModal from "./PedidosModal";

export type PedidosProps = {
    imagem: string;
    nome: string;
    descricao: string;
    preco: number ;
    quantidade: number

}



function Pedidos({imagem,nome,descricao,preco,quantidade}:PedidosProps) {
    const { Modal,setShowModal} = usePedidosModal()



  return (
    <>

    <PedidosInfoModal total={preco*quantidade} quantidade={quantidade} isOpen={Modal} setOpen={setShowModal} descricao={descricao} imagem={imagem} nome={nome} />
    <div  className="flex-1 group  pb-5 text-main w-full max-w-[350px]  flex flex-col gap-3  ">
      <div onClick={()=>setShowModal(true)} className="  relative rounded-sm cursor-pointer " >
        <img
          src={imagem}
          className="rounded-sm border-2 border-stroke dropShadow max-h-[300px] min-w-[300px] min-h-[300px] bg-main object-cover w-full"
          alt={nome}
        />
      </div>
    </div>
    </>
  );
}

export default Pedidos;
