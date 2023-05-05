import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDataDeNascimento,
  updateCpf,
  updateRendaMensal,
  isFormStep3Filled,
} from '../../features/newClientForms/newClientFormsSlice'

export default function FormStep3() {
  const dispatch = useDispatch();

  const [dataDeNascimento, setDataDeNascimento] = useState('');
  const [dataDeNascimentoEmpty, setDataDeNascimentoEmpty] = useState(false);
  useEffect(() => {
    dispatch(updateDataDeNascimento(dataDeNascimento));
    setDataDeNascimentoEmpty(false);
  }, [dataDeNascimento]);
  const handleDataDeNascimentoBlur  = () =>{
    setDataDeNascimentoEmpty(dataDeNascimento === '');
  };

  const [cpf, setCpf] = useState('');
  const [cpfEmpty, setCpfEmpty] = useState(false);
  useEffect(() => {
    dispatch(updateCpf(cpf));
    setCpfEmpty(false);
  }, [cpf]);
  const handleCpfBlur  = () =>{
    setCpfEmpty(cpf === '');
  };

  const [rendaMensal, setRendaMensal] = useState('');
  const [rendaMensalEmpty, setRendaMensalEmpty] = useState(false);  
  useEffect(() => {
    dispatch(updateRendaMensal(rendaMensal));
    setRendaMensalEmpty(false);
  }, [rendaMensal]);
  const handleRendaMensalBlur  = () =>{
    setRendaMensalEmpty(rendaMensal === '');
  };

  useEffect(() => {
    dispatch(isFormStep3Filled(rendaMensal.length > 0 && cpf.length > 0 && dataDeNascimento.length > 0));
  }, [rendaMensal, cpf, dataDeNascimento]);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
              <Typography variant='subtitle1' color={dataDeNascimentoEmpty ? 'error.main' : 'text.primary'}>Data de Nascimento</Typography>
              <TextField error={dataDeNascimentoEmpty} size="small" variant="outlined" fullWidth id="dataDeNascimento" value={dataDeNascimento}  onChange={(e) => setDataDeNascimento(e.target.value)} onBlur={handleDataDeNascimentoBlur}/>
              <div className={styles.emptyMessageContainer}> 
                {dataDeNascimentoEmpty ? (
                  <>
                    <Typography color='error.main' variant='subtitle2' >O campo "Data de nascimento" é obrigatório</Typography>
                  </>
                ) : null}

              </div>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1' color={cpfEmpty ? 'error.main' : 'text.primary'}>CPF</Typography>
            <TextField error={cpfEmpty} size="small" variant="outlined" fullWidth id="cpf" value={cpf}  onChange={(e) => setCpf(e.target.value)} onBlur={handleCpfBlur}/>
            <div className={styles.emptyMessageContainer}> 
              {cpfEmpty ? (
                <>
                  <Typography color='error.main' variant='subtitle2' >O campo "CPF" é obrigatório</Typography>
                </>
              ) : null}
            </div>
          </div>
          <div className={styles.inputs}>
            <Typography color={rendaMensalEmpty ? 'error.main' : 'text.primary'} variant='subtitle1'>Renda Mensal</Typography>
            <TextField error={rendaMensalEmpty} size="small" variant="outlined" fullWidth id="rendaMensal" value={rendaMensal}  onChange={(e) => setRendaMensal(e.target.value)} onBlur={handleRendaMensalBlur}/>
            <div className={styles.emptyMessageContainer}> 
                {rendaMensalEmpty ? (
                  <>
                    <Typography color='error.main' variant='subtitle2' >O campo "Renda Mensal" é obrigatório</Typography>
                  </>
                ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  