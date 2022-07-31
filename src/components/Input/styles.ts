import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 68px;
    margin-bottom: 15px;

    font-size: 18px;
    line-height: 26px;
    text-align: center;

    border: none;
    border-radius: 30px;
    color: rgba(117, 108, 108, 0.6);

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none
    }
`

export { StyledInput }