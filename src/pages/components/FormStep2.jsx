import styles from '../../styles/FormSteps.module.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import React, {useState, useEffect, useRef} from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputNumberMask from './myMaterial/InputNumberMask'

export default function FormStep2({handleNextButtonPressed, handleBackButtonPressed, handleInputsValues}) {

  const [currentAddress, setCurrentAddress] = useState(1);

  const [inputsAddressValues, setInputsAddressValues] = useState({
    endereço_1:{
      cep: '',
      nomeDaRua: '',
      numero: '',
      complemento: '', /* opcional */
      bairro: '',
      estado: '',
      cidade: '',
    },
    endereço_2:{ /* opcional  ↓ */
      cep: '',
      nomeDaRua: '',
      numero: '',
      complemento: '',
      bairro: '',
      estado: '',
      cidade: '',
    },
  });

  const checkAddress2IsValid = () =>{
    if(inputsAddressValues.endereço_2.cep.length === 0 && 
      inputsAddressValues.endereço_2.nomeDaRua.length === 0 &&
      inputsAddressValues.endereço_2.numero.length === 0 &&
      inputsAddressValues.endereço_2.estado === null &&
      inputsAddressValues.endereço_2.cidade.length === 0
      ){
      return true;
    }
    else if (inputsAddressValues.endereço_2.cep.length >= 9 && 
    inputsAddressValues.endereço_2.nomeDaRua.length > 0 &&
    inputsAddressValues.endereço_2.numero.length > 0 &&
    inputsAddressValues.endereço_2.estado !== null &&
    inputsAddressValues.endereço_2.cidade.length > 0
    ){
      return true;
    }
    else{
      return false;
    }
  }

  const handleAdress1InputsValues = (value) => {
    setInputsAddressValues({...inputsAddressValues, 
      endereço_1: value,
    })
  }
  const handleAdress2InputsValues = (value) => {
    setInputsAddressValues({...inputsAddressValues, 
      endereço_2: value,
    })
  }

  const [canClickNextButton, setCanClickNextButton] = useState(false);

  useEffect(() =>{
    setCanClickNextButton(
      inputsAddressValues.endereço_1.cep.length >= 9 && 
      inputsAddressValues.endereço_1.nomeDaRua.length > 0 && 
      inputsAddressValues.endereço_1.numero.length > 0 && inputsAddressValues.endereço_1.bairro.length > 0 && 
      inputsAddressValues.endereço_1.estado !== null && 
      inputsAddressValues.endereço_1.cidade.length > 0 &&
      checkAddress2IsValid())
  }, [inputsAddressValues]);


  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.addressContainer}>
          <Typography color={currentAddress === 1 ? 'text.primary' : 'text.disabled'} variant='subtitle1' sx={{width: 'max-content', mr: '26px', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setCurrentAddress(1)} >Endereço 1</Typography>
          <Typography color={currentAddress === 2 ? 'text.primary' : 'text.disabled'} variant='subtitle1' sx={{width: 'max-content', ml: '5px', transition: '0.3s', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setCurrentAddress(2)}>Endereço 2 (opcional)</Typography>
        </div>
          
        
        <div style={{display: currentAddress === 1 ? 'inherit' : 'none'}} id='address1'>
          <CurrentForm handleValues={handleAdress1InputsValues} address={2}/>
        </div>
        
        <div style={{display: currentAddress === 2 ? 'inherit' : 'none'}} id='address2'>
          <CurrentForm handleValues={handleAdress2InputsValues} address={2}/>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{mx: '5px'}} onClick={handleBackButtonPressed}>Voltar</Button>
        <Button disabled={!canClickNextButton} variant="contained" endIcon={<ArrowForwardIcon/>} sx={{mx: '5px'}} onClick={() => {handleInputsValues(inputsAddressValues); handleNextButtonPressed()}}>Avançar</Button>
      </div>
    </>
  )
}

function CurrentForm({handleValues, address}){
  const [inputsValues, setTnputsValue] = useState({
    cep: '',
    nomeDaRua: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: null,
    cidade: '',
  })
  const [isEmptyInputsValues, setIsEmptyInputsValues] = useState({
    cep: false,
    nomeDaRua: false,
    numero: false,
    bairro: false,
    estado: false,
    cidade: false,
  })
  const [cepNotFound, setCepNotFound] = useState(false)

  const handleBlur = (event) =>{
    const { id, value } = event.target;
    if(value.length === 0){
      setIsEmptyInputsValues({...isEmptyInputsValues, 
        [id]: true
      })
    }
    else{
      setIsEmptyInputsValues({...isEmptyInputsValues, 
        [id]: false
      })
    }
  }

  useEffect(() =>{ 
    handleValues(inputsValues);
  }, [inputsValues]);

  const states = [  
    { uf: 'AC', nome: 'Acre' },  
    { uf: 'AL', nome: 'Alagoas' },  
    { uf: 'AP', nome: 'Amapá' },  
    { uf: 'AM', nome: 'Amazonas' },  
    { uf: 'BA', nome: 'Bahia' },  
    { uf: 'CE', nome: 'Ceará' },  
    { uf: 'DF', nome: 'Distrito Federal' },  
    { uf: 'ES', nome: 'Espírito Santo' },  
    { uf: 'GO', nome: 'Goiás' },  
    { uf: 'MA', nome: 'Maranhão' },  
    { uf: 'MT', nome: 'Mato Grosso' },  
    { uf: 'MS', nome: 'Mato Grosso do Sul' },  
    { uf: 'MG', nome: 'Minas Gerais' },  
    { uf: 'PA', nome: 'Pará' },  
    { uf: 'PB', nome: 'Paraíba' },  
    { uf: 'PR', nome: 'Paraná' },  
    { uf: 'PE', nome: 'Pernambuco' },  
    { uf: 'PI', nome: 'Piauí' },  
    { uf: 'RJ', nome: 'Rio de Janeiro' },  
    { uf: 'RN', nome: 'Rio Grande do Norte' },  
    { uf: 'RS', nome: 'Rio Grande do Sul' },  
    { uf: 'RO', nome: 'Rondônia' },  
    { uf: 'RR', nome: 'Roraima' },  
    { uf: 'SC', nome: 'Santa Catarina' },  
    { uf: 'SP', nome: 'São Paulo' },  
    { uf: 'SE', nome: 'Sergipe' },  
    { uf: 'TO', nome: 'Tocantins' }
  ];

  const numeroRef = useRef(null);
  useEffect(() => {
    if(inputsValues.cep.length >= 9){
      setLocationByCep(inputsValues.cep)
    }
  }, [inputsValues.cep]);

  async function setLocationByCep(cep){
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      setTnputsValue({
        ...inputsValues,
        nomeDaRua: data.logradouro,
        cidade: data.localidade,
        bairro: data.bairro,
        estado: states.find((state) => state.uf === data.uf).nome,
      });

      setCepNotFound(false);
      
      numeroRef.current.focus();

    } catch (error) {
      console.error(error);

      setTnputsValue({...inputsValues, 
        nomeDaRua: '',
        cidade: '',
        bairro: '',
        estado: '',
      });

      setCepNotFound(true);
    }
  }

  const checkAddress2 = () =>{
    if(address === 1){
      return true;
    }
    else {
      if(inputsValues.cep.length === 0 && 
        inputsValues.nomeDaRua.length === 0 &&
        inputsValues.numero.length === 0 &&
        inputsValues.estado === null &&
        inputsValues.cidade.length === 0
        ){
        return false;
      }
      else{
        return true;
      }
    }
  }

  return(
    <>
     <div className={styles.inputContainer} >
        <div className={styles.inputs}>
            <Typography variant='subtitle1'>*CEP</Typography>
            <InputNumberMask onBlur={handleBlur} mask="99999-999" id='cep' value={inputsValues.cep} onChange={(e) =>  setTnputsValue({...inputsValues, cep: e.target.value})}/>
            <div className={styles.errorMessageContainer}>
              { inputsValues.cep.length === 0 && isEmptyInputsValues.cep && checkAddress2()  ? (
                <>
                  <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                </>
              ): inputsValues.cep.length > 0 && inputsValues.cep.length < 9 ? (
                <>
                  <Typography variant='subtitle2' color='error'>É necessário no minimo 8 dígitos.</Typography> 
                </>
              ) : null }   

              { cepNotFound  && inputsValues.cep.length >= 9 ? (
                <>
                  <Typography variant='subtitle2' color='error'>CEP inválido</Typography> 
                </>
              ): null}
            </div>
          </div>
          <div className={styles.inputs}>
            <Typography variant='subtitle1'>*Logradouro</Typography> {/* Nome da Rua */}
            <TextField onBlur={handleBlur} id='nomeDaRua' size="small" variant="outlined" fullWidth value={inputsValues.nomeDaRua} onChange={(e) =>  setTnputsValue({...inputsValues, nomeDaRua: e.target.value})}/>
            <div className={styles.errorMessageContainer}>
              { inputsValues.nomeDaRua.length === 0 && isEmptyInputsValues.nomeDaRua && checkAddress2()? (
                <>
                  <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
                </>
              ): null}
            </div>
          </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Número</Typography>
          <TextField type='number' size="small" variant="outlined" onBlur={handleBlur} inputRef={numeroRef} id='numero' value={inputsValues.numero} onChange={(e) => e.target.value.length < 7 && setTnputsValue({...inputsValues, numero: e.target.value})}/>
          <div className={styles.errorMessageContainer}>
            { inputsValues.numero.length === 0 && isEmptyInputsValues.numero  && checkAddress2() ? (
              <>
                <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
              </>
            ): null}
          </div>
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>Complemento</Typography>
          <TextField size="small" variant="outlined" name='complemento' fullWidth onChange={(e) =>  setTnputsValue({...inputsValues, complemento: e.target.value})}/>
        </div>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Bairro</Typography>
          <TextField onBlur={handleBlur} id='bairro' size="small" variant="outlined" name='bairro' fullWidth value={inputsValues.bairro} onChange={(e) =>  setTnputsValue({...inputsValues, bairro: e.target.value})}/>
          <div className={styles.errorMessageContainer}>
            { inputsValues.bairro.length === 0 && isEmptyInputsValues.bairro  && checkAddress2() ? (
              <>
                <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
              </>
            ): null}
          </div>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Estado</Typography>
          <Autocomplete
            size="small"
            options={states.map((estado) => estado.nome)}
            value={inputsValues.estado}
            renderInput={(params) => <TextField {...params} label="" />}
            onChange={(event, value) =>
              setTnputsValue((prevState) => ({
                ...prevState,
                estado: value,
              }))}
            onBlur={handleBlur} 
            id='estado'
          />
          <div className={styles.errorMessageContainer}>
            { isEmptyInputsValues.estado && inputsValues.estado === '' && checkAddress2()   ? (
              <>
                <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
              </>
            ): null}
          </div>
        </div>
        
        <div className={styles.inputs}>
          <Typography variant='subtitle1'>*Cidade</Typography>
          <TextField  onBlur={handleBlur} id='cidade' size="small" variant="outlined" fullWidth value={inputsValues.cidade} onChange={(e) =>  setTnputsValue({...inputsValues, cidade: e.target.value})}/>
          <div className={styles.errorMessageContainer}>
            { inputsValues.cidade.length === 0 && isEmptyInputsValues.cidade && checkAddress2()  ? (
              <>
                <Typography variant='subtitle2' color='error'>Este campo é obrigatório</Typography> 
              </>
            ): null}
          </div>
        </div>
      </div>
    </>
  );
}

