import React from 'react';
import styled from 'styled-components';
import { Card } from './ui/Card';
import PlusIcon from './icons/PlusIcon';

const MemberCardTop = styled(Card)`
  width: 250px;
  height: 315px;
  border: 4px dashed #E0E0E0;
  border-radius: 41px;
  opacity: 0.7;
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.1);
`

const MemberCardAdd = () => {
  return (
    <MemberCardTop ml='46px' mt='40px' alignItems='center' justifyContent='center'>
      <PlusIcon />
    </MemberCardTop>
  )
}

export default MemberCardAdd;