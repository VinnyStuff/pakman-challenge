import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import React, {useState, useEffect} from 'react'

export default function FormStep2() {

  const [amoutAddresses, setAmoutAddresses] = useState(0)
  const [currentAddress, setCurrentAddress] = useState(0);
  const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
  ];

  return (
    <>
      <div className={styles.formContainer}>
        <Box sx={{display: 'flex', mb: '10px'}}>
          {Array.from({ length: amoutAddresses + 1}).map((_, index) =>(
              <Typography variant='subtitle1' sx={{width: 'max-content', mr: '26px', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer',  ':hover': {transform: 'scale(1.05)', transition: '0.1s'}}} key={index} onClick={() => setCurrentAddress(index)}>Endereço {index + 1}</Typography>
          ))}
        </Box>
          
        {Array.from({ length: amoutAddresses + 1}).map((_, index) => (
          <div key={index}>
              {index === currentAddress ? (
                <>
                  bla{index + 1}
                </>
              ) : null}
          </div>
        ))}

        <div className={styles.inputContainer} >
          <div className={styles.inputs}>
              <Typography variant='subtitle1'>CEP</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>Nome da Rua</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Número</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Complemento</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Bairro</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Estado</Typography>
            <Autocomplete
              size="small"
              id="disabled-options-demo"
              options={states}
              renderInput={(params) => <TextField {...params} label="" />}
            />
             <div className={styles.emptyMessageContainer}> 
              {/* <Typography variant='subtitle2'>O campo "Seu telefone" é obrigatório</Typography> */}
            </div>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Cidade</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
        </div>
        <Typography variant='subtitle1' sx={{textDecoration: 'underline' , margin: '0 auto', cursor: 'pointer', width: 'max-content', px: '20px', py: '5px', mt: '-12px', transition: '0.3s',  ':hover': {transform: 'scale(1.05)', transition: '0.3s'}}} onClick={() => setAmoutAddresses(amoutAddresses + 1)}>
          Adicionar mais um endereço (opcional)
        </Typography>
      </div>
    </>
  );
}

