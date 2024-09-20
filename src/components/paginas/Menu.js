import React from 'react';

const imagenStyle = { width: 200, height: 100, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' };
const Menu = () => {
  return (
    <div className="container" style={{ marginTop: 10, backgroundColor: 'black', padding: 40 }}>
        <h1 className="text-center" style={{ color: 'white', marginBottom: 10 }}>Menú The Big Bite</h1>
        <h4 className="text-warning" style={{ marginBottom: 20 }}>TBB SAS</h4>        
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ padding: 20, border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <img src="perrocaliente.png" className="mx-auto" style={imagenStyle} />
            <h5 style={{ color: 'black' }}>Perro Caliente</h5>
            <p style={{ color: 'black' }}>$ 20.000 </p>
            <a href="#" className="btn btn-warning" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', fontSize: '12px', padding: '5px 10px', color: 'black' }}>Ordenar</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ padding: 20, border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <img src="hamburguesa.png" className="mx-auto" style={imagenStyle} />
            <h5 style={{ color: 'black' }}>Hamburguesa</h5>
            <p style={{ color: 'black' }}>$ 30.000</p>
            <a href="#" className="btn btn-warning" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', fontSize: '12px', padding: '5px 10px', color: 'black' }}>Ordenar</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ padding: 20, border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <img src="gaseosas.png" className="mx-auto" style={imagenStyle} />
            <h5 style={{ color: 'black' }}>Gaseosas</h5>
            <p style={{ color: 'black' }}>$ 6.000</p>
            <a href="#" className="btn btn-warning" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', fontSize: '12px', padding: '5px 10px', color: 'black' }}>Ordenar</a>
          </div>
        </div>
        <div className="col-md-4" style={{ marginTop: 20 }}>
          <div className="card" style={{ padding: 20, border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <img src="papasfritas.png" className="mx-auto" style={imagenStyle} />
            <h5 style={{ color: 'black' }}>Papas Fritas</h5>
            <p style={{ color: 'black' }}>$8.000</p>
            <a href="#" className="btn btn-warning" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', fontSize: '12px', padding: '5px 10px', color: 'black' }}>Ordenar</a>
          </div>
        </div>
        <div className="col-md-4" style={{ marginTop: 20 }}>
          <div className="card" style={{ padding: 20, border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <img src="Jugos.png" className="mx-auto" style={imagenStyle} />
            <h5 style={{ color: 'black' }}>Jugos</h5>
            <p style={{ color: 'black' }}>15.000</p>
            <a href="#" className="btn btn-warning" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', fontSize: '12px', padding: '5px 10px', color: 'black' }}>Ordenar</a>
          </div>
        </div>
        <div className="col-md-4" style={{ marginTop: 20 }}>
          <div className="card" style={{ padding: 20, border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <img src="adicionales.png" className="mx-auto" style={imagenStyle} />
            <h5 style={{ color: 'black' }}>Adicionales</h5>
            <p style={{ color: 'black' }}>$ 10.000</p>
            <a href="#" className="btn btn-warning" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', fontSize: '12px', padding: '5px 10px', color: 'black' }}>Ordenar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;