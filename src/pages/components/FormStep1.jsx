import React, {useState, useEffect} from 'react'
import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputNumberMask from './myMaterial/InputNumberMask'
import validator from 'validator';

export default function FormStep1({handleNextButtonPressed, handleInputsValues}) {

  const validatorEmail = require('validator');
  const checkTextIsValid = (e) =>{
    const text = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(text) && text.length < 30) {
      return true;
    }
    else{
      return false;
    }
  }

  const [inputsValues, setTnputsValue] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone1: '',
    telefone2: '',
  })

  const [isEmptyInputsValues, setIsEmptyInputsValues] = useState({
    nome: false,
    sobrenome: false,
    email: false,
    telefone1: false,
  })

  const handleBlur = (event) =>{
    const { id, value } = event.target;
    if(value.length === 0){
      setIsEmptyInputsValues({...isEmptyInputsValues, 
        [id]: true
      })
    }
    else{
      setIsEmptyInputsValues({...isEmptyInputsValues, 
        [id]: false
      })
    }
  }

  const [canClickNextButton, setCanClickNextButton] = useState(false);

  useEffect(() =>{ 
    setCanClickNextButton(inputsValues.nome.length >= 3 && 
      inputsValues.sobrenome.length >= 3 && 
      validator.isEmail(inputsValues.email) && 
      inputsValues.telefone1.length >= 15 &&
      
      (inputsValues.telefone2.length < 2 ||  inputsValues.telefone2.length >= 15)) 

  }, [inputsValues]);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Nome</Typography> 
              <TextField onBlur={handleBlur} id='nome' size="small" variant="outlined" type='email' fullWidth value={inputsValues.nome} onChange={(e) =>  checkTextIsValid(e) && setTnputsValue({...inputsValues, nome: e.target.value})}/>
              <div className={styles.errorMessageContainer}>
                { inputsValues.nome.length === 0 && isEmptyInputsValues.nome ? (
                  <>
                    <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                  </>
                ): inputsValues.nome.length > 0 && inputsValues.nome.length < 3 ? (
                  <>
                    <Typography variant='subtitle2' color='error'>É necessário no minimo 3 caracteres.</Typography> 
                  </>
                ) : null }   
              </div>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Sobrenome</Typography>
              <TextField onBlur={handleBlur} id='sobrenome' size="small" variant="outlined" type='email' fullWidth value={inputsValues.sobrenome} onChange={(e) => checkTextIsValid(e) && setTnputsValue({...inputsValues, sobrenome: e.target.value})}/>
              <div className={styles.errorMessageContainer}>
                { inputsValues.sobrenome.length === 0 && isEmptyInputsValues.sobrenome ? (
                  <>
                    <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                  </>
                ): inputsValues.sobrenome.length > 0 && inputsValues.sobrenome.length < 3 ? (
                  <>
                    <Typography variant='subtitle2' color='error'>É necessário no minimo 3 caracteres.</Typography> 
                  </>
                ) : null }   
              </div>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*E-mail</Typography>
            <TextField onBlur={handleBlur} id='email' size="small" variant="outlined" type='email' fullWidth onChange={(e) =>  setTnputsValue({...inputsValues, email: e.target.value})}/>
            <div className={styles.errorMessageContainer}>
                { inputsValues.email.length === 0 && isEmptyInputsValues.email ? (
                  <>
                    <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                  </>
                ): !validator.isEmail(inputsValues.email) && inputsValues.email.length > 0 ?(
                  <>
                    <Typography variant='subtitle2' color='error'>Coloque um e-mail válido</Typography> 
                  </>
                ) : null }   
              </div>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Seu telefone</Typography>
            <InputNumberMask onBlur={handleBlur} id='telefone1' mask="(99) 99999-9999" onChange={(e) =>  setTnputsValue({...inputsValues, telefone1: e.target.value})}/>
             <div className={styles.errorMessageContainer}>
                { inputsValues.telefone1.length === 0 && isEmptyInputsValues.telefone1 ? (
                  <>
                    <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                  </>
                ): inputsValues.telefone1.length > 0 && (inputsValues.telefone1.length > 0 &&  inputsValues.telefone1.length < 15) ? (
                  <>
                    <Typography variant='subtitle2' color='error'>Neste campo é necessário DDD e um telefone de 9 dígitos</Typography> 
                  </>
                ) : null }   
              </div>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Outro telefone (opcional)</Typography>
            <InputNumberMask mask="(99) 99999-9999" id='telefone1' onChange={(e) =>  setTnputsValue({...inputsValues, telefone2: e.target.value})}/>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
          <Button disabled variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}}>Voltar</Button>
          <Button disabled={!canClickNextButton} variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={() => {handleInputsValues(inputsValues); handleNextButtonPressed()}}>Avançar</Button>
      </div>
    </>
  );
}
  
