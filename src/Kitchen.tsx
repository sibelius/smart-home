import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import { Card } from './ui/Card';
import TemperatureIcon from './icons/TemperatureIcon';
import LightningIcon from './icons/LightningIcon';
import HumidityIcon from './icons/HumidityIcon';

const CardIndicator = styled(Card)`
  background: #FFFFFF;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.14);
  border-radius: 30px;
  padding: 20px;
  height: 200px;
`;

const IndicatorValue = styled(Card)`
  width: 76px; 
  border-radius: 25px;
  box-shadow: 0px -6px 60px rgba(29, 35, 67, 0.14);
`;

const Indicator = styled(Card)` 
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  flex: 1;  
  align-self: flex-end;
  align-items: center;
  justify-content: center; 
`;

const Kitchen = () => {
  return (
    <Flex mt='20px' flexDirection='column'>
      <Text fontSize='48px'>Kitchen</Text>
      <Flex mt='25px'>
        <CardIndicator>
          <Flex flexDirection='column'>
            <Text>Room's</Text>
            <Text>Temperature</Text>
            <Text fontSize='26px' lineHeight='43px' letterSpacing='0.035em'>+ 23.5<sup>o</sup>C</Text>
            <Text fontSize='26px' lineHeight='43px' letterSpacing='0.035em'>+ 74.3<sup>o</sup>F</Text>
          </Flex>
          <Flex ml='20px'>
            <IndicatorValue bg='#FFE6E6'>
              <Indicator bg='#EE777F' height='60%'>
                <TemperatureIcon />
              </Indicator>
            </IndicatorValue>
          </Flex>
        </CardIndicator>
        <CardIndicator ml='30px'>
          <Flex flexDirection='column'>
            <Text>Room's</Text>
            <Text>Humidity</Text>
            <Text fontSize='26px' lineHeight='43px' letterSpacing='0.035em'>40 %</Text>
          </Flex>
          <Flex ml='20px'>
            <IndicatorValue bg='rgba(202, 238, 239, 0.51)'>
              <Indicator bg='#65BDC0' height='40%'>
                <HumidityIcon />
              </Indicator>
            </IndicatorValue>
          </Flex>
        </CardIndicator>
        <CardIndicator ml='30px'>
          <Flex flexDirection='column'>
            <Text>Room's</Text>
            <Text>Lightning</Text>
            <Text fontSize='26px' lineHeight='43px' letterSpacing='0.035em'>86 %</Text>
          </Flex>
          <Flex ml='20px'>
            <IndicatorValue bg='rgba(197, 202, 227, 0.71)'>
              <Indicator bg='#1D2343' height='80%'>
                <LightningIcon />
              </Indicator>
            </IndicatorValue>
          </Flex>
        </CardIndicator>
      </Flex>
    </Flex>
  )
}

export default Kitchen;