import Input from './Input'

type InputListProps = {
    label:string,
    placeholder:string,
    id:string,
    name:string
    required:boolean
    type:string
}


function InputList({data}:{data:InputListProps[]}) {
  return (
    <>
        {data.map((input) => <Input type={input.type} required={input.required} key={input.id} label={input.label} placeholder={input.placeholder} id={input.id} name={input.name} />)}
    </>
  )
}

export default InputList
