import React, {useState, useEffect} from 'react'
import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateNome,
  updateSobrenome,
  updateEmail,
  updateTelefone1,
  updateTelefone2,
} from '../../features/newClientForms/newClientFormsSlice'

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
  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  
  useEffect(() => {
    dispatch(updateNome(nome))
    dispatch(updateSobrenome(sobrenome))
    dispatch(updateEmail(email))
    dispatch(updateTelefone1(telefone1))
    dispatch(updateTelefone2(telefone2))
  }, [nome, sobrenome, email, telefone1, telefone2]);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Nome</Typography> 
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth value={nome} required onChange={(e) => setNome(e.target.value)}/>
              <div className={styles.emptyMessageContainer}> 
                {/* <Typography variant='subtitle2'>O campo "Nome" é obrigatório</Typography> */}
              </div>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>*Sobrenome</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
              <div className={styles.emptyMessageContainer}> 
                {/* <Typography variant='subtitle2'>O campo "Sobrenome" é obrigatório</Typography> */}
              </div>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*E-mail</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            <div className={styles.emptyMessageContainer}> 
              {/* <Typography variant='subtitle2'>O campo "E-mail" é obrigatório</Typography> */}
            </div>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Seu telefone</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth inputProps={{ maxLength: 13, pattern: '[0-9]*' }} value={telephone1} onChange={handleTelephone1Change}/>
            <div className={styles.emptyMessageContainer}> 
              {/* <Typography variant='subtitle2'>O campo "Seu telefone" é obrigatório</Typography> */}
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
  
