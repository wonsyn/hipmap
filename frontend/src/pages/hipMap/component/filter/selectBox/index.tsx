import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { SelectDiv } from '../../../styles/fullmap';
import { useState } from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export default function SelectBox() {
  const classes = useStyles();
  const [si, setSi] = useState<string>('');
  const [gu, setGu] = useState<string>('');
  const [dong, setDong] = useState<string>('');
  const [openSi, setOpenSi] = useState(false);
  const [openGu, setOpenGu] = useState(false);
  const [openDong, setOpenDong] = useState(false);

  const handleChangeSi = (event: React.ChangeEvent<{ value: any }>) => {
    setSi(event.target.value);
    
  };
  const handleChangeGu = (event: React.ChangeEvent<{ value: any }>) => {
    setGu(event.target.value);
    
  };
  const handleChangeDong = (event: React.ChangeEvent<{ value: any }>) => {
    setDong(event.target.value);
    
  };

  const handleCloseSi = () => {
    setOpenSi(false);
  };
  const handleCloseGu = () => {
    setOpenGu(false);
  };
  const handleCloseDong = () => {
    setOpenDong(false);
  };

  const handleOpenSi = () => {
    setOpenSi(true);
  };
  const handleOpenGu = () => {
    setOpenGu(true);
  };
  const handleOpenDong = () => {
    setOpenDong(true);
  };

  const areaSi = []

  return (
    <SelectDiv>
      <FormControl className={classes.formControl}>
        <InputLabel id="si">시</InputLabel>
        <Select
          labelId="si"
          id="locationSi"
          open={openSi}
          onClose={handleCloseSi}
          onOpen={handleOpenSi}
          value={si}
          onChange={handleChangeSi}
        >
          
          <MenuItem value={"10"}>Ten</MenuItem>
          <MenuItem value={"20"}>Twenty</MenuItem>
          <MenuItem value={"30"}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="gu">구/군</InputLabel>
        <Select
          labelId="gu"
          id="locationGu"
          open={openGu}
          onClose={handleCloseGu}
          onOpen={handleOpenGu}
          value={gu}
          onChange={handleChangeGu}
        >
          
          <MenuItem value={"10"}>Ten</MenuItem>
          <MenuItem value={"20"}>Twenty</MenuItem>
          <MenuItem value={"30"}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="dong">동</InputLabel>
        <Select
          labelId="dong"
          id="locationDong"
          open={openDong}
          onClose={handleCloseDong}
          onOpen={handleOpenDong}
          value={dong}
          onChange={handleChangeDong}
        >
          
          <MenuItem value={"10"}>Ten</MenuItem>
          <MenuItem value={"20"}>Twenty</MenuItem>
          <MenuItem value={"30"}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </SelectDiv>
  );
}