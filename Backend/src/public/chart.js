
const fetchData = async () => {
  const id_usuario = '27';
  try {
    const response = await fetch(`http://localhost:3090/healthTrack/tracking/data/${id_usuario}`);
    const data = await response.json();

    const labels = ['Peso', 'Alimentos', 'Actividad Física', 'Frecuencia Cardíaca', 'Presión Arterial'];
    const values = [
      data.peso,
      getAlimentosLevel(data.alimentos),
      getActividadFisicaLevel(data.actividad_fisica),
      data.frecuencia_cardiaca,
      data.presion_arterial
    ];

    const backgroundColors = [
      'rgba(173, 216, 230, 1)',
      'rgba(255, 165, 0, 1)',
      'rgba(50, 205, 50, 1)',
      'rgba(255, 0, 0, 1)',
      'rgba(128, 0, 128, 1)'
    ];

    const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              label: 'Valores',
              data: values,
              backgroundColor: backgroundColors,
              borderColor: 'rgba(0, 0, 0, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: 10
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                align: 'start',
                labels: {
                  font: {
                    size: 14,
                    weight: 'bold'
                  }
                }
              },
              datalabels: {
                formatter: (value, context) => {
                  const sum = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = (value * 100 / sum).toFixed(2) + "%";
                  return percentage;
                },
                color: '#fff',
                font: {
                  size: '12',
                  weight: 'bold'
                }
              }
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

const getActividadFisicaLevel = (actividad) => {
  if (actividad.includes('Ninguna')) {
    return 0;
  } else if (actividad.includes('Baja')) {
    return 10;
  } else if (actividad.includes('Moderada')) {
    return 20;
  } else if (actividad.includes('Alta')) {
    return 30;
  } else {
    return 0;
  }
};

const getAlimentosLevel = (alimentos) => {
  if (alimentos.includes('Vegetales')) {
    return 10;
  } else if (alimentos.includes('Frutas')) {
    return 20;
  } else if (alimentos.includes('Proteinas')) {
    return 30;
  } else if (alimentos.includes('Carbohidratos')) {
    return 40;
  } else if (alimentos.includes('Grasas')) {
    return 50;
  } else {
    return 0;
  }
};

fetchData();
