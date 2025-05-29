import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';

const Drawer = ({open}) => {
    const navigate = useNavigate();
    return (
        <div>
            <List>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Dashboard"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/products") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent:  'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Products"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/calender") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent:  'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr:  'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Calender"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                            
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/barchart") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent:  'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr:  'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Bar Chart"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                            
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/timeline") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr:  'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Timeline"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                            
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/book") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr:  'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Task details"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                            
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/setting") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Setting"
                            sx={{marginLeft:'5px',opacity: open ? 1 : 0,}}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default Drawer
