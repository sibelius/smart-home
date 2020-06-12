import logo from '../img/logo.png';
import { Flex } from 'rebass';
import RoomsIcon from '../icons/RoomsIcon';
import SecurityIcon from '../icons/SecurityIcon';
import StatisticsIcon from '../icons/StatisticsIcon';
import MembersIcon from '../icons/MembersIcon';
import BillingIcon from '../icons/BillingIcon';
import React from 'react';
import styled from 'styled-components';
import { Card } from '../ui/Card';
import { space } from 'styled-system';
import MenuItem from './MenuItem';

const Sidebar = styled(Card)`
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;  
  ${space}
`;

const SmartSidebar = () => {
  return (
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
  )
}

export default SmartSidebar