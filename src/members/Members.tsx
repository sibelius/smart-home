import { Flex, Text } from 'rebass';
import MemberCard from './MemberCard';
import MemberCardAdd from './MemberCardAdd';
import React from 'react';

const Members = () => {
  return (
    <Flex mt='20px' flexDirection='column'>
      <Text fontSize='48px'>Members</Text>
      <Flex mt='25px' flexWrap='wrap'>
        <MemberCard
          backgroundColor='#EE777F'
          name='Annie Gulberg'
          title='Owner'
          status='Status: At home'
          bedroom='Bedroom: 1'
          ml='46px'
        />
        <MemberCard
          backgroundColor='#65BDC0'
          name='John Gulberg'
          title='Owner 2'
          status='Status: At home'
          bedroom='Bedroom: 1'
          ml='46px'
        />
        <MemberCard
          backgroundColor='#1D2343'
          name='Marie Gulberg'
          title='Owner 3'
          status='Status: Out'
          bedroom='Bedroom: 2'
          ml='46px'
        />
        <MemberCardAdd />
      </Flex>
    </Flex>
  );
}

export default Members;