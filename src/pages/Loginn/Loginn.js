import React, { useState } from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

function Loginn() {
    const paperStyle = { padding: 40, height: '50vh', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#4197f2' }

    const [body, setBody] = useState({ nickname: '', password: '' })

    const handleChange = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        console.log(body);
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockIcon />
                    </Avatar>
                    <h2>¡Bienvenido!</h2>
                </Grid>
                <TextField
                    label='Usuario'
                    placeholder="Ingrese un usuario"
                    fullWidth required
                    name='nickname'
                    value={body.nickname}
                    onChange={handleChange} />
                <br />
                <br />
                <TextField
                    label='Contraseña'
                    placeholder="Ingrese una contraseña"
                    fullWidth required
                    type='password'
                    name='password'
                    value={body.password}
                    onChange={handleChange} />
                <br />
                <br />
                <Button
                    type="submit "
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => onSubmit()}>
                    Iniciar Sessión</Button>
            </Paper>
        </Grid>
    );
}

export default Loginn;