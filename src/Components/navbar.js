import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import BoyRoundedIcon from '@mui/icons-material/BoyRounded';
import GirlRoundedIcon from '@mui/icons-material/GirlRounded';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Divider from '@mui/material/Divider';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import Model from './model'
import Form from '../Container/form'
import { useNavigate } from 'react-router-dom';
export default function PrimarySearchAppBar() {
    const Navigate = useNavigate();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
            <Link to='/' className='mlinkstyling'>
                <MenuItem>
                    <Badge className='Mob-navbaricons' color="error">
                        <GirlRoundedIcon fontSize='large' />
                    </Badge>
                    <Badge color="error">
                        Home
                    </Badge>
                </MenuItem>
            </Link>

            <Link to='/women' className='mlinkstyling'>
                <MenuItem>
                    <Badge className='Mob-navbaricons' color="error">
                        <GirlRoundedIcon fontSize='large' />
                    </Badge>
                    <Badge color="error">
                        Women
                    </Badge>
                </MenuItem>
            </Link>
            <Link to='/men' className='mlinkstyling'>
                <MenuItem>
                    <Badge className='Mob-navbaricons' color="error">
                        <BoyRoundedIcon fontSize='large' />
                    </Badge>
                    <Badge color="error">
                        Men
                    </Badge>
                </MenuItem>
            </Link>
            <Link to='/kids' className='mlinkstyling'>
                <MenuItem>
                    <Badge className='Mob-navbaricons' color="error">
                        <FamilyRestroomIcon fontSize='large' />
                    </Badge>
                    <Badge color="error">
                        Kids
                    </Badge>
                </MenuItem>
            </Link>
            <Divider />
            {/* <div style={{ display: 'flex' }}>
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
            </div> */}


        </Menu >
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
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
                            <Link to='/' className='linkstyling'>Home</Link>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Link to='/women' className='linkstyling'>Women</Link>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Link to='/men' className='linkstyling'>Men</Link>

                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Link to='/kids' className='linkstyling'>Kids</Link>

                        </IconButton>
                    </Box>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Model style={{ backgeoundColor: '#00E2E6' }} />

                            {/* <LocalGroceryStoreOutlinedIcon /> */}

                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={() => Navigate('/form')}
                        >
                            <AttachMoneyRoundedIcon />
                            {/* <Form /> */}

                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
}
