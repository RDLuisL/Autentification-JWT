
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export default function Register() {
    const { store, actions } = useContext(Context)
    const [form, setForm] = useState({
        email: 'sadasd',
        password: 'asdaddddddds',
        pregunta1: 'gatito',
        pregunta2: 'que te importa'
    })
    useEffect(() => {
        for (let elemento in form) {
            console.log(elemento, form[elemento])
        }
    }, [form])
    return <>
        <input type='email' placeholder="email"
            onChange={(e) => {
                setForm({
                    email: e.target.value,
                    password: form.password
                })
            }}
        />
        <input type='password' placeholder="password"
            onChange={(e) => {
                setForm({
                    email: form.email,
                    password: e.target.value
                })
            }}
        />
        <button onClick={() => {
            actions.registrar(form)
        }}>Enviar</button>

    </>
}