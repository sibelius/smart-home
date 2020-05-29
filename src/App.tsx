import React from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import yoga from './img/yoga-small.jpg';
import { space } from 'styled-system';

const Img = styled.img`
  max-width: 100%;
  display: block;
`;

const Background = styled.div`
  background: url(${props => props.url}) no-repeat center center fixed;
  background-size: cover;
  
  height: 100%; 
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-color: white;
  font-size:25px;
  color: #fff;
  line-height: 150px;
  text-align: center;
  border: 5px solid white;
  ${space}
`

const App = () => {
  return (
    <>
      <Background url={yoga}>
        <Flex pt='10px' justifyContent='center'>
          <Text as='p' color='white' fontSize='16px'>(11) 94046-8989</Text>
        </Flex>
        <Flex mt='100px' justifyContent='center'>
          <Circle>
            YOGA
          </Circle>
        </Flex>
        <Flex mt='80px' justifyContent='center'>
          <Text as='p' fontSize='30px' color='white'>
            Find your way to yoga lifestyle
          </Text>
        </Flex>
        <Flex mt='400px'></Flex>
      </Background>
    </>
  );
}

export default App;
