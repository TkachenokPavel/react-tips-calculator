import { StyledInput } from './styles'

interface IProps {
    value: string
    placeholder: string,
    type: string,
    onChange: (e: { target: { value: string } }) => void
}

export const Input = ({ placeholder, type, value, onChange }: IProps) => {
    return (
        <StyledInput
            onChange={onChange}
            value={value}
            type={type}
            placeholder={placeholder} />
    )
}
