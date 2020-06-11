import React from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import { space, borders, color, background } from 'styled-system';
import logo from './img/logo.png';
import { TextField } from '@material-ui/core';

import RoomsIcon from './icons/RoomsIcon';
import SecurityIcon from './icons/SecurityIcon';
import StatisticsIcon from './icons/StatisticsIcon';
import MembersIcon from './icons/MembersIcon';
import BillingIcon from './icons/BillingIcon';
import EngineIcon from './icons/EngineIcon';
import BellIcon from './icons/BellIcon';
import ProfileIcon from './icons/ProfileIcon';
import ProfileCard from './icons/ProfileCard';

const Card = styled(Flex)`
  ${borders}
  ${color}
  ${background}
`;

const Sidebar = styled(Card)`
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
`;

const Content = styled(Card)`
  border-radius: 60px;
  position: relative;
  right: 50px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;  
  ${space}
`;

const SearchTextField = styled(TextField)`   
  ${space}
  .MuiOutlinedInput-root {
    height: 34px;
    border-radius: 30px;
  }
`;

const MemberCardTop = styled(Card)`
  box-shadow: 0px 4px 40px rgba(238, 119, 127, 0.36);
`

const MemberCardBottom = styled(Card)`
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

type MenuItemProps = {
  icon: React.ReactNode,
  label: string,
}
const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <Flex flexDirection='column' mt='40px'>
      {icon}
      <Text color='#FFF5F5' fontSize='11px' mt='10px'>
        {label}
      </Text>
    </Flex>
  );
};

const App = () => {
  return (
    <Flex bg='#E7E7E7'>
      <Flex flex={1} alignItems='center' justifyContent='center' mt='100px' mb='100px'>
        <Card borderRadius='60px' height='905px' width='1200px' bg='#FFFFFF'>
          <Sidebar bg='#65BDC0' width='140px' p='10px' flexDirection='column'>
            <Logo src={logo} mt='30px' />
            <Flex mt='100px' ml='10px' flexDirection='column'>
              <MenuItem icon={<RoomsIcon />} label='Rooms' />
              <MenuItem icon={<SecurityIcon />} label='Security' />
              <MenuItem icon={<StatisticsIcon />} label='Statistics' />
              <MenuItem icon={<MembersIcon />} label='Members' />
              <MenuItem icon={<BillingIcon />} label='Billing' />
            </Flex>
          </Sidebar>
          <Content bg='white' width='100%' pt='45px' pl='65px' pr='65px'>
            <Flex flex={1} flexDirection='column'>
              <Flex justifyContent='flex-end' alignItems='center'>
                <SearchTextField
                  placeholder='Search'
                  variant='outlined'
                  />
                <Flex ml='50px' alignItems='center'>
                  <EngineIcon ml='9px' mr='9px' />
                  <BellIcon ml='9px' mr='9px' />
                  <ProfileIcon ml='9px' mr='9px' />
                </Flex>
              </Flex>
              <Flex mt='20px' flexDirection='column'>
                <Text fontSize='48px'>Members</Text>
                <Flex mt='25px'>
                  <MemberCardTop mt='37'
                        backgroundColor='#EE777F' borderRadius='40px'
                        width='250px'
                        height='315px'
                        flexDirection='column'
                  >
                    <Flex
                      alignItems='center'
                      flexDirection='column'
                      mt='30px'
                      mr='20px'
                      ml='20px'
                    >
                      <ProfileCard color='#ffffff' />
                      <Text mt='20px' fontSize='24px' color='#fff'>Annie Gulberg</Text>
                      <Text mt='5px' fontSize='15px' color='#fff'>Owner</Text>
                    </Flex>
                    <MemberCardBottom
                      flexDirection='column'
                      backgroundColor='#FFF5F5'
                      flex={1}
                      pl='16px'
                      mt='10px'
                    >
                      <Text mt='20px' color='#1D2343' fontSize='16px'>Status: At home</Text>
                      <Text mt='10px' color='#1D2343' fontSize='16px'>Bedroom: 1</Text>
                    </MemberCardBottom>
                  </MemberCardTop>
                </Flex>
              </Flex>
            </Flex>
          </Content>
        </Card>
      </Flex>
    </Flex>
  );
}

export default App;
