import styles from '../../styles/FormComplete.module.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Typography from '@mui/material/Typography'

export default function FormComplete() {
    return (
      <>
        <div className={styles.formCompleteContainer}>
          <div className={styles.iconContainer}>
            <TaskAltIcon sx={{fontSize: '150px'}} color="primary"/>
          </div>
          <Typography variant="subtitle" color='text.secondary'>Cliente salvo com sucesso!</Typography>
        </div>
      </>
    );
}
  
