import React from 'react'

function useProductModal() {
    const [Modal,setShowModal] = React.useState(false)




  return {
    Modal,
    setShowModal,



  }
}

export default useProductModal
