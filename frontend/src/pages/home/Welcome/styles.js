import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
`;

export const LandingImage = styled.div`
    img{
        width: 100%;
        opacity: 70%;
    }
`;

export const LandingText = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
        align-text: center;
        font-family: Helvetica;
        font-weight: bold;
        font-size: 30px;
    }
`;