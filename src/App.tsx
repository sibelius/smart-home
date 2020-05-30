import React from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import { space, borders } from 'styled-system';
import logo from './img/logo.png';

import { ReactComponent as RoomsIcon } from './icons/rooms.svg';
import { ReactComponent as SecurityIcon } from './icons/security.svg';
import { ReactComponent as StatisticsIcon } from './icons/statistics.svg';
import { ReactComponent as MembersIcon } from './icons/members.svg';
import { ReactComponent as BillingIcon } from './icons/billing.svg';

const Card = styled(Flex)`
  ${borders}
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

type MenuItemProps = {
  icon: React.ReactNode,
  label: string,
}
const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <Flex flexDirection='column' mt='40px'>
      <RoomsIcon />
      <Text color='#FFF5F5' fontSize='11px' mt='10px'>
        Rooms
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
              <Flex flexDirection='column' mt='40px'>
                <RoomsIcon />
                <Text color='#FFF5F5' fontSize='11px' mt='10px'>
                  Rooms
                </Text>
              </Flex>
              <Flex flexDirection='column' mt='40px'>
                <SecurityIcon />
                <Text color='#FFF5F5' fontSize='11px' mt='10px'>
                  Security
                </Text>
              </Flex>
              <Flex flexDirection='column' mt='40px'>
                <StatisticsIcon />
                <Text color='#FFF5F5' fontSize='11px' mt='10px'>
                  Statistics
                </Text>
              </Flex>
              <Flex flexDirection='column' mt='40px'>
                <MembersIcon />
                <Text color='#FFF5F5' fontSize='11px' mt='10px'>
                  Members
                </Text>
              </Flex>
              <Flex flexDirection='column' mt='40px'>
                <BillingIcon />
                <Text color='#FFF5F5' fontSize='11px' mt='10px'>
                  Billing
                </Text>
              </Flex>
            </Flex>
          </Sidebar>
          <Content bg='white' width='100%'>
            <span>Content</span>
          </Content>
        </Card>
      </Flex>
    </Flex>
  );
}

export default App;
