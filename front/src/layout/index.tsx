import React from 'react';
import clsx from 'clsx';
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge/Badge";
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from "@material-ui/core/Menu";
import Tooltip from '@material-ui/core/Tooltip';
import { Notification, NotificationTypeInfo, NotificationTypeWarn, NotificationTypeAlert } from '../types/types'

const drawerWidth = 240;

const notifications: Array<Notification> = [
    {label: 'This is a notification that sends you Home.', to: '/tasks', type: 'info'},
    {label: 'This is a notification that sends you to Tasks.', to: '/tasks', type: 'info'},
    {label: 'This is a notification that sends you to Stories.', to: '/stories', type: 'warn'},
    {label: 'This is a notification that sends you to Board.', to: '/board', type: 'alert'},
];

const notificationLevels = {
    [NotificationTypeInfo]: 1,
    [NotificationTypeWarn]: 2,
    [NotificationTypeAlert]: 3,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarAlert: {
            backgroundColor: theme.palette.error.dark,
        },
        appBarInfo: {
            backgroundColor: theme.palette.primary.main,
        },
        appBarWarn: {
            backgroundColor: amber[700],
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        grow: {
            flexGrow: 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
        sectionDesktop: {
            display: 'flex',
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        menuItem: {
            textDecoration: 'none',
            color: 'inherit',
        }
    }),
);

export default function Layout({children}: { children: React.ReactNode }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [profileEl, setProfileEl] = React.useState<null | HTMLElement>(null);
    const [notificationEl, setNotificationEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(profileEl);
    const isNotificationOpen = Boolean(notificationEl);
    const profileMenuId = 'primary-search-account-menu';
    const notificationMenuId = 'primary-search-notification-menu';
    const handleProfileOpen = (event: React.MouseEvent<HTMLElement>) => setProfileEl(event.currentTarget)
    const handleProfileClose = () => setProfileEl(null)
    const handleNotificationOpen = (event: React.MouseEvent<HTMLElement>) => setNotificationEl(event.currentTarget)
    const handleNotificationClose = () => setNotificationEl(null)
    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)
    const highestNotificationLevel = notifications.reduce((acc, not) => Math.max(acc, notificationLevels[not.type || NotificationTypeInfo]), notificationLevels[NotificationTypeInfo]);
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    [classes.appBarInfo]: highestNotificationLevel === 1,
                    [classes.appBarWarn]: highestNotificationLevel === 2,
                    [classes.appBarAlert]: highestNotificationLevel >= 3,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        AppAka
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Tooltip title="Notification">
                            <IconButton
                                aria-label={`show ${notifications.length} new notifications`}
                                color="inherit"
                                onClick={handleNotificationOpen}
                            >
                                <Badge badgeContent={notifications.length} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Account">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={profileMenuId}
                                aria-haspopup="true"
                                onClick={handleProfileOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
                <Menu
                    anchorEl={profileEl}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    id={profileMenuId}
                    keepMounted
                    getContentAnchorEl={null}
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    open={isMenuOpen}
                    onClose={handleProfileClose}
                >
                    <ListItem button onClick={handleProfileClose}>
                        <ListItemIcon><SettingsIcon/></ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={handleProfileClose}>
                        <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItem>
                </Menu>
                <Menu
                    anchorEl={notificationEl}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    id={notificationMenuId}
                    keepMounted
                    getContentAnchorEl={null}
                    transformOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={isNotificationOpen}
                    onClose={handleNotificationClose}
                >
                    <Divider/>
                    {notifications.map(({label, to}) => [
                            <Link to={to} key={label} className={classes.menuItem} onClick={handleNotificationClose}>
                                <ListItem button>
                                    <ListItemText primary={label}/>
                                </ListItem>
                            </Link>,
                            <Divider/>
                        ]
                    )}
                </Menu>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                {[
                    {label: 'Home', to: '/', icon: <HomeIcon/>},
                    {label: 'Tasks', to: '/tasks', icon: <AssignmentIcon/>},
                    {label: 'Stories', to: '/stories', icon: <InboxIcon/>},
                    {label: 'Board', to: '/board', icon: <DeveloperBoardIcon/>},
                ].map(({label, to, icon}) => (
                    <Link to={to} key={label} className={classes.menuItem}>
                        <ListItem button>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label}/>
                        </ListItem>
                    </Link>
                ))}
                <Divider/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}
