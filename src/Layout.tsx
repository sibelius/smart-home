import { Flex } from 'rebass';
import { Card } from './ui/Card';
import SmartSidebar from './sidebar/SmartSidebar';
import Toolbar from './Toolbar';
import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import styled from 'styled-components';

const Content = styled(Card)`
  border-radius: 60px;
  position: relative;
  right: 50px;
`;

type Props = RouteConfigComponentProps;
const Layout = ({ route }: Props) => {
  return (
    <Flex bg='#E7E7E7'>
      <Flex flex={1} alignItems='center' justifyContent='center' mt='100px' mb='100px'>
        <Card borderRadius='60px' height='905px' width='1200px' bg='#FFFFFF'>
          <SmartSidebar />
          <Content bg='white' width='100%' pt='45px' pl='65px' pr='65px'>
            <Flex flex={1} flexDirection='column'>
              <Toolbar />
              {renderRoutes(route.routes)}
            </Flex>
          </Content>
        </Card>
      </Flex>
    </Flex>
  )
}

export default Layout;