import { Typography } from '@mui/material'
import React from 'react'
import { VscQuestion } from 'react-icons/vsc';

export default function MeetingHeader() {
  return (
    <Typography variant="h6" fontWeight="600" fontSize={"24px"}>
      Meetings
      <VscQuestion />
    </Typography>
  );
}
