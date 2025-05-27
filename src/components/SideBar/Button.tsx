import { useNavigate } from 'react-router-dom'

export type ButtonSidebarProps = {
    title:string,
    href?:string,
    src:string,
    alt:string
    action?:()=>void
}


function Button({title,href,src,alt,action}:ButtonSidebarProps) {

    const disabled = window.location.pathname === href

    

    const navigate = useNavigate()

  return (
    <button key={title}  onClick={href?()=>navigate(href):action} disabled={disabled} title={title} className={'disabled:cursor-default cursor-pointer disabled:bg-main-bg disabled:text-white w-12 h-12 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-yellow-500 rounded-sm dropShadow hover:bg-main-bg duration-300 ease-in-out group bg-main border-2 border-stroke items-center flex justify-center'}>
        <img loading='eager' src={src} className={`max-w-[24px]  max-h-[24px] min-w-[24px] min-h-[24px] object-cover ${disabled?"":" invert-100 brightness-0 group-hover:brightness-100 group-hover:invert-0 "}`} alt={alt} />
    </button>
  )
}

export default Button
