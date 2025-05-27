import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LoopIcon from '@mui/icons-material/Loop';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const StatusIndicator = ({ status }) => {
  let icon, color, label;

  switch (status) {
    case 'Completed':
      icon = <CheckCircleIcon sx={{ color: '#10b981' }} />;
      label = 'Completed';
      break;
    case 'Ongoing':
      icon = <LoopIcon sx={{ color: '#6366f1' }} />;
      label = 'Ongoing';
      break;
    case 'In review':
      icon = <VisibilityIcon sx={{ color: '#3b82f6' }} />;
      label = 'In Review';
      break;
    case 'Pending':
      icon = <HourglassBottomIcon sx={{ color: '#6b7280' }} />;
      label = 'Pending';
      break;
    default:
      icon = null;
      label = '';
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {icon}
      <Typography variant="body2" sx={{ color: 'white' }}>
        {label}
      </Typography>
    </Box>
  );
};

export default StatusIndicator;
