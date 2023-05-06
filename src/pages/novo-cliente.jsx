import React, {useState, useEffect} from 'react'
import FormStep1 from './components/FormStep1'
import FormStep2 from './components/FormStep2'
import FormStep3 from './components/FormStep3'
import FormComplete from './components/FormComplete'
import styles from '../styles/novo-cliente.module.css' //formsNewClient.module.css
import FormProgressBar from './components/FormProgressBar';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import { useSelector} from 'react-redux';
import {
  themeSelect,
} from '../features/theme/themeSlice';
import {
  newClientForms,
} from '../features/newClientForms/newClientFormsSlice';


export default function NewClient() {

  const canSavesForm = useSelector(newClientForms).formStep3.isFilled //if step3 is filled
  
  const router = useRouter()

  const [formStepIndex, setFormStepIndex] = useState(0)
  function handleButtonFormClick(event){
    setFormStepIndex(formStepIndex + (event));
    //formStepIndex === 3 when forms ends
  }

  const handleNextButtonPressed = () => {
    setFormStepIndex(formStepIndex + 1)
  }
  const handleBackButtonPressed = () => {
    setFormStepIndex(formStepIndex - 1)
  }
  const handleResetButtonPressed = () => {
    setFormStepIndex(0)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Card className={styles.formNewClientContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.logoContainer}>
              <img className={styles.logo}/>
            </div>
            { formStepIndex == 3 ? (
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
            { formStepIndex === 0 ? (
              <>
                <FormStep1 handleNextButtonPressed={handleNextButtonPressed}/> {/* NOME , SOBRENOME, EMAIL, TELEFONE 1 , TELEFONE 2 */}
              </>
            ): formStepIndex === 1 ?  (
              <> 
                <FormStep2 handleNextButtonPressed={handleNextButtonPressed} handleBackButtonPressed={handleBackButtonPressed}/> {/* ENDEREÇO 1 E ENDEREÇO 2 (CEP, NOME DA RUA, NUMERO, COMPLEMENTO, BAIRRO, ESTADO, CIDADE) */}
              </>
            ): formStepIndex === 2 ?(
              <>
                <FormStep3 handleNextButtonPressed={handleNextButtonPressed} handleBackButtonPressed={handleBackButtonPressed}/> {/* DATA DE NASCIMENTO , CPF , RENDA MENSAL */}
              </>
            ): formStepIndex === 3 ?
              <>
                <FormComplete handleResetButtonPressed={handleResetButtonPressed}/>
              </>
            : null}
          </div>
          {/* <div className={styles.buttonsContainer}>
            { formStepIndex === 3 ? (
            <> 
              <div className={styles.formCompleteButtons}>
                <Button variant="outlined" startIcon={<ViewListIcon/>} sx={{mx: '5px'}} onClick={() => router.push('/lista-de-clientes')}>Ver a lista de clientes</Button>
                <Button variant="contained" startIcon={<AddIcon/>} sx={{mx: '5px'}} onClick={() => {handleButtonFormClick(-formStepIndex)}}>Adicione um novo cliente</Button>
              </div>
            </>
            ) : 
              <>
                <div className={styles.formStepsButtons}>
                  <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick(-1)} disabled={formStepIndex === 0}>Voltar</Button>
                  {formStepIndex === 2 ? (
                    <>
                      <Button disabled={canSavesForm === false} variant="contained" startIcon={<SaveAltIcon/>} sx={{mx: '5px'}} onClick={() => {handleButtonFormClick(+1)}}>Salvar</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={() => handleButtonFormClick(+1)}>Avançar</Button>
                    </>
                  )}
                </div>
              </>
            }
          </div> */}
        </Card>
      </div>
    </>
  );
}
