import React, { useEffect,useState } from 'react'
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
  )
}

export default Products
