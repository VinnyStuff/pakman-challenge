import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formStep1: {
        nome: '',
        sobrenome: '',
        email: '',
        telefone1: '',
        telefone1: ''
    },
    formStep2: {
        endereco1: {
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        estado: '',
        cidade: ''
        },
        endereco2: {
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        estado: '',
        cidade: ''
        }
    },
    formStep3: {
        dataDeNascimento: '',
        cpf: '',
        rendaMensal: '',
        isFilled: false,
    }
}

export const newClientFormsSlice = createSlice({
  name: 'newClientForms',
  initialState,
  reducers: {
    updateNome: (state, action) =>{
        state.formStep1.nome = action.payload;
    },
    updateSobrenome: (state, action) =>{
        state.formStep1.sobrenome = action.payload;
    },
    updateEmail: (state, action) =>{
        state.formStep1.email = action.payload;
    },    
    updateTelefone1: (state, action) =>{
        state.formStep1.telefone1 = action.payload;
    },    
    updateTelefone2: (state, action) =>{
        state.formStep1.telefone2 = action.payload;
    },    


    

    updateDataDeNascimento: (state, action) =>{
        state.formStep3.dataDeNascimento = action.payload;
    },
    updateCpf: (state, action) =>{
        state.formStep3.cpf = action.payload;
    },
    updateRendaMensal: (state, action) =>{
        state.formStep3.rendaMensal = action.payload;
    },
    isFormStep3Filled: (state, action) =>{
        state.formStep3.isFilled = action.payload;
    }
  },
})

export const { 
    updateNome, updateSobrenome, updateEmail, updateTelefone1, updateTelefone2,

    updateDataDeNascimento, updateCpf, updateRendaMensal, isFormStep3Filled } = newClientFormsSlice.actions;

export const newClientForms = (state) => state.newClientForms;

export default newClientFormsSlice.reducer