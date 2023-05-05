import React, {useState, useEffect} from 'react'
import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function formatPhoneNumber(phoneNumberString) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

export default function FormStep1() {

  const [telephone1, setTelephone1] = useState('');
  const handleTelephone1Change = (event) => {
    const phoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    if (formattedPhoneNumber) {
      setTelephone1(formattedPhoneNumber);
    } else {
      setTelephone1(phoneNumber);
    }
  };

  //--
  const [nomeInput, setNomeInput] = useState('');
  const handleNomeInputBlur = (event) =>{
    const nomeInput = event.target.value !== '';
    console.log(`O campo ${event.target.id} ${nomeInput ? 'tem conteúdo' : 'está vazio'}.`);
  }


  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Nome</Typography> 
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} onBlur={handleNomeInputBlur}/>
              <div className={styles.emptyMessageContainer}> 
                <Typography variant='subtitle2'>O campo "Nome" é obrigatório</Typography>
              </div>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Sobrenome</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
              <div className={styles.emptyMessageContainer}> 
                <Typography variant='subtitle2'>O campo "Sobrenome" é obrigatório</Typography>
              </div>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*E-mail</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            <div className={styles.emptyMessageContainer}> 
              <Typography variant='subtitle2'>O campo "E-mail" é obrigatório</Typography>
            </div>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Seu telefone</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth inputProps={{ maxLength: 13, pattern: '[0-9]*' }} value={telephone1} onChange={handleTelephone1Change}/>
            <div className={styles.emptyMessageContainer}> 
              <Typography variant='subtitle2'>O campo "Seu telefone" é obrigatório</Typography>
            </div>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Outro telefone</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
        </div>
      </div>
    </>
  );
}
  
