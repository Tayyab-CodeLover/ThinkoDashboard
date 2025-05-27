import React from 'react';
import { Box, Typography } from '@mui/material';

const SignalStrength = ({ priority }) => {
  let level = 0;
  let color = '#ccc';

  switch (priority) {
    case 'Minor':
      level = 1;
      color = 'green';
      break;
    case 'Moderate':
      level = 2;
      color = 'orange';
      break;
    case 'Critical':
      level = 3;
      color = 'red';
      break;
    default:
      level = 0;
      color = '#ccc';
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '4px'   }}>
      {[1, 2, 3].map((bar) => (
        <Box
          key={bar}
          sx={{
            width: 3,
            height: `${5 * bar}px`,
            backgroundColor: bar <= level ? color : '#ccc',
            borderRadius: '2px',
          }}
        />
      ))}
        <Typography variant="body2" sx={{ color: 'white', marginLeft:'5px' }}>
                {priority}
            </Typography>
    </Box>
  );
};

export default SignalStrength;
