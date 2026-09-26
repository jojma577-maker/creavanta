import React from 'react';
import CalculadoraIva from '../CalculadoraIva';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c' }}>
        Bienvenidos a CreaVanta
      </h1>
      <p style={{ color: '#4a5568', marginBottom: '32px', textAlign: 'center', maxWidth: '500px' }}>
        Conectando compradores con los mejores emprendedores colombianos.
      </p>
      
      {/* Aquí llamamos a tu nueva calculadora */}
      <CalculadoraIva />
    </main>
  );
}
