import Select from 'react-select';
import { ITipsOption } from '../../types';
import { customStyles } from "./styles";

interface IProps {
    tips: ITipsOption,
    onChange: (newValue: ITipsOption | null) => void
}

export const CustomSelect = ({ tips, onChange }: IProps) => {
    const options: ITipsOption[] = [
        { value: 10, label: '10%' },
        { value: 15, label: '15%' },
        { value: 20, label: '20%' }
    ]

    return (
        <Select
            styles={customStyles}
            options={options}
            defaultValue={tips}
            onChange={onChange}
            isMulti={false}
        />
    )
}
