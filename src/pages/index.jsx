import React, {useState, useEffect} from 'react'
import FormStep1 from './components/FormStep1'
import FormStep2 from './components/FormStep2'
import FormStep3 from './components/FormStep3'
import FormComplete from './components/FormComplete'
import SideBar from './components/SideBar'
import styles from '../styles/FormNewClient.module.css'
import FormProgressBar from './components/FormProgressBar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Home() {

  const [formStepIndex, setFormStepIndex] = useState(0)
  function handleButtonFormClick(index){
    setFormStepIndex(formStepIndex + index);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.formNewClientContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src='/images/pakman-logo.fw.png' alt="Pakman-logo"/>
            </div>
            <Typography variant="h4" fontWeight={'bold'}>Crie um novo cadastro</Typography>
            <Typography variant="subtitle" color='text.secondary'>preencha os dados do cliente neste formulário</Typography>
          </div>

          <FormProgressBar currentStep={formStepIndex}/>

          <div className={styles.form}>
            {formStepIndex === 0 ? (
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
          </div>
          <div className={styles.formButtons}>
            {formStepIndex === 2 ? (
              <>
                <Button variant="contained" startIcon={<SaveAltIcon/>} sx={{mx: '5px'}}>Salvar</Button>

                <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick(-1)} disabled={formStepIndex === 0}>Voltar</Button>
                <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick(+1)} disabled={formStepIndex === 2}>Avançar</Button>
              </>
            ) :  (
              <>
                <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick(-1)} disabled={formStepIndex === 0}>Voltar</Button>
                <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick(+1)} disabled={formStepIndex === 2}>Avançar</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
