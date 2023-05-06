import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FormStep2({handleNextButtonPressed, handleBackButtonPressed}) {

  const [currentAddress, setCurrentAddress] = useState(1);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.addressContainer}>
          <Typography color={currentAddress === 1 ? 'text.primary' : 'text.disabled'} variant='subtitle1' sx={{width: 'max-content', mr: '26px', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setCurrentAddress(1)} >Endereço 1</Typography>
          <Typography color={currentAddress === 2 ? 'text.primary' : 'text.disabled'} variant='subtitle1' sx={{width: 'max-content', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setCurrentAddress(2)}>Endereço 2 (opcional)</Typography>
        </div>
          
        
        <div style={{display: currentAddress === 1 ? 'inherit' : 'none'}} id='address1'>
          <CurrentForm/>
        </div>
        
        <div style={{display: currentAddress === 2 ? 'inherit' : 'none'}} id='address2'>
          <CurrentForm/>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={handleBackButtonPressed}>Voltar</Button>
        <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={handleNextButtonPressed}>Avançar</Button>
      </div>
    </>
  );
}

function CurrentForm(){
  const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
  ];

  return(
    <>
     <div className={styles.inputContainer} >
        <div className={styles.inputs}>
            <Typography variant='subtitle1'>CEP</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Nome da Rua</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Número</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Complemento</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Bairro</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Estado</Typography>
          <Autocomplete
            size="small"
            id="disabled-options-demo"
            options={states}
            renderInput={(params) => <TextField {...params} label="" />}
          />
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Cidade</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
        </div>
      </div>
    </>
  );
}

