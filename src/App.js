import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import {Alert, AlertTitle, Button, IconButton, Paper, styled, TextField} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import InfoIcon from '@mui/icons-material/Info';

function valuetext(value) {
    return `${value}°C`;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#24cb6e' : '#1ea95a',
    },
}));

function App() {
  return (
    <div className="App">
        <div className={"container"}>
            <div className={"flex"}>
                <div className={"flex-col"} >
                    <Box className={"box"}>
                        <h2>Create a password</h2>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <IconButton aria-label="delete">
                                <ContentCopyIcon />
                            </IconButton>
                        </div>
                        <div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Special Characters" />
                                <FormControlLabel control={<Checkbox />} label="Numbers" />
                            </FormGroup>
                        </div>
                        <div>
                            <p>Length</p>
                            <Slider
                                aria-label="Length"
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={8}
                                marks
                                min={8}
                                max={64}
                            />
                        </div>
                        <p>Strong</p>
                        <div>
                            <BorderLinearProgress variant="determinate" value={50} />
                        </div>
                    </Box>
                </div>
                <div className={"flex-col"}>
                    <Box className={"box"}>
                        <div className={"flex-col"}>
                            <div className={"button"}>
                                <Alert severity="warning">
                                    <AlertTitle>Review passwords</AlertTitle>
                                    One of your passwords was leaked in a recent breach <strong>7 days ago.</strong>
                                </Alert>
                            </div>
                            <div className={"button"}>
                                <Button  variant="contained" startIcon={<VpnKeyIcon />}>
                                    Passwords
                                </Button>
                            </div>
                            <div className={"button"}>
                                <Button  variant="contained" startIcon={<InfoIcon />}>
                                    Info
                                </Button>
                            </div>
                        </div>

                    </Box>
                </div>
            </div>
        </div>
    </div>

  );
}

export default App;
