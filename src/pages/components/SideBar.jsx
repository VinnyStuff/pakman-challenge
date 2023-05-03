import React, {useEffect, useState} from 'react';
import styles from '../../styles/SideBar.module.css'
import Paper from '@mui/material/Paper'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
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


    //script

    const [currentTab, setCurrentTab] = useState();
    function handleTabClick(tab){
        setCurrentTab(tab);
    }

    return (
      <>
       <Paper className={styles.sideBarContainer} sx={{borderRadius: '0'}}>
            <div className={styles.MenuContainer}>
                <IconButton type="button" sx={{ p: "10px", mr: '14px' }}  onClick={handleClick}>
                <MenuIcon sx={{ height: "26px", width: "26px" }} />
                </IconButton>
                <div className={styles.logoContainer}>
                    <img src='/images/pakman-logo-light-mode.fw.png' alt="Pakman-logo" width={'100%'}/>
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
                <MenuItem onClick={() => {handleClose()}}>
                    <ListItemIcon>
                        <DarkModeIcon/>
                    </ListItemIcon>
                    <ListItemText>Appearance: Light</ListItemText>
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
       </Paper>
      </>
    );
}
  