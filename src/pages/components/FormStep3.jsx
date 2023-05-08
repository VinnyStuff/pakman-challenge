import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import InputNumberMask from './myMaterial/InputNumberMask';
import InputAdornment from '@mui/material/InputAdornment';


export default function FormStep3({handleNextButtonPressed, handleBackButtonPressed, handleInputsValues}) {

  const handleBirthDateIsValid = (event) => {
    const day = event.substr(0, 2);
    const month = event.substr(3, 2);
    const year = event.substr(6, 4);

    if (day > 31) {
      return false
    } 
    if (month > 12) {
      return false
    } 
    if (year > new Date().getFullYear()) {
      return false
    }

    return true;
  };

  const [inputsValues, setTnputsValue] = useState({
    dataDeNascimento: '',
    cpf: '',
    rendaMensal: '',
  })
  const [isEmptyInputsValues, setIsEmptyInputsValues] = useState({
    dataDeNascimento: false,
    cpf: false,
    rendaMensal: false,
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
    setCanClickNextButton( (handleBirthDateIsValid(inputsValues.dataDeNascimento) && inputsValues.dataDeNascimento.length >= 10) && inputsValues.cpf.length >= 14 && inputsValues.rendaMensal.length > 0)
  }, [inputsValues]);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
           <div className={styles.inputs}>
            <Typography variant='subtitle1'>Data de Nascimento</Typography>
            <InputNumberMask onBlur={handleBlur} mask="99/99/9999" id="dataDeNascimento" placeholder='dd/mm/aaaa' onChange={(e) =>  setTnputsValue({...inputsValues, dataDeNascimento: e.target.value})}/>
            <div className={styles.errorMessageContainer}>
              { inputsValues.dataDeNascimento.length === 0 && isEmptyInputsValues.dataDeNascimento ? (
                <>
                  <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                </>
              ): !handleBirthDateIsValid(inputsValues.dataDeNascimento) ? (
                <>
                  <Typography variant='subtitle2' color='error'>Coloque uma data de nascimento válida.</Typography> 
                </>
              ) : null }   
            </div>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>CPF</Typography>
            <InputNumberMask onBlur={handleBlur} mask="999.999.999-99" id='cpf' onChange={(e) =>  setTnputsValue({...inputsValues, cpf: e.target.value})}/>
            <div className={styles.errorMessageContainer}>
              { inputsValues.cpf.length === 0 && isEmptyInputsValues.cpf ? (
                <>
                  <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                </>
              ): inputsValues.cpf.length > 0 && inputsValues.cpf.length <= 13 ? (
                <>
                  <Typography variant='subtitle2' color='error'>É necessário no minimo 11 dígitos.</Typography> 
                </>
              ) : null }   
            </div>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Renda Mensal</Typography>
            <TextField
              onBlur={handleBlur}
              value={inputsValues.rendaMensal}
              size="small"
              variant="outlined"
              fullWidth
              type='number'
              id="rendaMensal"
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                
              }}
              onChange={(e) =>  setTnputsValue({...inputsValues, rendaMensal: e.target.value})}
            />
            <div className={styles.errorMessageContainer}>
              { inputsValues.rendaMensal.length === 0 && isEmptyInputsValues.rendaMensal ? (
                <>
                  <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                </>
              ):null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={handleBackButtonPressed}>Voltar</Button>
        <Button disabled={!canClickNextButton} variant="contained" endIcon={<SaveAltIcon/>} sx={{mx: '5px'}} onClick={() => {handleInputsValues(inputsValues); handleNextButtonPressed()}}>Salvar</Button>
      </div>
    </>
  );
}
  