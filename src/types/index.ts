export interface ITipsOption {
    readonly value: number,
    readonly label: string
}

export interface IUseInput {
    readonly value: string;
    readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
