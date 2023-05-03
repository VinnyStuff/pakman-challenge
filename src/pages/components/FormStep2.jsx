import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

export default function FormStep2() {

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
        <div className={styles.inputContainer}>
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
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>Cidade</Typography>
            <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
          </div>
        </div>
      </div>
    </>
  );
}
  