import { StyledButton } from "./styles";

interface IProps {
    isDisabled: boolean
}

export const Button = ({ isDisabled }: IProps) => {
    return (
        <StyledButton
            disabled={isDisabled}
            $isDisabled={isDisabled}
            type='submit' >Ohhhoooo 🍻 </StyledButton>
    )
}
