import React from 'react';
import { Flex, Text } from 'rebass';

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

export default MenuItem;