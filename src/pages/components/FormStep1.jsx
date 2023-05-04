import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormStep1() {
    return (
      <>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputs}>
                <Typography variant='subtitle1'>Nome</Typography>
                <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
              </div>
              <div className={styles.inputs}>
                <Typography variant='subtitle1'>Sobrenome</Typography>
                <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
              </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>E-mail</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>Seu telefone</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
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
  
