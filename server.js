const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Datos completos
const data = {
  id: 1,
  id_usuarios: 123456,
  actividad_empresa: 'Venta',
  anio_nacimiento_ine: '31/07/1994',
  antiguedad_negocio: 6,
  apellidos_ine: 'Hernandez Morales',
  curp_ine: 'HEMB940731HMCRRR01',
  dia_nacimiento_ine: 31,
  direccion_ine: 'Jaime Balmes #8',
  direccion_negocio: 'Ejercito Nacional #10',
  estado_civil: 'Soltero',
  fecha_caducidad_ine: '31/07/2040',
  fecha_emision_ine: '31/07/2020',
  fecha_hora_solicitud_ine: '31/07/2020 14:30',
  firma_electronica: 'no',
  imagen_back_url: 'Link1',
  imagen_frontal_url: 'Link2',
  ingresos_recibidos: 50000,
  mes_nacimiento_ine: 7,
  nacionalidad_ine: 'Mexicana',
  nombre_completo_ine: 'Aaron',
  numero_documento_ine: 132132131,
  numero_emision_ine: 2131321,
  numero_ine: 2132131,
  numero_ocr_ine: 21321321324,
  pais_emision_ine: 'Mexico',
  rfc_homo: 'HEMB940731',
  sexo_ine: 'H',
  tipo_documento_ine: 23
};
  
app.get('/', (req, res) => {
    res.send('API de Metamap');
  });
  


// Ruta GET para obtener los datos en formato JSON
app.get('/api/metamap', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
