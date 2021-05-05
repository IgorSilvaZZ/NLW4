import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { 
    BodyContainer,
    Container,
    ContainerItem,
    ImageContainer,
    DescribeContainer,
    FormContainer,
    DivForm,
    InputStyled,
    ButtonStyled
} from './style';

import rocketImg from '../../assets/rocket.svg';

const Login = () => {

    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = useCallback(() => {
        //Sumbit Login in api
        const data = {
            email: email.current?.value,
            password: password.current?.value
        }
        console.log(data);
    },[])

    return (
        <BodyContainer>
            <Container>
                <ContainerItem size={"55%"} background>
                    <ImageContainer>
                        <img src={rocketImg} />
                    </ImageContainer>
                    <DescribeContainer>
                        <h1>RocketSeat</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laudantium beatae animi et quasi illum distinctio perspiciatis repellendus asperiores voluptate, a at modi vero, id soluta nulla eaque, obcaecati earum.</p>
                    </DescribeContainer>
                </ContainerItem>
                <ContainerItem size={"45%"}>
                    <FormContainer>
                        <div id="header">
                            <p>NPS Calculator</p>
                        </div>
                        <DivForm>
                            <div id="inputContainer">
                                <p>Email</p>
                                <InputStyled ref={email} type="email" />
                            </div>
                            <div id="inputContainer">
                                <p>Password</p>
                                <InputStyled ref={password} type="password" />
                            </div>
                            <ButtonStyled onClick={handleSubmit}>Entrar</ButtonStyled>
                            <Link to="/register">Criar sua conta</Link>
                        </DivForm>
                    </FormContainer>
                </ContainerItem>
            </Container>
        </BodyContainer>
    )
}

export default Login;