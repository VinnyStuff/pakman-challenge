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

  const [inputsAddress1Values, setInputsAddress1Values] = useState({
    cep: '',
    nomeDaRua: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: '',
  });
  const [inputsAddress2Values, setInputsAddress2Values] = useState({
    cep: '',
    nomeDaRua: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: '',
  });

  const handleAdress1InputsValues = value => {
    setInputsAddress1Values(value)
  }
  const handleAdress2InputsValues = value => {
    setInputsAddress2Values(value)
  }

  const [canClickNextButton, setCanClickNextButton] = useState(false);

  useEffect(() =>{
    setCanClickNextButton(inputsAddress1Values.cep.length > 0 && inputsAddress1Values.nomeDaRua.length > 0 && inputsAddress1Values.numero.length > 0 && inputsAddress1Values.bairro.length > 0 && inputsAddress1Values.estado.length > 0 && inputsAddress1Values.cidade.length > 0)
  }, [inputsAddress1Values, inputsAddress2Values]);


  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.addressContainer}>
          <Typography color={currentAddress === 1 ? 'text.primary' : 'text.disabled'} variant='subtitle1' sx={{width: 'max-content', mr: '26px', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setCurrentAddress(1)} >Endereço 1</Typography>
          <Typography color={currentAddress === 2 ? 'text.primary' : 'text.disabled'} variant='subtitle1' sx={{width: 'max-content', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setCurrentAddress(2)}>Endereço 2 (opcional)</Typography>
        </div>
          
        
        <div style={{display: currentAddress === 1 ? 'inherit' : 'none'}} id='address1'>
          <CurrentForm handleValues={handleAdress1InputsValues} />
        </div>
        
        <div style={{display: currentAddress === 2 ? 'inherit' : 'none'}} id='address2'>
          <CurrentForm handleValues={handleAdress2InputsValues}/>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={handleBackButtonPressed}>Voltar</Button>
        <Button disabled={!canClickNextButton} variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={handleNextButtonPressed}>Avançar</Button>
      </div>
    </>
  )
}

const CurrentForm = props => {

  const [inputsValue, setTnputsValue] = useState({
    cep: '',
    nomeDaRua: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: '',
  })

  useEffect(() =>{ 
    props.handleValues(inputsValue);
  }, [inputsValue]);

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
            <Typography variant='subtitle1'>*CEP</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" name='cep' fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, cep: e.target.value})}/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Nome da Rua</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" name='nomeDaRua' fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, nomeDaRua: e.target.value})}/>
          </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>8Número</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" name='numero' fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, numero: e.target.value})}/>
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Complemento</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" name='complemento' fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, complemento: e.target.value})}/>
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Bairro</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" name='bairro' fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, bairro: e.target.value})}/>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Estado</Typography>
          <Autocomplete
            size="small"
            id="disabled-options-demo"
            options={states}
            renderInput={(params) => <TextField {...params} label="" />}
            onChange={(event, value) =>
              setTnputsValue((prevState) => ({
                ...prevState,
                estado: value,
              }))}
          />
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Cidade</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, cidade: e.target.value})}/>
        </div>
      </div>
    </>
  );
}

