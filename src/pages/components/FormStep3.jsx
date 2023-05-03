import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormStep3() {
    return (
      <>
         <div className='border-solid border-2 border-zinc-600	'>
            <TextField  id="outlined-basic" label="Data de Nascimento" variant="outlined"/>
            <TextField  id="outlined-basic" label="CPF" variant="outlined"/>
            <TextField  id="outlined-basic" label="Rensa Mensal" variant="outlined"/>
        </div>
      </>
    );
}
  