import { ChangeEvent, useState } from "react"
import { IUseInput } from "../types";


export const useInput = (initialValue: string = ''): IUseInput => {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange
    }
}