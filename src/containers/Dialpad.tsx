import { Box, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import NumberInput from '../components/NumberInput';
import { useAppSelector } from '../redux/hooks';
import SendIconComponent from '../components/SendIcon';
import UseWhatsapp from '../hooks/useWhatsAppAPI';

const DialpadContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  width: 60vw;

`;

function Dialpad() {
  const value = useAppSelector((state) => state.phoneNumber.value);
  return (
    <DialpadContainer>
      <NumberInput />
      <Box>
        <Button onClick={() => { UseWhatsapp(value, 'Hello!'); }}>
          <SendIconComponent disabled={!(value.length > 0)} />
        </Button>
      </Box>
    </DialpadContainer>
  );
}
export default Dialpad;
