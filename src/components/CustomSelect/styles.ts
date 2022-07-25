export const customStyles: any = {
    container: (provided: any, state: any) => ({
        ...provided,
        width: '100%',
    }),
    control: (provided: any) => ({
        ...provided,
        padding: '20px 0',

        backgroundColor: '#fff',
        color: '#756C6C',
        border: 'none',
        borderRadius: '30px',

        cursor: 'pointer',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        color: '#756C6C',
        marginRight: '27px'
    }),
    indicatorSeparator: (provided: any, state: any) => ({
        display: 'none'
    }),
    singleValue: (provided: any, state: any) => ({
        ...provided,
        paddingLeft: '55%',
        fontSize: '18px',
        color: '#756C6C'
    }),
}
