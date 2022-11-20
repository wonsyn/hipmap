import { useState, useEffect } from 'react';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { ProcessBarDiv, ProcessBarDiv2, EmphasizingImg, ProcessBar, ProcessBarWrapping } from '../../../styles/processing';
import { palette } from '../../../../../assets/Palette';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import emphasizingImg from "../../../../../assets/labeling/processing/emphasizingImage.png"
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// interface LinearWithValueLabelProps{
//   number: number;
// }

// const theme = createTheme({
//   overrides: {
//     // Style sheet name 
//     MuiLinearProgress: {
//       // Name of the rule
//       bar: {
//         // Some CSS
//         background: palette.subColorGradient3,
//         borderRadius: 0,
//         border: 0,
//       },
//       root: {
//         height: 15,
//         border: 0,
//         borderRadius: 10
//       }
//     },
//   },
// });

// function LinearProgressWithLabel(props) {
//   return (
//     <Box display="flex" alignItems="center">
      
//         <ThemeProvider theme={theme}>
//           <LinearProgress 
//           variant="determinate"
//           {...props}
//           />
//         </ThemeProvider>
//     </Box>
//   );
// }


// export default function LinearWithValueLabel(number) {

//   const progress = (100 / 11) + number.number * (100 / 11) 

//   return (
//     <ProcessBarDiv>
//       <EmphasizingImg src={emphasizingImg} number={progress}/>
//       <LinearProgressWithLabel value={progress} />
//     </ProcessBarDiv>
//   );
// }

export default function LinearWithValueLabel(number) {
  const progress = (100 / 11) + number.number * (100 / 11) 
  console.log(progress)
  return (
    <ProcessBarDiv2>
        <EmphasizingImg src={emphasizingImg} number={progress*0.85}/>
      <ProcessBarDiv>
      <Progress percent={progress} status="active"/>
    </ProcessBarDiv>
    </ProcessBarDiv2>
      
  );
}
// export default function LinearWithValueLabel(number) {
//   const progress = (100 / 11) + number.number * (100 / 11) 
//   console.log(progress)
//   return (
//     <>
//       <ProcessBarDiv2>
//         <EmphasizingImg src={emphasizingImg} number={progress*0.93}/>
//     <ProcessBarDiv>
//         <ProcessBarWrapping>
//           <Progress percent={progress} theme={{
//     success: {
//       symbol: '🏄‍',
//       color: 'rgb(223, 105, 180)'
//     },
//     active: {
//       symbol: '😀',
//       color: '#fbc630'
//     },
//     default: {
//       symbol: '😱',
//       color: '#fbc630'
//     }
//   }}/>
//         </ProcessBarWrapping>
//     </ProcessBarDiv>
//       </ProcessBarDiv2>
//     </>
      
      
//   );
// }