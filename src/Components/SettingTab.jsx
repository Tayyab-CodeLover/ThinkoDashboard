import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MyDetails from '../Setting/MyDetails';
import { styled } from '@mui/material/styles';

const CustomTab = styled(Tab)(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : 'gray',
  fontWeight: selected ? 'bold' : 'normal',
}));

export default function SettingTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
        style: {
          display: 'none'
        }
      }}>
          <CustomTab label="My Details"  />
          <CustomTab label="Profile" />
          <CustomTab label="Password"  />
          <CustomTab label="Team"  />
          <CustomTab label="Email"  />
          <CustomTab label="Notification"/>
        </Tabs>
      </Box>

      <Box >
        {value === 0 && <MyDetails/>}        
      </Box>
    </Box>
  );
}
