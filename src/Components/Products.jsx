import React, { useEffect,useState } from 'react'
import { Box } from '@mui/material'
import SideNav from './SideNav.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


const Products = () => {
  const [Allproducts, setAllproducts] = useState(0)
  const API = 'https://fakestoreapi.com/products';
  const fetchProducts = async() => {
    try{
    const data = await axios.get(API);
    console.log(data);
    setAllproducts(data.data.length);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[]);
  return (
    <Box sx={{ display: 'flex',marginTop:'50px'}}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction="row" gap={3}>
        <Card sx={{ maxWidth:'50%', minWidth:'200px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                Total Products
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'red'}}>
                {Allproducts} <SignalCellularAltIcon />
              </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth:'50%' ,minWidth:'200px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                Active Users
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'red'}}>
                {Allproducts} <SignalCellularAltIcon />
              </Typography>
            </CardContent>
        </Card>
        </Stack>
      </Box>
    </Box>
  )
}

export default Products
