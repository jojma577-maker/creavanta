import React, { useState } from 'react';

export default function CalculadoraIva() {
  // Aquí puedes cambiar el precio base para probar (Ejemplo: 50000 pesos)
  const [precioBase, setPrecioBase] = useState(50000); 
  
  const TASA_IVA = 0.19;
  const valorIva = precioBase * TASA_IVA;
  const precioTotal = precioBase + valorIva;

  return (
    <div style={{
      padding: '20px', 
      border: '1px solid #e2e8f0', 
      borderRadius: '12px', 
      maxWidth: '350px', 
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      fontFamily: 'sans-serif'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
        CreaVanta - Resumen de Compra
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4a5568' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Precio del Emprendedor:</span>
          <span style={{ fontWeight: '600' }}>${precioBase.toLocaleString('es-CO')} COP</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e53e3e' }}>
          <span>IVA Incluido (19%):</span>
          <span>${valorIva.toLocaleString('es-CO')} COP</span>
        </div>
        
        <hr style={{ border: '0', borderTop: '1px solid #edf2f7', margin: '8px 0' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold', color: '#2d3748' }}>
          <span>Total a Pagar:</span>
          <span style={{ color: '#2b6cb0' }}>${precioTotal.toLocaleString('es-CO')} COP</span>
        </div>
      </div>
      
      <button style={{
        marginTop: '16px',
        width: '100%',
        backgroundColor: '#2b6cb0',
        color: 'white',
        padding: '10px',
        borderRadius: '6px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Proceder al Pago Real
      </button>
    </div>
  );
}
