import styles from '../../styles/FormProgressBar.module.css'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Dados pessoais',
    'Endereço',
    'Detalhes adicionais',
  ];

export default function FormProgressBar({currentStep}) {
    return (
      <>
         <div className={styles.fromProgressBarContainer}>
            <Stepper activeStep={currentStep - 1} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
         </div>
      </>
    );
}
  