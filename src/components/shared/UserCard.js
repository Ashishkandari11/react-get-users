import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


export default function UserCard(props){
    return(
        <Container >
             <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }}>
                <Link underline='none' to={'/user/'+props.user.id }>
                <Card sx={{ maxWidth: 200 }} >
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="140"
                            image={ props.user.avatar }
                            alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { props.user.first_name +' '+  props.user.last_name} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">                           
                        </Typography>
                        </CardContent>
                    </CardActionArea>  
                </Card>
            </Link>
            </Box>
            </Container>
    );


}