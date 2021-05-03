import styled from 'styled-components';

export const BodyContainer = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(150deg, #2f3640, #5f27cd);
`;

export const Container = styled.div`
    display: flex;
    width: 60%;
    height: 85%;
    background: white;
`;

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.size};
    height: 100%;
    background: linear-gradient(150deg, ${props => props.background ? "#273c75" : ""}, ${props => props.background ? "#2e86de" : ""})
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;

    img{
        width: 50%
    }
`;

export const DescribeContainer = styled.div`
    text-align: center;
    font-size: 10px;
    height: 20%;
    width: 80%;
    color: white;
`;