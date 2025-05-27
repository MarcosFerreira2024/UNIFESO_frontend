import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import AddProductModal from '../components/Produtos/AddProductModal'
import AddProductProvider from '../context/AddProductContext'

function MainLayout({children}:{children:React.ReactNode}) {

  


  return (
    <section className='relative'>
      <AddProductProvider>
        <SideBar/>
        <AddProductModal />
      </AddProductProvider>
      <section className='max-w-[1440px] px-5 mx-auto  pt-5 '>
        {children}

      </section>
    </section>
  )
}

export default MainLayout
