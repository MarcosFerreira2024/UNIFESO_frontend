import React from 'react'

function TitleCard({src,alt,title}:{src:string,alt:string,title:string}) {
  return (
    <div title={alt} className='flex gap-2 items-center group  px-5 max-h-[80px] min-h-[80px] w-[300px] hover:bg-main-bg duration-300 ease-in-out bg-main border-2 border-stroke rounded-sm dropShadow '>
        <img src={src} alt={alt} className='invert-100 brightness-0 group-hover:invert-0 group-hover:brightness-100' /> 
        <h1 className='text-white text-3xl group-hover:text-main '> {title}</h1>
    </div>
  )
}

export default TitleCard
