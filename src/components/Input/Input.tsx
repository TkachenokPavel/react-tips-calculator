import { ChangeEvent } from 'react';
import { StyledInput } from './styles'

interface IProps {
    value: string
    placeholder: string,
    type: string,
    name: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ placeholder, type, value, onChange, name }: IProps) => {
    return (
        <StyledInput
            onChange={onChange}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder} />
    )
}
