import ButtonList from './ButtonList'
import useSidebarModal from '../../hooks/useSidebarModal'
import { useContext } from 'react'
import { AddProductContext } from '../../context/AddProductContext'
import { createSidebarData } from '../../data/sidebar'



function ToggleButton({isOpen,setIsOpen}:{isOpen:boolean,setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}){
        return (
      <button title={`${isOpen?"Fechar Menu":"Abrir Menu"}`} onClick={()=>setIsOpen(!isOpen)} className={`dropShadow w-[24px] h-[24px] flex items-center justify-center group cursor-pointer hover:bg-main rounded-full border-2 absolute ${isOpen?"-right-3.5":" -right-6.5"}  -top-3.5 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-yellow-500  bg-white   border-stroke`}>
        <img loading='eager' src={isOpen?"ui/close.svg":"ui/arrow-right.svg"} className={` w-[24px] h-[16px] group-hover:invert-100 group-hover:brightness-0 ease-in-out duration-300 `} alt="" />
      </button>
    )
   
}

function SideBar() {

  const {isOpen,setIsOpen }= useSidebarModal()

  const {setIsModalOpen:setIsAddProductModalOpen} = useContext(AddProductContext)









  return (
    <nav className={`fixed  left-0  w-[80px] top-1/2 translate-y-[-50%] z-10   `}>
      

        <div className={`${isOpen?"translate-x-0":"-translate-x-full"} bg-main-bg   relative ease-in-out duration-300 rounded-r-sm dropShadow border-t-2 border-b-2 border-r-2 border-stroke flex flex-col justify-center items-center py-5 gap-5`}>

        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ButtonList data={createSidebarData(setIsAddProductModalOpen)} />
        </div>
        
      
    </nav>
  )
}

export default SideBar
