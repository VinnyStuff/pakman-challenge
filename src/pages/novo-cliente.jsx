import React, {useState, useEffect} from 'react'
import FormStep1 from './components/FormStep1'
import FormStep2 from './components/FormStep2'
import FormStep3 from './components/FormStep3'
import FormComplete from './components/FormComplete'
import styles from '../styles/novo-cliente.module.css'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box'

export default function NewClient() {

  const [formStepIndex, setFormStepIndex] = useState(0)

  const [inputsValues, setInputsValues] = useState({
    dados_pessoais:{
      nome: '',
      sobrenome: '',
      email: '',
      telefone1: '',
      telefone2: '', /* opcional */
      dataDeNascimento: '',
      cpf: '',
      rendaMensal: '',
    },
    endereço_1:{
      cep: '',
      nomeDaRua: '',
      numero: '',
      complemento: '', /* opcional */
      bairro: '',
      estado: '',
      cidade: '',
    },
    endereço_2:{ /* opcional */
      cep: '',
      nomeDaRua: '',
      numero: '',
      complemento: '',
      bairro: '',
      estado: '',
      cidade: '',
    },
  });
  const [inputsValuesInitialState, setInputsValuesInitialState] = useState(inputsValues)
  
  function handleInputsValues(value){
    if (formStepIndex === 0){
      setInputsValues({...inputsValues, 
        dados_pessoais: {
        ...inputsValues.dados_pessoais,
        nome: value.nome,
        sobrenome: value.sobrenome,
        email: value.email,
        telefone1: value.telefone1,
        telefone2: value.telefone2,
      }
    })
  }
  else if (formStepIndex === 1){
    setInputsValues({...inputsValues, 
      endereço_1: value.endereço_1,
      endereço_2: value.endereço_2,
      })
    }
  else if (formStepIndex === 2){
    setInputsValues({...inputsValues, 
      dados_pessoais: {
        ...inputsValues.dados_pessoais,
        dataDeNascimento: value.dataDeNascimento,
        cpf: value.cpf,
        rendaMensal: value.rendaMensal,
        }
      })
    }
  }

  const handleNextButtonPressed = () => {
    setFormStepIndex(formStepIndex + 1)
  }
  const handleBackButtonPressed = () => {
    setFormStepIndex(formStepIndex - 1)
  }
  const handleResetButtonPressed = () => {
    setInputsValues(inputsValuesInitialState);
    setFormStepIndex(0)
  }

  useEffect(() =>{ 
    if(formStepIndex === 3){ //forms ends
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          localStorage.setItem(`cliente-${inputsValues.dados_pessoais.cpf}`, JSON.stringify(inputsValues))
        }
        catch(error){
          console.error(error)
        }
      }
    }
  }, [formStepIndex]);

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
                  <FormStep1 handleNextButtonPressed={handleNextButtonPressed} handleInputsValues={handleInputsValues}/> {/* NOME , SOBRENOME, EMAIL, TELEFONE 1 , TELEFONE 2 */}
                </div>

                <div style={{display: formStepIndex === 1 ? 'inherit' : 'none'}}>
                  <FormStep2 handleNextButtonPressed={handleNextButtonPressed} handleBackButtonPressed={handleBackButtonPressed} handleInputsValues={handleInputsValues}/> {/* ENDEREÇO 1 E ENDEREÇO 2 (CEP, NOME DA RUA, NUMERO, COMPLEMENTO, BAIRRO, ESTADO, CIDADE) */}
                </div>

                <div style={{display: formStepIndex === 2 ? 'inherit' : 'none'}}>
                  <FormStep3 handleNextButtonPressed={handleNextButtonPressed} handleBackButtonPressed={handleBackButtonPressed} handleInputsValues={handleInputsValues}/> {/* DATA DE NASCIMENTO , CPF , RENDA MENSAL */}
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

function FormProgressBar({currentStep}) {
  const steps = [
    'Dados pessoais',
    'Endereço',
    'Detalhes adicionais',
  ];

  return (
    <>
        <Box sx={{py: '20px'}}>
          <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((label) => (
              <Step key={label}>
                  <StepLabel>{label}</StepLabel>
              </Step>
              ))}
          </Stepper>
        </Box>
    </>
  );
}
  
