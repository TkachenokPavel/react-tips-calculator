import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button'
import { StyledForm } from './styles'
import { Title, Subtitle, TotalBill } from "./styles";

export const Form = () => {
    const [totalBill, setTotalBill] = useState<number>(0.00)

    return (
        <StyledForm>
            <Title>Welcome to App</Title>
            <Subtitle>Let’s go calculate your tips</Subtitle>
            <Input type='text' placeholder='Enter bill' />
            <Input type='text' placeholder='Enter persons' />
            <TotalBill>Total: {totalBill.toFixed(2)}$</TotalBill>
            <Button />
        </StyledForm>
    )
}
