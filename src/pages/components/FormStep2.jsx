import styles from '../../styles/FormStep2.module.css'
import TextField from '@mui/material/TextField';

export default function FormStep2() {
    return (
      <>
         <div className='border-solid border-2 border-rose-600'>
            <TextField  id="outlined-basic" label="CEP" variant="outlined"/>
            <TextField  id="outlined-basic" label="Endereço 1" variant="outlined"/>
            <TextField  id="outlined-basic" label="Endereço 2" variant="outlined"/>
        </div>
      </>
    );
}
  