import styled from 'styled-components';

const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 320px;

    @media (min-width: 768px) {
        min-width: 456px;
    }
`;

const Title = styled.h2`
    margin-bottom: 45px;;

    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.3px;

    color: #000000;

    @media (min-width: 768px) {
        font-size: 40px;
    }
`;

const Subtitle = styled.p`
    margin-bottom: 45px;

    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.3px;

    color: rgba(117, 108, 108, 0.57);

    @media (min-width: 768px) {
        font-size: 32px;
    }
`;

const TotalBill = styled.p`
    align-self: start;

    margin: 45px 0;

    font-weight: 700;
    font-size: 18px;
    line-height: 26px;

    color: #000000;

    @media (min-width: 420px) {
        font-size: 24px;
    }
`;



export { StyledForm, Title, Subtitle, TotalBill }