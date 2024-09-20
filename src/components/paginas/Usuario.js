import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Usuario() {
  const [Usuario, setUsername] = useState('');
  const [Contraseña, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser(Usuario, Contraseña);
  };

  const authenticateUser = (username, password) => {
    const credentials = {
      username: 'usuariotbb',
      password: 'tbb123',
    };

    if (username === credentials.username && password === credentials.password) {
      console.log('Authenticated successfully!');
    } else {
      setError('Usuario o Contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="login-form bg-black text-white p-4 mt-4">
            <h1 className="text-white">Inicia Sesión</h1> 
            <h4 className="text-warning mb-4">TBB SAS</h4> 
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="text-white">Usuario:</label> 
                <input type="text" value={Usuario} onChange={(event) => setUsername(event.target.value)} className="form-control mt-1 mb-3" /> 
              </div>
              <div className="form-group">
                <label className="text-white">Contraseña:</label> 
                <input type="password" value={Contraseña} onChange={(event) => setPassword(event.target.value)} className="form-control mt-1" /> 
              </div>
              {error && <div className="text-warning">{error}</div>}
              <br /> 
              <button type="submit" className="btn btn-warning">Iniciar sesión</button> 
              <p className="text-white"> 
  ¿No tienes una cuenta? <Link to="/registro" className="text-warning">Regístrate</Link>
</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuario;