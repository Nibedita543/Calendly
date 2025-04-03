import { Box, Tab } from '@mui/material'
import React from 'react'
import MeetingHeader from './MeetingComponents/MeetingHeader'
import DropdownTextBox from './MeetingComponents/DropdownTextBox'
import MeetingTabs from './MeetingComponents/MeetingTabs'

export default function Meeting() {
  return (
    <Box>
        <MeetingHeader/>
        <DropdownTextBox/>
        <MeetingTabs/>
    </Box>
  )
}
