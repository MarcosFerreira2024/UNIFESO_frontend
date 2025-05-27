import React from 'react'

function useSidebarModal() {
    const [isOpen, setIsOpen] = React.useState(true)






  return {
    isOpen,
    setIsOpen
  }
}

export default useSidebarModal
