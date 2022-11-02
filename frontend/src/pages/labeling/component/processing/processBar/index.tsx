import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ProcessBarDiv } from '../../../styles/processing';
import { palette } from '../../../../../assets/Palette';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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

  const progress = number * 10 + 10

  return (
    <ProcessBarDiv>
      <LinearProgressWithLabel value={progress} />
    </ProcessBarDiv>
  );
}
