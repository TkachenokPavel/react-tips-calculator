import { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button'
import { StyledForm } from './styles'
import { Title, Subtitle, TotalBill } from "./styles";
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { IOption } from '../../types';


const options: IOption[] = [
    { value: 10, label: '10%' },
    { value: 15, label: '15%' },
    { value: 20, label: '20%' }
]

export const Form = () => {
    const [total, setTotal] = useState<string>('0.00');
    const [selectedOption, setSelectedOption] = useState<number>(10);
    const [bill, setBill] = useState<string>('');
    const [persons, setPersons] = useState<string>('');
    const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

    const handleBill = (e: { target: { value: string; } }): void => {
        const value = e.target.value.replace(/\D/g, "")
        setBill(value)
    }
    const handlePersons = (e: { target: { value: string; } }): void => {
        const value = e.target.value.replace(/\D/g, "")
        setPersons(value)
    }

    const getValue = () => {
        return selectedOption ? options.find(currentOption => currentOption.value === selectedOption) : ''
    }

    const handleOptionChange = (newValue: any): void => {
        setSelectedOption(newValue.value)
    }

    const calculateTips = (): string => {
        const billNumber = +bill,
            personsNumber = +persons,
            percent = selectedOption,
            totalBill = ((billNumber * percent) / 100) * personsNumber + billNumber;
        return totalBill.toFixed(2);
    };

    const handleButton = (): void => {
        setTotal(calculateTips())
    }

    useEffect(() => {
        bill && persons ? setIsButtonActive(false) : setIsButtonActive(true)
    }, [bill, persons])


    return (
        <StyledForm>
            <Title>Welcome to App</Title>
            <Subtitle>Let’s go calculate your tips</Subtitle>
            <Input
                value={bill}
                type='text'
                placeholder='Enter bill'
                onChange={handleBill}
            />
            <Input
                value={persons}
                type='text'
                placeholder='Enter persons'
                onChange={handlePersons} />
            <CustomSelect
                value={getValue()}
                options={options}
                isSearchable={false}
                onChange={handleOptionChange}
            />
            <TotalBill>Total: {total}$</TotalBill>
            <Button isButtonActive={isButtonActive} onClick={handleButton} />
        </StyledForm>
    )
}
