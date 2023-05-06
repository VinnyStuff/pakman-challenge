import styles from '../styles/index.module.css'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <Card className={styles.welcomeContainer}>
          <img src='/images/pakman-vetor-logo.png' alt='logo' height={'100px'}/>
          <div className={styles.titleContainer}>
            <Typography variant="h3" color='text.primary' sx={{fontWeight: 'bold', mb: '8px'}}>Bem vindo!</Typography>
            <Typography variant="body1" color='text.secondary'>Bem-vindo à nossa plataforma de gerenciamento de clientes! Aqui, você pode acessar duas seções principais: "Novo Cliente" para adicionar informações de novos clientes e "Lista de Clientes" para monitorar seus dados. Aproveite!</Typography>
          </div>
          <div>
            <Button variant="contained" startIcon={<PlaylistAddOutlinedIcon/>} sx={{mx: '5px', borderRadius: '30px', mb: '12px'}} onClick={() => router.push('/novo-cliente')}>Novo Cliente</Button>
            <Button variant="outlined" startIcon={<ViewListOutlinedIcon/>} sx={{mx: '5px', borderRadius: '30px', mb: '12px'}} onClick={() => router.push('/lista-de-clientes')}>Lista de Clientes</Button>
          </div>
        </Card>  
      </div>
    </>
  );
}