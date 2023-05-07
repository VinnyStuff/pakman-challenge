import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask'

export default function InputNumberMask(props) {
    const { mask, placeholder, id, ...rest } = props;
  
    return (
      <>
        <InputMask mask={mask} {...rest} maskChar={null}>
          {() => <TextField size="small" variant="outlined" id={id} fullWidth/>}
        </InputMask>
      </>
    );
  }
  