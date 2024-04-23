import { AppBar, Toolbar, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledButton = styled(Button)(({ theme, active }) => ({
  color: 'gray',
  fontWeight: active ? 'bold' : 'normal',
  fontSize: '16px',
  textTransform: 'none',
  flexGrow: 1,
  justifyContent: 'center'
}));

const Logo = styled('img')({
  height: '50px',
  marginRight: '20px',
});

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo src="public/logo.png" alt="Adidas Logo" />

        <div style={{ display: 'flex', flexGrow: 1 }}>
          <StyledButton active={activeLink === 'home'} onClick={() => setActiveLink('home')}>
            Calzado
          </StyledButton>
          <StyledButton active={activeLink === 'products'} onClick={() => setActiveLink('products')}>
            Hombre
          </StyledButton>
          <StyledButton active={activeLink === 'about'} onClick={() => setActiveLink('about')}>
            Mujer
          </StyledButton>
          <StyledButton active={activeLink === 'about2'} onClick={() => setActiveLink('about2')}>
            Niños
          </StyledButton>
          <StyledButton active={activeLink === 'about3'} onClick={() => setActiveLink('about3')}>
            Deporte
          </StyledButton>
        </div>
        <TextField
          size="small"
          sx={{ width: 180, marginRight: 2 }}
          placeholder="Buscar..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
