import React from 'react';

import { 
    BodyContainer,
    Container,
    ContainerItem,
    ImageContainer,
    DescribeContainer
} from './style';

import rocketImg from '../../assets/rocket.svg';

const Login = () => {
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
                    
                </ContainerItem>
            </Container>
        </BodyContainer>
    )
}

export default Login;