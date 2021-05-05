import styled from 'styled-components';

export const BodyContainer = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(250deg, #451F55, #724E91);
    height: 100vh;
`

export const Container = styled.div`
    display: flex;
    height: 80%;
    width: 45%;
    background: #ecf0f1;
    border-radius: 10px;
`

export const ImageContainer = styled.div`
    height: 100%;
    width: 50%;
    border-radius: 15px 0 0 15px;
`

export const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
`

export const DataContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 50%;
    border-radius: 0px 10px 10px 0px;
`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 90%;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 15%;
`
export const InputStyled = styled.input`
    margin-top: 5px;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    height: 70px;
    border: 1px solid #bdc3c7;
`

export const ButtonStyled = styled.button`
    padding: 15px;
    cursor: pointer;
    border-radius: 8px;
    background: #8e44ad;
    color: white;
    width: 150px;
    border: none;
    outline: none;
`