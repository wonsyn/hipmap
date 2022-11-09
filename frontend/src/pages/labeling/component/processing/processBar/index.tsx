import { useState, useEffect } from 'react';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { ProcessBarDiv, EmphasizingImg } from '../../../styles/processing';
import { palette } from '../../../../../assets/Palette';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import emphasizingImg from "../../../../../assets/labeling/processing/emphasizingImage.png"

interface LinearWithValueLabelProps{
  number: number;
}

const theme = createTheme({
  overrides: {
    // Style sheet name 
    MuiLinearProgress: {
      // Name of the rule
      bar: {
        // Some CSS
        background: palette.subColorGradient3,
        borderRadius: 0,
        border: 0,
      },
      root: {
        height: 15,
        border: 0,
        borderRadius: 10
      }
    },
  },
});

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      
        <ThemeProvider theme={theme}>
          <LinearProgress 
          variant="determinate"
          {...props}
          />
        </ThemeProvider>
    </Box>
  );
}

export default function LinearWithValueLabel({number}: LinearWithValueLabelProps) {

  const progress = (100 / 11) + number * (100 / 11) 

  return (
    <ProcessBarDiv>
      <EmphasizingImg src={emphasizingImg} number={progress}/>
      <LinearProgressWithLabel value={progress} />
    </ProcessBarDiv>
  );
}
