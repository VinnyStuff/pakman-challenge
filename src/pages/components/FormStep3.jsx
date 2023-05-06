import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveAltIcon from '@mui/icons-material/SaveAlt';


export default function FormStep3({handleNextButtonPressed, handleBackButtonPressed}) {

  const [inputsValue, setTnputsValue] = useState({
    dataDeNascimento: '',
    cpf: '',
    rendaMensal: '',
  })

  const [canClickNextButton, setCanClickNextButton] = useState(false);

  useEffect(() =>{ 
    setCanClickNextButton(inputsValue.dataDeNascimento.length > 0 && inputsValue.cpf.length > 0 && inputsValue.rendaMensal.length > 0)
  }, [inputsValue]);

  return (
    <>
      <div className={styles.formContainer}>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Data de Nascimento</Typography>
            <TextField size="small" variant="outlined" fullWidth id="dataDeNascimento" onChange={(e) =>  setTnputsValue({...inputsValue, dataDeNascimento: e.target.value})}/>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>CPF</Typography>
            <TextField size="small" variant="outlined" fullWidth id="cpf" onChange={(e) =>  setTnputsValue({...inputsValue, cpf: e.target.value})}/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Renda Mensal</Typography>
            <TextField size="small" variant="outlined" fullWidth id="rendaMensal" onChange={(e) =>  setTnputsValue({...inputsValue, rendaMensal: e.target.value})}/>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={handleBackButtonPressed}>Voltar</Button>
        <Button disabled={!canClickNextButton} variant="contained" endIcon={<SaveAltIcon/>} sx={{mx: '5px'}} onClick={handleNextButtonPressed}>Salvar</Button>
      </div>
    </>
  );
}
  