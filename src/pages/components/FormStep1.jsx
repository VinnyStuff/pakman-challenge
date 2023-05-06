import React, {useState, useEffect} from 'react'
import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FormStep1({handleNextButtonPressed}) {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Nome</Typography> 
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Sobrenome</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*E-mail</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Seu telefone</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Outro telefone</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
          <Button disabled variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}}>Voltar</Button>
          <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={handleNextButtonPressed}>Avançar</Button>
      </div>
    </>
  );
}
  
