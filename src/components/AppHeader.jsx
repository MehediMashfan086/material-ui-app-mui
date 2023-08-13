import { AppBar, Box, IconButton, Toolbar, Typography, Badge, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    <Link to="/">MUI</Link>
                </Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Stack direction='row' spacing={2}>
                    <Link to="/home">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/form">FORM</Link>
                </Stack>
                <IconButton color="inherit">
                    <Badge badgeContent={100} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    <Badge badgeContent={100} color='error'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
  )
}

export default AppHeader