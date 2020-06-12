import React from 'react';
import { Flex, Text } from 'rebass';
import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(_Link)`
  text-decoration: none;
`

type MenuItemProps = {
  icon: React.ReactNode,
  label: string,
}
const MenuItem = ({ icon, label, to }: MenuItemProps) => {
  return (
    <Link to={to}>
      <Flex flexDirection='column' mt='40px'>
        {icon}
        <Text color='#FFF5F5' fontSize='11px' mt='10px'>
          {label}
        </Text>
      </Flex>
    </Link>
  );
};

export default MenuItem;