import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const { store, actions } = useContext(Context);
    return (
        <div className="text-center mt-5">
            <h1>Iniciar Sesion :D !</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    actions.enviarDatos(e, mail, pass);
                }}>
                <div className="mb-3 mx-auto col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={e => {
                            setMail(e.target.value);
                        }}
                    />
                    <div id="emailHelp" className="form-text">
                        We will never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3  mx-auto col-6">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={e => {
                            setPass(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Iniciar Sesion
                </button>
            </form>
            <Link to="/demo">
                <button className="btn btn-danger">Ir a Pagina Privada</button>
            </Link>
        </div>
    );
};
