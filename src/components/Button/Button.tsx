import { StyledButton } from "./styles";

interface IProps {
    onClick: () => void,
    isButtonActive: boolean
}

export const Button = ({ onClick, isButtonActive }: IProps) => {
    return (
        <StyledButton disabled={isButtonActive} onClick={onClick} type='button' >Ohhhoooo 🍻 </StyledButton>
    )
}
