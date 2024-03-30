import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function SendIconComponent({ disabled }: { disabled: boolean }) {
  return (
    <SendIcon sx={{ opacity: disabled === true ? 0.25 : 1 }} />
  );
}
