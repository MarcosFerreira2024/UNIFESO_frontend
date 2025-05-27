import React from 'react'

function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <section>
        <div className=' mx-auto relative flex justify-center  h-screen '>
            <img loading='eager' className='max-w-[300px] absolute lg:left-5 top-0 lg:top-[100px]'  src="ui/logo.png" alt="Unifeso" title='Unifeso' />

            <div className='lg:flex hidden px-5 py-50 flex-1  bg-bg-main shadow-[inset_2px_2px_100px_10px_rgba(0,0,0,0.3)] '>
                <div className='flex flex-col text-main max-w-[500px]'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-3xl text-nowrap'>Faça seus pedidos com segurança</h1>
                            <p className='text-base break-words'>Nosso sistema foi pensado para tornar sua experiência mais eficiente, 
                            oferecendo autonomia, controle e comodidade. Aproveite essa facilidade 
                            e gerencie seus pedidos de forma descomplicada na UNIFESO!</p>
                        </div>

                    </div>

            </div>
            <div className='flex flex-col  flex-1 bg-main-bg lg:bg-main py-50 px-5 '>
                {children}
            </div>

        </div>

      
    </section>
  )
}

export default AuthLayout
