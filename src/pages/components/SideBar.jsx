import React, {useEffect, useState} from 'react';
import styles from '../../styles/SideBar.module.css'
import Paper from '@mui/material/Paper'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Icon from '@mui/material/Icon'
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import {
    themeSelect,
    changeTheme,
  } from '../../features/theme/themeSlice';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SideBar() {

    //Mui material scripts:
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = useState('');

    //script
    const dispatch = useDispatch();

    const [currentTab, setCurrentTab] = useState(); //novo-cliente or lista-de-clientes
    function handleTabClick(tab){
        setCurrentTab(tab);
        router.push(`/${tab}`);
    }

    //router configs
    const router = useRouter()
    if(typeof window !== 'undefined'){

        console.log('a');

        const path = window.location.pathname;

        useEffect(() => { 
            if (path === '/novo-cliente' || path === '/anime-weekly/novo-cliente') {
                setCurrentTab('novo-cliente');
                setValue(0) //bottom bar mobile
            } 
            else if(path === '/lista-de-clientes' || path === '/anime-weekly/lista-de-clientes'){
                setCurrentTab('lista-de-clientes');
                setValue(1) //bottom bar mobile
            }
            console.log('b');
        }, [path]);
    }

    return (
    <>
        <Paper className={styles.sideBarContainer} sx={{borderRadius: '0'}}>
                <div className={styles.MenuContainer}>
                    <IconButton type="button" sx={{ p: "10px", mr: '10px' }}  onClick={handleClick}>
                    <MenuIcon sx={{ height: "26px", width: "26px" }} />
                    </IconButton>
                    <div className={styles.logoContainer}>
                    {/*  <img className={styles.logo} src={useSelector(themeSelect) === 'dark' ?  '' : ''} alt="Pakman-logo" /> */}
                </div>

                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    >
                    <MenuItem onClick={() => {dispatch(changeTheme()); handleClose()}}>
                        <ListItemIcon>
                            <DarkModeIcon/>
                        </ListItemIcon>
                        <ListItemText>Appearance: {useSelector(themeSelect) === 'dark' ?  'Dark mode': 'Light mode' }</ListItemText>
                    </MenuItem>
                    </Menu>
                </div>
                <div className={styles.tabsContainer}>
                    <div className={`${styles.tab} ${currentTab === 'novo-cliente' ? styles.tabActive : ''}`} onClick={() => handleTabClick('novo-cliente')}>
                        <Icon component={currentTab === 'novo-cliente' ? PlaylistAddCircleIcon : PlaylistAddOutlinedIcon} sx={{mr: '12px'}}/>
                        <Typography sx={{fontWeight: currentTab  === 'novo-cliente' ? 'bold' : 'normal', whiteSpace: 'nowrap'}}>Novo Cliente</Typography>
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={`${styles.tab} ${currentTab === 'lista-de-clientes' ? styles.tabActive : ''}`} onClick={() => handleTabClick('lista-de-clientes')}>
                        <Icon component={currentTab === 'lista-de-clientes' ? ViewListIcon : ViewListOutlinedIcon} sx={{mr: '12px'}}/>
                        <Typography sx={{fontWeight: currentTab  === 'lista-de-clientes' ? 'bold' : 'normal', whiteSpace: 'nowrap'}}>Lista de Clientes</Typography>
                        <div className={styles.overlay}></div>
                    </div>
                </div>
                <div className={styles.clientsQuickView}>
                    <Divider sx={{mt: '10px'}}/>

                </div>
        </Paper>

        <Paper className={styles.bottomBarMobile}>
            <Divider/>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Novo Cliente" icon={<PlaylistAddOutlinedIcon />} onClick={() => handleTabClick('novo-cliente')}/>
                <BottomNavigationAction label="Lista de clientes" icon={<ViewListOutlinedIcon />} onClick={() => handleTabClick('lista-de-clientes')}/>
            </BottomNavigation>
        </Paper>
    </>
    );
}
  