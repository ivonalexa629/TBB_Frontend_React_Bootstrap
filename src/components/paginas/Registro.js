import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registro exitoso!');
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Usuario: ${usuario}, Email: ${email}, Password: ${password}, Ciudad: ${ciudad}, Direccion: ${direccion}`);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue); 
  };

  return (
    <div className="container registro" style={{
      backgroundColor: 'black',
      padding: '10px', 
      width: '50%', 
      margin: '10px auto'
    }}>
      <div className="row justify-content-center">
        <div className="col-md-11" style={{ marginLeft: 0, marginRight: 0 }}>
          <form onSubmit={handleSubmit}>
            <h1 className="registro" style={{ 
              marginTop: '20px', 
              color: 'white' 
            }}>Registro</h1> 
            <h4 className="text-warning">TBB SAS</h4>
            <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '40fr 40fr', gap: '10px' }}>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Nombre:</label>
                <input type="text" className="form-control registro" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Apellido:</label>
                <input type="text" className="form-control registro" value={apellido} onChange={(e) => setApellido(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Usuario:</label>
                <input type="text" className="form-control registro" value={usuario} onChange={(e) => setUsuario(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Correo:</label>
                <input type="email" className="form-control registro" value={email} onChange={handleEmailChange} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Contraseña:</label>
                <input type="password" className="form-control registro" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Confirmación de contraseña:</label>
                <input type="password" className="form-control registro" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Ciudad:</label>
                <input type="text" className="form-control registro" value={ciudad} onChange={(e) => setCiudad(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <label className="registro" style={{ color: 'white' }}>Dirección:</label>
                <input type="text" className="form-control registro" value={direccion} onChange={(e) => setDireccion(e.target.value)} style={{ width: '250px', height: '25px', marginLeft: 'auto', marginRight: 'auto' }} />
              </div>
            </div>
            <br /> 
            <button type="submit" className="btn btn-warning registro" style={{ 
              marginTop: '-3px', 
              color: 'black' 
            }}>Registrarse</button>
             <p className="text-white"> 
  ¿Ya tienes una cuenta? <Link to="/usuario" className="text-warning">Inicia Sesión</Link>
</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;