import MainLayout from '../layouts/MainLayout'
import TitleCard from '../components/ui/TitleCard'
import ProductList from '../components/Produtos/ProductList'

function DashBoard() {
  return (
    <>
      <MainLayout>
            <div className="flex flex-col gap-20 w-full ">
              <TitleCard alt='Produtos' src='ui/product.svg' title='Produtos'/>

                <div>
                  <ProductList />
                </div>


            </div>


      </MainLayout>
    </>
  )
}

export default DashBoard
