import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Typography } from '@mui/material';

export default function Notifications() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleClick}
            >
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Box sx={{ padding: '5px 20px', width:'350px' }}>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ fontWeight: '550' }}>Notification panel</Typography>
                        <Typography color='gray' sx={{ fontSize: '13px' }}>You have 2 notifications</Typography>
                    </Box>
                    <Divider sx={{ marginBottom: '10px' }} />
                    <Typography color='gray' sx={{ textTransform: 'uppercase', fontSize: '10px' }}>New</Typography>
                    <MenuItem onClick={handleClose}>
                        <Box sx={{ display: 'flex', alignItems: 'start', gap:'15px' }}>
                            <NotificationsIcon />
                            <Box >
                                <Typography sx={{ fontSize: '13px', whiteSpace:'normal', width:'80%'}}><b>Your order is placed</b> waiting for shipping</Typography>
                                <Typography sx={{ fontSize: '10px', marginTop:'5px', display:'flex',alignItems:'center' }}><AccessTimeIcon sx={{fontSize:'10px',marginRight:'2px'}}/>  a year</Typography>
                            </Box>

                        </Box>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Box sx={{ display: 'flex', alignItems: 'start', gap:'15px' }}>
                            <NotificationsIcon />
                            <Box >
                                <Typography sx={{ fontSize: '13px', whiteSpace:'normal', width:'80%'}}><b>Teresa Luettgen</b> answered to your comment on the Minimal</Typography>
                                <Typography sx={{ fontSize: '10px', marginTop:'5px', display:'flex',alignItems:'center' }}><AccessTimeIcon sx={{fontSize:'10px',marginRight:'2px'}}/>  2 year</Typography>
                            </Box>

                        </Box>
                    </MenuItem>
                </Box>
            </Menu>

        </div>
    );
}
