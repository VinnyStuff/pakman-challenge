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
          <div className={styles.telephoneContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Telefone</Typography>
          </div>
          <div className={styles.locationContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Localização (Estado)</Typography>
          </div>
          <div className={styles.emailContainer}>
            <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>E-mail</Typography>
          </div>
        </div>
        
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
    <Card sx={{position: 'relative', border: `1px solid ${dividerColor}`, mb: expanded ? '6px' : '0'}}>
      <CardContent sx={{display: 'flex', height: '45px', p: '0', mr: '52px'}}>
        <div className={styles.customerParametersContainer}>
          <div className={styles.nameContainer}>
            <Typography variant='subtitle1'>Vinnycios Medeiros de Almeida</Typography>
          </div>
          <div className={styles.cpfContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>155.155.155-24</Typography>
          </div>
          <div className={styles.telephoneContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>(11) 98185-4195</Typography>
          </div>
          <div className={styles.locationContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>Rio Grande do Norte</Typography>
          </div>
          <div className={styles.emailContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, excepturi.@gmail,com</Typography>
          </div>
        </div>
      </CardContent>

      <ExpandMore
          sx={{position: 'absolute', top: '0', mt:'3px', right: '0', mr: '8px'}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ borderTop: `1px solid ${dividerColor}`, whiteSpace: 'normal'}}>
          <div className={styles.cardExtendContainer}>
            <div className={styles.clientPersonalInformations}>
              <Typography variant='subtitle1'>Dados pessoais: </Typography>
              <Typography variant='subtitle1'>Nome: </Typography>
              <Typography variant='subtitle1'>Email: </Typography>
              <Typography variant='subtitle1'>Telefone 1: </Typography>
              <Typography variant='subtitle1'>Telefone 2: </Typography>
              <Typography variant='subtitle1'>Data de nascimento:</Typography>
              <Typography variant='subtitle1'>CPF: </Typography>
              <Typography variant='subtitle1'>Renda mensal: </Typography>
            </div>
            <div className={styles.address0Container}>
              <Typography variant='subtitle1'>Endereço 1: </Typography>
              <Typography variant='subtitle1'>CEP: </Typography>
              <Typography variant='subtitle1'>Nome da Rua: </Typography>
              <Typography variant='subtitle1'>Número: </Typography>
              <Typography variant='subtitle1'>Complemento: </Typography>
              <Typography variant='subtitle1'>Bairro: </Typography>
              <Typography variant='subtitle1'>Estado: </Typography>
              <Typography variant='subtitle1'>Cidade: </Typography>
            </div>
            <div className={styles.address0Container}>
              <Typography variant='subtitle1'>Endereço 2: </Typography>
              <Typography variant='subtitle1'>CEP: </Typography>
              <Typography variant='subtitle1'>Nome da Rua: </Typography>
              <Typography variant='subtitle1'>Número: </Typography>
              <Typography variant='subtitle1'>Complemento: </Typography>
              <Typography variant='subtitle1'>Bairro: </Typography>
              <Typography variant='subtitle1'>Estado: </Typography>
              <Typography variant='subtitle1'>Cidade: </Typography>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}