import { StyledInput } from './styles'

interface IProps {
    value: string
    placeholder: string,
    type: string,
    onChange: (value: string) => void
}

export const Input = ({ placeholder, type, value, onChange }: IProps) => {
    return (
        <StyledInput
            onChange={e => onChange(e.target.value)}
            value={value}
            type={type}
            placeholder={placeholder} />
    )
}
