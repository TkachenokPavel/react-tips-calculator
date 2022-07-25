import Select from 'react-select';
import { IOption } from '../../types';
import { customStyles } from "./styles";

interface IProps {
    value: IOption | undefined | '',
    options: IOption[],
    isSearchable: boolean,
    onChange: (newValue: any) => void
}

export const CustomSelect = ({ value, options, isSearchable, onChange }: IProps) => {
    return (
        <Select
            value={value}
            styles={customStyles}
            options={options}
            isSearchable={isSearchable}
            onChange={onChange}
        />
    )
}
