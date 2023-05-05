import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider'
import React, {useState, useEffect} from 'react'

export default function FormStep2() {

  const [amoutAddresses, setAmoutAddresses] = useState(1)
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
        {Array.from({ length: amoutAddresses }).map((_, index) =>(
          <div key={index}>
            <div className={styles.inputContainer} key={index}>
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
            {amoutAddresses >= 2 ? (
              <>
                <Divider sx={{my: '10px'}}/>
              </>
            ):null}
          </div>
        ))}
        <Typography variant='subtitle1' sx={{textDecoration: 'underline' , margin: '0 auto', cursor: 'pointer', width: 'max-content', px: '20px', py: '8px', mt: '-10px', transition: '0.3s',  ':hover': {transform: 'scale(1.05)', transition: '0.3s'},}} onClick={() => setAmoutAddresses(amoutAddresses + 1)}>
          Adicionar mais um endereço (opcional)
        </Typography>
      </div>
    </>
  );
}

