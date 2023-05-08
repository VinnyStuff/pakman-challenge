import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask'

export default function InputNumberMask(props) {
  const { mask, placeholder, id, ...rest } = props;

  return (
    <>
      <InputMask mask={mask} {...rest} maskChar={null}>
        {() => <TextField size="small" variant="outlined" placeholder={placeholder} id={id} fullWidth/>}
      </InputMask>
    </>
  );
}

/* client.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of InputElement which is inside StrictMode. Instead, add a ref directly to 
the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node */
