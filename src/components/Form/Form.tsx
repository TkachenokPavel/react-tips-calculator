import { useState, useEffect, FormEvent } from 'react';
import { SingleValue } from 'react-select';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { StyledForm, Title, Subtitle, TotalBill } from "./styles";
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { ITipsOption } from '../../types';
import { useInput } from "../../hooks/useInput";

export const Form = () => {
    const bill = useInput();
    const persons = useInput();
    const [total, setTotal] = useState<string>('0.00');
    const [tips, setTips] = useState<ITipsOption>({ value: 10, label: '10%' });
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleSelect = (option: SingleValue<ITipsOption>): void => {
        if (option) {
            setTips(option)
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setTotal(calculateTips())
    }

    const calculateTips = (): string => {
        const billNumber = +bill.value,
            personsNumber = +persons.value,
            percent = tips.value,
            totalBill = ((billNumber * percent) / 100) * personsNumber + billNumber;
        return totalBill.toFixed(2);
    };

    useEffect(() => {
        bill && persons ? setIsDisabled(false) : setIsDisabled(true)
    }, [bill, persons])

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title>Welcome to App</Title>
            <Subtitle>Let’s go calculate your tips</Subtitle>
            <Input
                type='number'
                name='bill'
                placeholder='Enter bill'
                {...bill}
            />
            <Input
                type='number'
                name='persons'
                placeholder='Enter persons'
                {...persons}
            />
            <CustomSelect
                tips={tips}
                onChange={handleSelect}
            />
            <TotalBill>Total: {total}$</TotalBill>
            <Button isDisabled={isDisabled} />
        </StyledForm>
    )
}
