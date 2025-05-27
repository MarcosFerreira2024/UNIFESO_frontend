import React from 'react'

type InputProps = {
    label:string
    placeholder:string
    id:string
    name:string
    required:boolean
    type:string
}

function Input({label,placeholder,id,required,name,type}:InputProps) {
  return (
    <div className='flex flex-col gap-2.5'>
        <label className=' text-main lg:text-white text-xl self-start' title={placeholder} htmlFor={id}>{label}</label>
        <input  required={required} title={placeholder} type={type} placeholder={placeholder} id={id} name={name} className='flex text-main lg:focus-visible:outline-white focus-visible:outline-main  h-[80px] hover:outline-stroke lg:hover:bg-white lg:hover:text-main hover:bg-main hover:text-white hover:placeholder:text-white lg:hover:placeholder:text-main lg:hover:outline-white outline-1 outline-transparent focus-within:outline-white rounded-sm     bg-main-bg placeholder:text-main px-5 text-base    dropShadow  border-2 border-stroke items-center cursor-pointer justify-center w-full self-start duration-200 ease-in-out' />
    </div>
  )
}

export default Input
