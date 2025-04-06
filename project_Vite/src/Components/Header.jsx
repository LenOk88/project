import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Button,
    FormControl,
    InputAdornment,
    IconButton,
    Input,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from './img.png';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const navLinks = (
        <>
            <Link to="/" style={{ textDecoration: 'none', color: "bisque" }}>
                <Button color="inherit">Home</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: "bisque" }}>
                <Button color="inherit">About</Button>
            </Link>
            <Link to="/contacts" style={{ textDecoration: 'none', color: "bisque" }}>
                <Button color="inherit">Contacts</Button>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none', color: "bisque" }}>
                <Button color="inherit">Blog</Button>
            </Link>
        </>
    );

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#000' }}>
                <Container className='header-box'>
                    <Toolbar style={{ padding: "5px", display: 'flex', justifyContent: 'space-between' }}>
                        <Link to="/">
                            <img
                                src={logo}
                                style={{ width: "30px", height: "30px", borderRadius: "15px" }}
                                alt="Logo"
                            />
                        </Link>

                        {isMobile ? (
                            <>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Drawer 
                                    anchor="left"
                                    open={drawerOpen}
                                    onClose={toggleDrawer(false)}
                                >
                                    <List className='menu' sx={{ width: 250 }}>
                                        {['Home', 'About', 'Contacts', 'Blog'].map((text, index) => (
                                            <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={toggleDrawer(false)}>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Drawer>
                            </>
                        ) : (
                            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="nav-links" style={{ display: 'flex' }}>
                                    {navLinks}
                                </div>
                                <FormControl variant="standard" style={{ marginLeft: '10px' }}>
                                    <Input
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        placeholder="Поиск..."
                                        style={{
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            width: '200px',
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton>
                                                    <SearchIcon style={{ color: '#000' }} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

