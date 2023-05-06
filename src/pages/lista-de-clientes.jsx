import React, {useState, useEffect} from 'react'
import styles from '../styles/lista-de-clientes.module.css'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from "@mui/material/styles";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

export default function CustomerList() {

  const [clients, setClients] = useState([]);

 

  useEffect(() => {
    const newClients = [];

    for (let key in localStorage) {
      if (key.includes("cliente")) {
        newClients.push(JSON.parse(localStorage.getItem(key)));
      }
    }

    setClients(newClients);
  }, []);


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
        
        {clients.map((client) =>(
          <Client key={client.dados_pessoais.cpf} client={client}/>
        ))}
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

function Client({ client }){
  const dados_pessoais = client.dados_pessoais;
  const endereços = [client.endereço_1, client.endereço_2];

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
  const dividerColor = theme.palette.divider;

  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };

  

  return (
    <Card sx={{position: 'relative', border: `1px solid ${dividerColor}`, mb: expanded ? '6px' : '0'}}>
      <CardContent sx={{display: 'flex', height: '45px', p: '0', mr: '52px'}}>
        <Checkbox sx={{mr: '5px', ml: '2px'}} inputProps={{ 'aria-label': 'controlled' }} checked={checked} onChange={handleCheckboxChange}/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className={styles.customerParametersContainer}>
          <div className={styles.nameContainer}>
            <Typography variant='subtitle1'>{dados_pessoais.nome}</Typography>
          </div>
          <div className={styles.cpfContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>{dados_pessoais.cpf}</Typography>
          </div>
          <div className={styles.telephoneContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>{dados_pessoais.telefone1}</Typography>
          </div>
          <div className={styles.locationContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>{endereços[0].estado}</Typography>
          </div>
          <div className={styles.emailContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
            <Typography variant='subtitle1'>{dados_pessoais.email}</Typography>
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
              <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Dados pessoais: </Typography>
              <Typography variant='subtitle1'>Nome: {dados_pessoais.nome}</Typography>
              <Typography variant='subtitle1'>E-mail: {dados_pessoais.cpf}</Typography>
              <Typography variant='subtitle1'>Telefone 1: {dados_pessoais.telefone1}</Typography>
              <Typography variant='subtitle1'>Telefone 2: {dados_pessoais.telefone2}</Typography>
              <Typography variant='subtitle1'>Data de nascimento: {dados_pessoais.dataDeNascimento}</Typography>
              <Typography variant='subtitle1'>CPF: {dados_pessoais.cpf}</Typography>
              <Typography variant='subtitle1'>Renda mensal: {dados_pessoais.rendaMensal}</Typography>
            </div>
            
            {endereços.map((endereço, index) => (
              <div key={index}>
                <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Endereço {index + 1}: </Typography>
                <Typography variant='subtitle1'>CEP: {endereço.cep}</Typography>
                <Typography variant='subtitle1'>Nome da Rua: {endereço.nomeDaRua}</Typography>
                <Typography variant='subtitle1'>Número:{endereço.numero} </Typography>
                <Typography variant='subtitle1'>Complemento: {endereço.complemento}</Typography>
                <Typography variant='subtitle1'>Bairro: {endereço.bairro}</Typography>
                <Typography variant='subtitle1'>Estado: {endereço.estado}</Typography>
                <Typography variant='subtitle1'>Cidade: {endereço.cidade}</Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}