import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import { FaRegHeart } from 'react-icons/fa';
import Navbar from './components/navbar';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  transition: "box-shadow 0.3s, transform 0.3s",
  '&:hover': {
    boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
    transform: "scale(1.05)"
  },
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} px={15}>
      <Navbar/>
      <Grid container spacing={2}>
        {/**/}
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf5d3a842a104bbb99beafc700a61bd5_9366/Camiseta_Adicolor_Turquesa_IJ9702_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$103.563</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$139.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$97.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Adicolor adidas Camiseta Adicolor adidas  </Typography>
              <Typography fontSize="14px" color="#777777">Niño Originals</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">2 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        {/**/}
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0d89537e9eb4987aa5c14b38ddddad8_9366/camiseta-future-icons-logo-pique.jpgeta-adicolor.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$110.963</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$149.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$104.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Future Icons Logo Pique</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportwear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">5 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d92f450cb0f64f95b941a16db30222e0_9366/Camiseta_Essentials_3_Rayas_Algodon_Turquesa_IJ6271_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$81.363</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$109.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$76.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Essentials 3 rayas Algodon</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">4 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/91ead325a1b3459a89cdac750176aebe_9366/Camiseta_3_Rayas_adidas_Essentials_Negro_GN3995_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">Agotado</Typography>   
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta 3 Rayas adidas Essentials</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">4 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/04a3626b60b8437ea9daaf56010dfad4_9366/Camiseta_Essentials_Big_Logo_Algodon_Gris_HR6379_21_model.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$73.963</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$99.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$69.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Essentials Big Logo Algodon</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">5 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/84e15b05a0d84d168c24ac3600f526be_9366/Camiseta_3_Rayas_adidas_Essentials_Azul_GN4000_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta 3 Rayas Adidas Essentials</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">4 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/45559fd582dd461ba06daf6c00b6e252_9366/Camiseta_Running_AEROREADY_3_Rayas_Azul_IB8866_21_model.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$139.950</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$89.568</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.970 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Running AEROREADY 3 Rayas</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportwear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">2 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62ae6932943f47c080601a05f01ad49f_9366/Camiseta_adidas_x_Star_Wars_Estampada_Blanco_IS4566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#000000" fontWeight="300">$199.950</Typography>    
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta adidas x Star Wars Estamapada</Typography>
              <Typography fontSize="14px" color="#777777">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="14px" color="#767677">2 colores </Typography> <Typography fontSize="14px" color="##000000">solo en adidas </Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
