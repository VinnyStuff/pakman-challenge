import React, {useState, useEffect} from 'react'
import styles from '../styles/lista-de-clientes.module.css'
import Typography from '@mui/material/Typography'
import Paper from  '@mui/material/Paper'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Hidden } from '@mui/material';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomerList() {

  return (
    <>
      <div className={styles.customerListContainer}>
        <div className={styles.titlesContainer}>
          <div className={styles.nameContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Nome</Typography>
          </div>
          <div className={styles.cpfContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>CPF</Typography>
          </div>
          <div className={styles.locationContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Localização (Estado)</Typography>
          </div>
          <div className={styles.telephoneContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Telefone</Typography>
          </div>
          <div className={styles.emailContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>E-mail</Typography>
          </div>
        </div>
        
        <Client/>
        <Client/>
        <Client/>
        <Client/>
      </div>
    </>
  );
}


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Client(){
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
  const dividerColor = theme.palette.divider;

  return (
    <Card sx={{position: 'relative', border: `1px solid ${dividerColor}`}}>
      <CardContent sx={{display: 'flex', height: '45px', p: '0', mr: '56px'}}>
        <div className={styles.customerParametersContainer}>
          <div className={styles.nameContainer}>
            <Typography variant='subtitle1'>Vinnycios Medeiros de Almeida</Typography>
          </div>
          <div className={styles.cpfContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>155.155.155-24</Typography>
          </div>
          <div className={styles.locationContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>Rio Grande do Norte</Typography>
          </div>
          <div className={styles.telephoneContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>(11) 98185-4195</Typography>
          </div>
          <div className={styles.emailContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, excepturi.@gmail,com</Typography>
          </div>
        </div>
      </CardContent>

      <ExpandMore
          sx={{position: 'absolute', top: '0', mt:'5px', right: '0', mr: '8px'}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ borderTop: `1px solid ${dividerColor}`, whiteSpace: 'normal'}}>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}