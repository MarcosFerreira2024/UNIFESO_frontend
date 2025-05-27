import React from 'react'

type ModalProps = {
    required?:boolean,
    placeholder:string,
    name:string,
    type?:string
    icon:string
}

function ProductModalInput({icon,name,type="text",required=false,placeholder}:ModalProps) {
  return (
    <div className='flex justify-between items-center relative group w-full '>
        <input name={name} id={name} type={type} required={required} placeholder={placeholder} className='w-full group-hover:placeholder:text-white focus:outline-2 focus-within:outline-offset-1 transition-colors outline-main placeholder:text-main  bg-main-bg text-main group-hover:text-white group-hover:bg-main border-stroke rounded-sm dropShadow duration-300 p-5 border-2 max-h-[60px] '/>
        <label  htmlFor={name} title={placeholder} className='absolute right-5  w-[32px] flex items-center justify-center h-[32px] group-hover:brightness-0 group-hover:invert-100 duration-300'><img src={icon} alt={placeholder} /></label>
    </div>

      
  )
}

export default ProductModalInput
