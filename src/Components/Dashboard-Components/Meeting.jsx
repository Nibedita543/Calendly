import { Box, Tab } from '@mui/material'
import React from 'react'
import Header from '../Main-Components/Header'
import DropdownTextBox from '../Main-Components/DropdownTextBox'
import MeetingTabs from './MeetingComponents/MeetingTabs'

export default function Meeting() {
  return (
    <Box>
      <Header title={"Meeting"} />
        <DropdownTextBox/>
        <MeetingTabs/>
    </Box>
  )
}
