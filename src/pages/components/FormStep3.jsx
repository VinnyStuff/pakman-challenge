import styles from '../../styles/FormStep3.module.css'
import TextField from '@mui/material/TextField';

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
  