import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormStep3() {
    return (
      <>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputs}>
                <Typography variant='subtitle1'>Data de Nascimento</Typography>
                <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
              </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>CPF</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
            <div className={styles.inputs}>
              <Typography variant='subtitle1'>Renda Mensal</Typography>
              <TextField size="small" id="outlined-basic" variant="outlined" fullWidth/>
            </div>
          </div>
        </div>
      </>
    );
}
  