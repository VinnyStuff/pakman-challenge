import styles from '../../styles/FormStep1.module.css'
import TextField from '@mui/material/TextField';

export default function FormStep1() {
    return (
      <>
        <div className='border-solid border-2 border-indigo-600'>
            <TextField  id="outlined-basic" label="Nome" variant="outlined"/>
            <TextField  id="outlined-basic" label="Sobrenome" variant="outlined"/>
            <TextField  id="outlined-basic" label="E-mail" variant="outlined"/>
            <TextField  id="outlined-basic" label="Telefone" variant="outlined"/>
        </div>
      </>
    );
}
  