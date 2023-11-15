var x = document.querySelector(".mychart").getContext("2d");
var chart = new Chart(x, {
  type: "bar",
  data: {
    labels: ["col1", "col2", "col3"],
    datasets: [{
      label: "num datos",
      data: [1, 2, 3],
      backgroundColor: ["red", "green", "orange"]
    }]
  },
  options: {
    scales: {
      y: {
        display: false
      }
    }
  }
});

var y = document.querySelector(".mychart2").getContext("2d");
var chart = new Chart(y, {
  type: "doughnut",
  data: {
    labels: ["col1", "col2", "col3"],
    datasets: [{
      label: "num datos",
      data: [10, 9, 8],
      backgroundColor: ["#0B6050", "#13B497", "#87FFE9"]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        color: '#000',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: function(value, context) {
          return value;
        },
        position: 'bottom'
      }
    }
  }
});



        var x = document.querySelector(".mychart3").getContext("2d");
        var charat = new Chart(x, {
            type: "line",
            data: {
                labels: ["col1", "col2", "col3"],
                datasets: [{
                    label: "num datos",
                    data: [10, 9, 8],
                    backgroundColor: ["red", "green", "orange"]
                }]
            }
        });



        


        

        var n = document.querySelector(".mychart4").getContext("2d");
        const data = {
  labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
  datasets: [{
    label: 'Dataset 1',
    data: [20, 10, 4, 2],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointBorderColor: '#fff',
    pointBorderWidth: 1,
    pointRadius: 4
  }, {
    label: 'Dataset 2',
    data: [10, 5, 12, 6],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
    pointBorderColor: '#fff',
    pointBorderWidth: 1,
    pointRadius: 4
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
};






var ctx = document.querySelector(".mychart").getContext("2d");
var chart = new Chart(n, config);






var p = document.querySelector(".mychart5").getContext("2d");
var chart = new Chart(p, {
  type: "scatter",
  data: {
    labels: ["col1", "col2", "col3"],
    datasets: [{
      label: "num datos",
      data: [10, 9, 8],
      backgroundColor: ["#0B6050", "#13B497", "#87FFE9"]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        color: '#000',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: function(value, context) {
          return value;
        },
        position: 'bottom'
      }
    }
  }
});



var f = document.querySelector(".mychart7").getContext("2d");
var chart = new Chart(f, {
  type: "bar",
  data: {
    labels: ["col1", "col2", "col3","col4","col5"],
    datasets: [{
      label: "num datos",
      data: [1, 2, 3,5,3],
      backgroundColor: ["white", "green", "white", "green","white"]
    }]
  },
  options: {
    scales: {
      y: {
        display: false
      }
    }
  }
});



var ff = document.querySelector(".mychart8").getContext("2d");
  var chart = new Chart(ff, {
    type: "doughnut",
    data: {
      labels: ["col1", "col2", "col3", "col4"],
      datasets: [{
        label: "num datos",
        data: [10, 9, 8, 7],
        backgroundColor: ["red", "blue", "yellow", "green"]
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: '#000',
          font: {
            size: 12,
            weight: 'bold'
          },
          formatter: function(value, context) {
            return value;
          },
          anchor: 'end',
          align: 'start',
          offset: 4
        }
      }
    }
  });

const swiperWrapper = document.querySelector('.swiper-wrapper');

fetch('https://picsum.photos/v2/list?page=2&limit=100')
  .then(response => response.json())
  .then(data => {
    let counter = 0; // Contador para controlar el número de imágenes mostradas
    data.forEach(image => {
      if (counter < 5) {
        // Crear un elemento <img>
        const imgElement = document.createElement('img');
        // Establecer el atributo src con la URL de la imagen
        imgElement.src = image.download_url;
        // Agregar el elemento <img> al contenedor del swiper
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.appendChild(imgElement);
        swiperWrapper.appendChild(swiperSlide);
        counter++; // Incrementar el contador
      }
    });

    // Inicializar el swiper después de agregar las imágenes
    const swiper = new Swiper('.swiper', {
      // Configuración del swiper
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Actualizar el tamaño del swiper después de agregar las imágenes
    swiper.updateSize();
  })
  .catch(error => {
    // Manejo de errores en caso de que la solicitud falle
    console.log(error);
  });

