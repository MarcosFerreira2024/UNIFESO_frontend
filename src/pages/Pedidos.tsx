import ListaPedidos from "../components/Pedidos/ListaPedidos"
import TitleCard from "../components/ui/TitleCard"
import usePedidos from "../hooks/pedidos/useGetPedidos"
import MainLayout from "../layouts/MainLayout"

function Pedidos() {

const {data,loading,error,toPay} = usePedidos()
  return (
      <MainLayout>
          <div className="flex flex-col gap-20 w-full  ">
              <div className="flex justify-between">
                <TitleCard alt='Pedidos' src='ui/order.svg' title='Pedidos'/>
                {
                  toPay?<TitleCard alt='Pedidos' src='ui/coin.svg' title={toPay} />:null
                }

              </div>


              <ListaPedidos  data={data} loading={loading} error={error}/>


          </div>
      </MainLayout>
  )
}

export default Pedidos
