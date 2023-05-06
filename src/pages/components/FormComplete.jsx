import styles from '../../styles/FormSteps.module.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Typography from '@mui/material/Typography'
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';

export default function FormComplete({handleResetButtonPressed}) {
  const router = useRouter();

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.iconContainer}>
          <TaskAltIcon sx={{fontSize: '150px'}} color="primary"/>
          <Typography variant="subtitle" color='text.secondary' sx={{mt: '5px'}}>Cliente salvo com sucesso!</Typography>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" startIcon={<ViewListIcon/>} sx={{mx: '5px'}} onClick={() => router.push('/lista-de-clientes')}>Ver a lista de clientes</Button>
        <Button variant="contained" startIcon={<AddIcon/>} sx={{mx: '5px', height: 'max-content'}} onClick={handleResetButtonPressed}>Adicione um novo cliente</Button>
      </div>
    </>
  );
}
  
