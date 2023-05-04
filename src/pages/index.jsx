import React, {useState, useEffect} from 'react'
import FormStep1 from './components/FormStep1'
import FormStep2 from './components/FormStep2'
import FormStep3 from './components/FormStep3'
import FormComplete from './components/FormComplete'
import styles from '../styles/FormNewClient.module.css' //formsNewClient.module.css
import FormProgressBar from './components/FormProgressBar';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import { useSelector} from 'react-redux';
import {
    themeSelect,
  } from '../features/theme/themeSlice';


export default function Home() {

  const [formStepIndex, setFormStepIndex] = useState(0)
  const [formComplete, setFormComplete] = useState(false);
  function handleButtonFormClick(event){
    if(event === 'next'){
      setFormStepIndex(formStepIndex + 1);
    }
    else if (event === 'back'){
      setFormStepIndex(formStepIndex - 1);
    }
    else if (event === 'reset'){
      setFormComplete(false);
      setFormStepIndex(0);
    }
  }
  useEffect(() => {
    console.log(formComplete);
  }, [formComplete]);

  return (
    <>
      <div className={styles.wrapper}>
        <Card className={styles.formNewClientContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.logoContainer}>
              {/* <img className={styles.logo} src={useSelector(themeSelect) === 'dark' ?  '' : ''} alt="Pakman-logo" /> */}
            </div>
            { formComplete ? (
              <>
                <Typography variant="h4" fontWeight={'bold'}>Cadastro concluído</Typography>
                <Typography variant="subtitle" color='text.secondary'>Escolha uma opção abaixo:</Typography>
              </>
            ) : 
              <>
                <Typography variant="h4" fontWeight={'bold'}>Cadastre o novo cliente</Typography>
                <Typography variant="subtitle" color='text.secondary'>preencha os dados do cliente neste formulário</Typography>
              </>
            }
          </div>

          <FormProgressBar currentStep={formStepIndex}/>

          <div className={styles.form}>
            { formComplete ? (
              <>
                <FormComplete/>
              </>
            ) : 
              <>
                { formStepIndex === 0 ? (
                  <>
                    <FormStep1/>
                  </>
                ): formStepIndex === 1 ?  (
                  <>
                    <FormStep2/>
                  </>
                ): formStepIndex === 2 ?(
                  <>
                    <FormStep3/>
                  </>
                ): null}
              </>
            }
          </div>
          <div className={styles.buttonsContainer}>
            { formComplete ? (
            <> 
              <div className={styles.formCompleteButtons}>
                <Button variant="outlined" startIcon={<ViewListIcon/>} sx={{mx: '5px'}} onClick={() => console.log('ver a lista de clientes')}>Ver a lista de clientes</Button>
                <Button variant="contained" startIcon={<AddIcon/>} sx={{mx: '5px'}} onClick={() => {handleButtonFormClick('reset')}}>Adicione um novo cliente</Button>
              </div>
            </>
            ) : 
              <>
                <div className={styles.formStepsButtons}>
                  <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick('back')} disabled={formStepIndex === 0}>Voltar</Button>
                  {formStepIndex === 2 ? (
                    <>
                      <Button variant="contained" startIcon={<SaveAltIcon/>} sx={{mx: '5px'}} onClick={() => {setFormComplete(true); handleButtonFormClick('next')}}>Salvar</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick('next')}>Avançar</Button>
                    </>
                  )}
                </div>
              </>
            }
          </div>
        </Card>
      </div>
    </>
  );
}
