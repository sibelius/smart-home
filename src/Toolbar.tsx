import { Flex } from 'rebass';
import EngineIcon from './icons/EngineIcon';
import BellIcon from './icons/BellIcon';
import ProfileIcon from './icons/ProfileIcon';
import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { space } from 'styled-system';

const SearchTextField = styled(TextField)`   
  ${space}
  .MuiOutlinedInput-root {
    height: 34px;
    border-radius: 30px;
  }
`;

const Toolbar = () => {
  return (
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
  )
}

export default Toolbar;