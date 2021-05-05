import React from 'react';

import { 
    BodyContainer,
    Container,
    ImageContainer,
    ImageStyled,
    DataContainer,
    InputsContainer,
    InputContainer,
    InputStyled,
    ButtonStyled
} from './style';

import rocketImg from '../../assets/Rocket launch wallpaper_ Pretty neat_.jfif';

const Register = () => {
    return (
        <BodyContainer>
            <Container>
                <ImageContainer>
                    <ImageStyled src={rocketImg} />
                </ImageContainer>
                <DataContainer>
                    <InputsContainer>
                        <h3>Registration Form</h3>
                        <InputContainer>
                            <p>Name:</p>
                            <InputStyled type="text" placeholder="Name" />
                        </InputContainer>
                        <InputContainer>
                            <p>Email:</p>
                            <InputStyled type="email" placeholder="Email" />
                        </InputContainer>
                        <InputContainer>
                            <p>Password:</p>
                            <InputStyled type="password" placeholder="Password"  />
                        </InputContainer>
                        <InputContainer>
                            <ButtonStyled>Registrar-se</ButtonStyled>
                        </InputContainer>
                    </InputsContainer>
                </DataContainer>
            </Container>
        </BodyContainer>
    )
}

export default Register;