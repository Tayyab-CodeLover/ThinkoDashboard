import * as React from 'react';
import { styled, useTheme, alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InputBase from '@mui/material/InputBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Notifications from './Notifications';
import logo from "../asset/logo.png"
import AccountMenu from './AccountMenu'
import Messages from './Messages';
import Zoom from '@mui/material/Zoom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from './CustomThemeProvider'
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Modified AppBar to always be full width
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    width: '100%',
    transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideNav() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMobileDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { toggleColorMode, mode } = React.useContext(ColorModeContext);

    const drawer = (
        <div>
            <List>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Dashboard"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/products") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Products"
                            sx={{ opacity: open ? 1 : 0 }}
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
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Calender"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/barchart") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Bar Chart"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                 <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/timeline") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="timeline"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/book") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="task details"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/setting") }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="setting"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" elevation={0}>
                <Toolbar sx={{ paddingLeft: { xs: 1, md: 2 } }}>
                    {/* Desktop menu button - show when drawer is closed */}
                    {!open && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                            sx={{
                                marginRight: 2,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Desktop drawer close button - show when drawer is open */}
                    {open && (
                        <IconButton
                            color="inherit"
                            aria-label="close drawer"
                            edge="start"
                            onClick={handleDrawerClose}
                            sx={{
                                marginRight: 2,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    )}

                    {/* Mobile menu button - show when mobile drawer is closed */}
                    {!mobileOpen && (
                        <IconButton
                            color="inherit"
                            aria-label="open mobile drawer"
                            edge="start"
                            onClick={handleMobileDrawerToggle}
                            sx={{
                                marginRight: 2,
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Mobile drawer close button - show when mobile drawer is open */}
                    {mobileOpen && (
                        <IconButton
                            color="inherit"
                            aria-label="close mobile drawer"
                            edge="start"
                            onClick={handleMobileDrawerToggle}
                            sx={{
                                marginRight: 2,
                                display: { xs: 'flex', md: 'none', position: 'absolute', top: '100%', left: '225px' }
                            }}
                        >
                            <Zoom in={mobileOpen} style={{ transitionDelay: mobileOpen ? '100ms' : '0ms' }}>
                                <Box sx={{ borderRadius: '50%', backgroundColor: theme.palette.background.default, display: 'flex', alignItems: 'center', border: '0.01px solid gray', padding: '3px' }}>
                                    <MenuIcon />
                                </Box>
                            </Zoom>
                        </IconButton>
                    )}

                    <Box sx={{marginLeft:{lg:'30%'}, width:'500px'}}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>

                        <Messages />
                        <Notifications />
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Desktop drawer */}
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <DrawerHeader>
                    <img src={logo || "/placeholder.svg"} alt="logo" width={50} height={50} style={{ marginRight: '100px' }} />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {drawer}
            </Drawer>

            {/* Mobile drawer */}
            <MuiDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleMobileDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <DrawerHeader>
                    <img src={logo} alt="logo" width={50} height={50} style={{ marginRight: '100px' }} />
                    <IconButton onClick={handleMobileDrawerToggle}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {drawer}
            </MuiDrawer>
        </Box>
    );
}