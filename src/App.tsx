import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { Card } from './ui/Card';
import Members from './members/Members';
import Toolbar from './Toolbar';
import SmartSidebar from './sidebar/SmartSidebar';

const Content = styled(Card)`
  border-radius: 60px;
  position: relative;
  right: 50px;
`;

const App = () => {
  return (
    <Flex bg='#E7E7E7'>
      <Flex flex={1} alignItems='center' justifyContent='center' mt='100px' mb='100px'>
        <Card borderRadius='60px' height='905px' width='1200px' bg='#FFFFFF'>
          <SmartSidebar />
          <Content bg='white' width='100%' pt='45px' pl='65px' pr='65px'>
            <Flex flex={1} flexDirection='column'>
              <Toolbar />
              <Members />
            </Flex>
          </Content>
        </Card>
      </Flex>
    </Flex>
  );
}

export default App;
