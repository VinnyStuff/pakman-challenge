import styles from '../../styles/FormStep1.module.css'
import TextField from '@mui/material/TextField';
import FormProgressBar from './FormProgressBar';
import Typography from '@mui/material/Typography';

export default function FormStep1() {
    return (
      <>
        <div className={styles.wrapper}>
          <FormProgressBar/>
          <div className={styles.formContainer}>
            <div className={styles.namesContainer}>
              <div className={styles.inputs}>
                  <Typography variant='subtitle1'>Nome</Typography>
                  <TextField size="small" id="outlined-basic" variant="outlined"/>
                </div>
                <div className={styles.inputs}>
                  <Typography variant='subtitle1'>Sobrenome</Typography>
                  <TextField size="small" id="outlined-basic" variant="outlined"/>
                </div>
            </div>
              

              <div className={styles.inputs}>
                <Typography variant='subtitle1'>E-mail</Typography>
                <TextField size="small" id="outlined-basic" variant="outlined"/>
              </div>
              <div className={styles.inputs}>
                <Typography variant='subtitle1'>Telefone</Typography>
                <TextField size="small" id="outlined-basic" variant="outlined"/>
              </div>
          </div>
        </div>
      </>
    );
}
  