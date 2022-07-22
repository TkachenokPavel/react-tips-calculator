import styled from 'styled-components';

const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 320px;
`;

const Title = styled.h2`
    margin-bottom: 45px;;

    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.3px;

    color: #000000;
`;

const Subtitle = styled.p`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.3px;

    color: rgba(117, 108, 108, 0.57);
`;

const TotalBill = styled.p`
    align-self: start;

    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #000000;
`;



export { StyledForm, Title, Subtitle, TotalBill }