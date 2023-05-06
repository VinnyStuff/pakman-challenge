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

            { formStepIndex < 3 ? (
              <>
                <Typography variant="h4" fontWeight={'bold'}>Cadastre o novo cliente</Typography>
                <Typography variant="subtitle" color='text.secondary'>preencha os dados do cliente neste formulário</Typography>
              </>
            ) : 
              <>
                <Typography variant="h4" fontWeight={'bold'}>Cadastro concluído</Typography>
                <Typography variant="subtitle" color='text.secondary'>Escolha uma opção abaixo:</Typography>
              </>
            }
            
          </div>

          <FormProgressBar currentStep={formStepIndex}/>

          <div className={styles.form}>
            { formStepIndex < 3 ? (
              <>
                <div style={{display: formStepIndex === 0 ? 'inherit' : 'none'}}>
                  <FormStep1 handleNextButtonPressed={handleNextButtonPressed}/> {/* NOME , SOBRENOME, EMAIL, TELEFONE 1 , TELEFONE 2 */}
                </div>

                <div style={{display: formStepIndex === 1 ? 'inherit' : 'none'}}>
                  <FormStep2 handleNextButtonPressed={handleNextButtonPressed} handleBackButtonPressed={handleBackButtonPressed}/> {/* ENDEREÇO 1 E ENDEREÇO 2 (CEP, NOME DA RUA, NUMERO, COMPLEMENTO, BAIRRO, ESTADO, CIDADE) */}
                </div>

                <div style={{display: formStepIndex === 2 ? 'inherit' : 'none'}}>
                  <FormStep3 handleNextButtonPressed={handleNextButtonPressed} handleBackButtonPressed={handleBackButtonPressed}/> {/* DATA DE NASCIMENTO , CPF , RENDA MENSAL */}
                </div> 
              </>
            ) : 
              <>
                <FormComplete handleResetButtonPressed={handleResetButtonPressed}/> {/* botões: ver a lista de clientes e adicione um novo cliente */}
              </>
            }     
          </div>
        </Card>
      </div>
    </>
  );
}
