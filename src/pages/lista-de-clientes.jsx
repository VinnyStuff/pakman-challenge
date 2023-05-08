import React, {useState, useEffect, forwardRef, useRef, useImperativeHandle, createRef} from 'react'
import styles from '../styles/lista-de-clientes.module.css'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import { useRouter } from "next/router";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomerList() {
  const dividerColor = useTheme().palette.divider;
  const router = useRouter();

  const [clients, setClients] = useState([]);
  const [clientsToShow, setClientsToShow] = useState([])

  useEffect(() => {
    setClients(getClients());
  }, []);
  useEffect(() => {
    setClientsToShow(clients);
  }, [clients]);

  function getClients(){
    const newClients = [];

    for (let key in localStorage) {
      if (key.includes("cliente")) {
        newClients.push(JSON.parse(localStorage.getItem(key)));
      }""
    }

    return newClients;
  }

  const clientsRef = useRef({});
  clients.forEach((_, i) => {
    clientsRef.current[i] = createRef();
  });

  const handleDeleteButton = () => {
    for (let i = 0; i < clients.length; i++) {
      clientsRef.current[i].current.deleteClient();
    }

    if (clients.length === getClients().length){
      handleClick()
    }

    setClients(getClients());
  }

  //searchBar
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    setClientsToShow(clients.filter(client => JSON.stringify(client).toLowerCase().includes(searchInput.toLowerCase())));
  }, [searchInput]);

  //material
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className={styles.customerListContainer}>
        { clients.length > 0 ? (
          <>
            <div className={styles.listContainer}>
               <div className={styles.buttonsContainer}>
                <div className={styles.searchBarContainer}>
                  <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', height: '100%', border: `1px solid ${dividerColor}`}}>
                    <InputBase
                      sx={{ pl: '15px', flex: 1}}
                      placeholder="Pesquise seus clientes"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <IconButton type="button" disabled sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </div>
                <Button variant="outlined" color="primary" sx={{minWidth: '45px', mr: '5px'}} onClick={() => handleDeleteButton()}>
                  <DeleteIcon sx={{position: 'absolute', }}/>
                </Button>
              </div>
              { clientsToShow.length > 0 ? (
                  <>
                  <div className={styles.titleContainer}>
                    <div className={styles.nameContainer}>
                      <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Nome</Typography>
                    </div>
                    <div className={styles.cpfContainer}>
                      <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>CPF</Typography>
                    </div>
                    <div className={styles.telephoneContainer}>
                      <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Telefone</Typography>
                    </div>
                    <div className={styles.locationContainer}>
                      <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>Localização (Estado)</Typography>
                    </div>
                    <div className={styles.emailContainer}>
                      <Typography variant='subtitle1' color='text.disabled' sx={{fontWeight: 'bold'}}>E-mail</Typography>
                    </div>
                  </div>
                   {clientsToShow.map((client, index) =>(
                      <Client key={client.dados_pessoais.cpf} props={client}  ref={clientsRef.current[index]}/>
                    ))}
                  </>
                ) : 
                  <>
                    <Typography variant='subtitle1' color='text.disabled'  sx={{fontWeight: 'bold', textAlign: 'center', pt: '18px'}}>Não há resultados para a sua busca.</Typography>
                  </>
                }
            </div>
          </>
        ) : 
          <>
            <div className={styles.emptyStateContainer}>
              <Typography variant='h6' color='text.secondary' sx={{fontWeight: 'bold'}}>Lista de clientes está vazia.</Typography>
              <Typography variant='body1' color='text.disabled' sx={{fontWeight: 'bold'}}>pressione o botão abaixo para adicionar um cliente:</Typography>
              <Button variant="contained" startIcon={<PlaylistAddOutlinedIcon/>} sx={{borderRadius: '30px', mt: '16px', width: 'max-content'}} onClick={() => router.push('/novo-cliente')}>Novo Cliente</Button>    
            </div>
          </>
        }
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} sx={{zIndex: '9999999999999'}}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%'}}>
          Para excluir um cliente, é necessário selecioná-lo primeiro.
        </Alert>
      </Snackbar>
    </>
  );
}


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

const Client = forwardRef(( props, ref ) => {
  const client = props.props;
  const dados_pessoais = client.dados_pessoais;
  const endereços = [client.endereço_1, client.endereço_2];

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dividerColor = useTheme().palette.divider;

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  useImperativeHandle(ref, () => ({
    deleteClient() {
      if(checked){
        localStorage.removeItem(`cliente-${dados_pessoais.cpf}`)
      }
    }
  }));

  //mui
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card sx={{position: 'relative', border: `1px solid ${dividerColor}`, mb: expanded ? '6px' : '-1px', boxShadow:'none'}} >
        <CardContent sx={{display: 'flex', height: '45px', p: '0', pr: '52px'}}>
          <Checkbox  sx={{ml: '2px'}} inputProps={{ 'aria-label': 'controlled' }} checked={checked} onChange={handleCheckboxChange}/>
          <div className={styles.customerParametersContainer}>
            <div className={styles.nameContainer}>
              <Typography variant='subtitle1'>{dados_pessoais.nomeCompleto.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Typography>
            </div>
            <div className={styles.cpfContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
              <Typography variant='subtitle1'>{dados_pessoais.cpf}</Typography>
            </div>
            <div className={styles.telephoneContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
              <Typography variant='subtitle1'>{dados_pessoais.telefone1}</Typography>
            </div>
            <div className={styles.locationContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
              <Typography variant='subtitle1'>{endereços[0].estado}</Typography>
            </div>
            <div className={styles.emailContainer} style={{ borderLeft: `1px solid ${dividerColor}` }}>
              <Typography variant='subtitle1'>{dados_pessoais.email}</Typography>
            </div>
          </div>
        </CardContent>

        <ExpandMore
            sx={{position: 'absolute', top: '0', mt:'3px', right: '0', mr: '8px'}}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ borderTop: `1px solid ${dividerColor}`, whiteSpace: 'normal'}}>
            <div className={styles.cardExtendContainer}>
              <div className={styles.clientPersonalInformations}>
                <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Dados pessoais: </Typography>
                <Typography variant='subtitle1'>Nome: {dados_pessoais.nomeCompleto.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Typography>
                <Typography variant='subtitle1'>E-mail: {dados_pessoais.email}</Typography>
                <Typography variant='subtitle1'>Telefone 1: {dados_pessoais.telefone1}</Typography>
                <Typography variant='subtitle1'>Telefone 2 (Opcional): {dados_pessoais.telefone2}</Typography>
                <Typography variant='subtitle1'>Data de nascimento: {dados_pessoais.dataDeNascimento}</Typography>
                <Typography variant='subtitle1'>CPF: {dados_pessoais.cpf}</Typography>
                <Typography variant='subtitle1'>Renda mensal: R${dados_pessoais.rendaMensal}</Typography>
              </div>
              
              {endereços.map((endereço, index) => (
                <div key={index}>
                  <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Endereço {index + 1} {index === 1 ? '(Opcional)' : ''}: </Typography>
                  <Typography variant='subtitle1'>CEP: {endereço.cep}</Typography>
                  <Typography variant='subtitle1'>Nome da Rua: {endereço.nomeDaRua}</Typography>
                  <Typography variant='subtitle1'>Número:{endereço.numero} </Typography>
                  <Typography variant='subtitle1'>Complemento: {endereço.complemento}</Typography>
                  <Typography variant='subtitle1'>Bairro: {endereço.bairro}</Typography>
                  <Typography variant='subtitle1'>Estado: {endereço.estado}</Typography>
                  <Typography variant='subtitle1'>Cidade: {endereço.cidade}</Typography>
                </div>
              ))}
              <Fab color="primary" aria-label="edit" sx={{ height: '40px', width: '40px', position: 'absolute', bottom: '0', right: '0', mr: '15px' , mb: '15px'}} onClick={handleClickOpenDialog}>
                <EditIcon />
              </Fab>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    
      <div>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          sx={{zIndex: '9999999'}}
          maxWidth="false"
          className={styles.dialogContainer}
        >
        <DialogTitle>
          {`Cliente #${dados_pessoais.cpf.replace(/[.-]/g, '')}`}
        </DialogTitle>
        <DialogContent className={styles.dialogContainer}>
          <div className={styles.dialog}>
            <div>
              <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Dados Pessoais:</Typography> 

              <Typography variant='subtitle1' color='text.disabled'>Nome</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={dados_pessoais.nome} disabled sx={{mb: '8px'}}/>
              
              <Typography variant='subtitle1' color='text.disabled'>Sobrenome</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={dados_pessoais.sobrenome} disabled sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>E-mail</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={dados_pessoais.email} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Telefone 1</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={dados_pessoais.telefone1} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Telefone 2</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={dados_pessoais.telefone2} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'  color='text.disabled'>Data de Nascimento</Typography> 
              <TextField size="small" disabled variant="outlined"fullWidth value={dados_pessoais.dataDeNascimento} sx={{mb: '8px'}}/>
              
              <Typography variant='subtitle1' color='text.disabled'>CPF</Typography> 
              <TextField size="small" disabled variant="outlined"fullWidth value={dados_pessoais.cpf} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Renda Mensal</Typography> 
              
            </div>
            <div>
              <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Endereço 1:</Typography> 

              <Typography variant='subtitle1'>CEP</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].cep} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Nome da Rua</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].nomeDaRua} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Número</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].numero} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Complemento</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].complemento} sx={{mb: '8px'}}/>
              
              <Typography variant='subtitle1'>Bairro</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].bairro} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Estado</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].estado} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Cidade</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[0].cidade}/>
            </div>
            <div>
              <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Endereço 2:</Typography> 

              <Typography variant='subtitle1'>CEP</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].cep} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Nome da Rua</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].nomeDaRua} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Número</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].numero} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Complemento</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].complemento} sx={{mb: '8px'}}/>
              
              <Typography variant='subtitle1'>Bairro</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].bairro} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Estado</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].estado} sx={{mb: '8px'}}/>

              <Typography variant='subtitle1'>Cidade</Typography> 
              <TextField size="small" variant="outlined"fullWidth value={endereços[1].cidade}/>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Descartar Alterações</Button>
          <Button onClick={handleCloseDialog} autoFocus>Salvar Alterações</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
})