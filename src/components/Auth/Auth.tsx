import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import InputList from './InputList'
import Button from '../ui/Button'

type AuthProps = {
    title: string,
    text: string,
    link: string,
    formAction: (e: React.FormEvent<HTMLFormElement>) => void,
    linkHref: string
    inputListData: {label: string,placeholder: string,id: string,required: boolean,name: string,type: string}[]
    loading: boolean,
    errors: string
}


function Auth({title,loading,errors,text,link,formAction,linkHref,inputListData}:AuthProps) {
  return (
    <div>
        <AuthLayout>
            <h1 className='text-3xl text-center lg:text-white text-main'>{title}</h1>

            <form onSubmit={formAction} className='flex justify-center relative flex-col gap-5 mt-5'>
            
            <InputList data={inputListData} />
            <div className='flex justify-between relative'>
                {errors && <p className='text-red-100 absolute bottom-[-40px] left-0 z-10'>{errors}</p>}
                <div className='w-full max-w-[400px] '>

                <Button auth={true} type='submit' label='Entrar' size='lg' variant='light'>{loading?"Enviando...":title}</Button>
                </div>
                <div className='text-main lg:text-white'>
                <p className='flex flex-col text-right'>{text} <a href={linkHref} className='underline underline-offset-2 under-2'>{link}</a></p>
                </div>
            </div>


            </form>

        </AuthLayout>
    </div>
  )
}

export default Auth
