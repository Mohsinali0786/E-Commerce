import * as React from 'react';
import Grid from 'antd/lib/card/Grid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
import BoyRoundedIcon from '@mui/icons-material/BoyRounded';
import GirlRoundedIcon from '@mui/icons-material/GirlRounded';
// import { Grid } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import Divider from '@mui/material/Divider';

// import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import Model from './model'

export default function PrimarySearchAppBar() {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    console.log("isMobileMenuOpen===>", isMobileMenuOpen)

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <GirlRoundedIcon fontSize='large' />
                    </Badge>
                </IconButton>

                <Link to='/' className='mlinkstyling'>Women</Link>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge color="error">
                        <BoyRoundedIcon fontSize='large' />
                    </Badge>
                </IconButton>

                <Link to='/Men' className='mlinkstyling'>Men</Link>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge color="error">
                        <FamilyRestroomIcon fontSize='large' />
                    </Badge>
                </IconButton>
                <Link to='/Kids' className='mlinkstyling'>Kids</Link>
            </MenuItem>
            <Divider />
            <div style={{ display: 'flex' }}>
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Model />


                    </IconButton>
                </MenuItem>
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <AttachMoneyRoundedIcon />
                    </IconButton>
                </MenuItem>
            </div>


        </Menu >
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Link to='/' className='linkstyling'>Women</Link>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Link to='/Men' className='linkstyling'>Men</Link>

                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Link to='/Kids' className='linkstyling'>Kids</Link>

                        </IconButton>
                    </Box>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Model />

                            {/* <LocalGroceryStoreOutlinedIcon /> */}

                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <AttachMoneyRoundedIcon />

                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
