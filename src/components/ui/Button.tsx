import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    size?: 'sm' | 'md' | 'lg'
    variant?: 'dark' | 'light'
    action?: () => void
    label:string
    type?:"button"|"submit",
    auth?:boolean
    disabled?:boolean
}


function Button({auth=false,disabled=false,children,type='button',action,label, variant='light', size='sm'}:ButtonProps) {


    if(variant !== 'dark' && variant !== 'light'){
        variant = 'light'
        console.log("Ocorreu um erro ao selecionar a variante do botão, provavelmente foi passado um valor diferente de 'dark' ou 'light'")
    }

    const variantColors = {
        dark: `bg-main text-white focus-visible:outline-white  ${auth?"hover:opacity-95 focus-visible:outline-white lg:focus-visible:outline-main hover:outline-white lg:hover:outline-main  hover:bg-main hover:text-white lg:hover:bg-main lg:hover:text-white hover:outline-white":"hover:bg-main hover:text-white lg:hover:bg-white lg:hover:text-main "} `,
        light: `bg-white text-main  ${auth?"hover:opacity-95 lg:focus-visible:outline-white focus-visible:outline-main lg:hover:outline-white hover:outline-main hover:outline-stroke lg:hover:bg-white lg:hover:text-main hover:bg-main hover:text-white":"bg-white text-main lg:hover:bg-main lg:hover:text-white "}`
    }

    const sizeClasses = {
        sm: 'h-[30px] text-regular ',
        md: 'h-[50px] text-lg',
        lg: 'h-[80px] text-2xl',
    }



    return (
        <button type={type} aria-label={label} title={label} disabled={disabled} onClick={action} className={`flex disabled:opacity-50 disabled:cursor-default  rounded-sm outline-1 outline-transparent gap-2 overflow-hidden relative py-5 dropShadow   border-2 border-stroke items-center cursor-pointer justify-center w-full self-start duration-300 ease-in-out  ${variantColors[variant]} ${sizeClasses[size]}`}>
            {children}
        </button>
    )




}

export default Button
