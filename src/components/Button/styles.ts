import styled from 'styled-components';

const StyledButton = styled.button.attrs(({ disabled }) => ({
    disabled: disabled,
}))`
    width: 100%;
    padding: 13px 0;

    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.5px;

    background-color: #2ED2C9;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    border: none;
    color: #fff;

    cursor: pointer;
`

export { StyledButton }