import { StyledButton } from "./styles";

interface IProps {
    onClick: () => void
}

export const Button = ({ onClick }: IProps) => {
    return (
        <StyledButton onClick={onClick} type='button'>Ohhhoooo 🍻 </StyledButton>
    )
}
