import { Flex, Text } from 'rebass';
import ProfileCard from './icons/ProfileCard';
import React from 'react';
import styled from 'styled-components';
import { Card } from './ui/Card';

const MemberCardTop = styled(Card)`
  box-shadow: 0px 4px 40px rgba(238, 119, 127, 0.36);
`

const MemberCardBottom = styled(Card)`
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

type Props = {
  backgroundColor: string,
  name: string,
  title: string,
  status: string,
  bedroom: string,
}
const MemberCard = (props: Props) => {
  const {
    backgroundColor = '#EE777F',
    name,
    title,
    status,
    bedroom,
    ml,
  } = props;

  return (
    <MemberCardTop mt='37'
                   backgroundColor={backgroundColor}
                   borderRadius='40px'
                   width='250px'
                   height='315px'
                   flexDirection='column'
                   ml={ml}
    >
      <Flex
        alignItems='center'
        flexDirection='column'
        mt='30px'
        mr='20px'
        ml='20px'
      >
        <ProfileCard color='#ffffff' />
        <Text mt='20px' fontSize='24px' color='#fff'>{name}</Text>
        <Text mt='5px' fontSize='15px' color='#fff'>{title}</Text>
      </Flex>
      <MemberCardBottom
        flexDirection='column'
        backgroundColor='#FFF5F5'
        flex={1}
        pl='16px'
        mt='10px'
      >
        <Text mt='20px' color='#1D2343' fontSize='16px'>{status}</Text>
        <Text mt='10px' color='#1D2343' fontSize='16px'>{bedroom}</Text>
      </MemberCardBottom>
    </MemberCardTop>
  )
}

export default MemberCard;