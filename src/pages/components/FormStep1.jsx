import React, {useState, useEffect} from 'react'
import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FormStep1({handleNextButtonPressed}) {

  const [inputsValue, setTnputsValue] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone1: '',
    telefone2: '',
  })

  const [canClickNextButton, setCanClickNextButton] = useState(false);

  useEffect(() =>{ 
    setCanClickNextButton(inputsValue.nome.length > 0 && inputsValue.sobrenome.length > 0 && inputsValue.email.length > 0 && inputsValue.telefone1.length > 0)
  }, [inputsValue]);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Nome</Typography> 
              <TextField size="small" variant="outlined" fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, nome: e.target.value})}/>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Sobrenome</Typography>
              <TextField size="small" variant="outlined" fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, sobrenome: e.target.value})}/>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*E-mail</Typography>
            <TextField size="small" variant="outlined" type='email' fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, email: e.target.value})}/>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Seu telefone</Typography>
            <TextField size="small" variant="outlined" fullWidth onChange={(e) =>  setTnputsValue({...inputsValue, telefone1: e.target.value})}/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Outro telefone (opcional)</Typography>
            <TextField size="small" variant="outlined" fullWidth type='number' onChange={(e) =>  setTnputsValue({...inputsValue, telefone2: e.target.value})}/>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
          <Button disabled variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}}>Voltar</Button>
          <Button disabled={!canClickNextButton} variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={handleNextButtonPressed}>Avançar</Button>
      </div>
    </>
  );
}
  
