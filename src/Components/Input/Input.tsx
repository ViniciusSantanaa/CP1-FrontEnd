import { StyledInput } from "./Input.Styled"

interface InputProps {
    type: string
    id: string
    name: string
    label: string
    
}

export const Input = ({ type, id, name, label, ...rest }: InputProps) => {
    return (
        <>
            <label htmlFor={id} >{label}</label>
            <StyledInput type={type} id={id} name={name} {...rest} />
        </>
    )
}