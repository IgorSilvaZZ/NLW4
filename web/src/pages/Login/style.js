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

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 95%;
    width: 95%;

    #header{
        height: 10%;
        width: 95%;
        text-align: center;
        font-size: 25px;
        font-weight: 500; 
    }

    a{
        color: #bdc3c7;
        text-decoration: none;
        font-size: 10px;
    }

`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 95%;

    #inputContainer{
        display: flex;
        flex-direction: column;
        height: 25%;
        width: 95%;
        margin-bottom: 5px;

        p{
            color: #bdc3c7;
            font-size: 12px;
        }

    }

`;

export const InputStyled = styled.input`
    height: 50%;
    border: none;
    border-bottom: 1px solid #bdc3c7;
    outline: none;
`; 

export const ButtonStyled = styled.button`
    width: 40%;
    padding: 8px;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    border: none;
    outline: none;
    background: #7f8c8d;
    margin-bottom: 40px;
    cursor: pointer;
`;