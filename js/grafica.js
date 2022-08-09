//Usem l'id del canvas perquè creï la gràfica allà dins
const $grafica = document.querySelector("#grafica");
//Les etiquetes van a l'eix x
const etiquetes = [
    "Google Chrome",
    "Safari",
    "Firefox",
    "Edge",
    "Samsung Internet",
    "Opera",
    "Altres",
];
//Definim el conjunt de dades
const dadesNavegadors2020 = {
    label: "Percentatge per navegadors",
    //Data són els valors de l'eix x, que ha de coincidir en nombre amb les etiquetes
    data: [63.59, 19.14, 3.76, 3.41, 3.31, 2.19, 4.6],
    backgroundColor: [
        //Diversos colors fan que la dada dels vectors número agafin el color del seu vector
        "#eb7891", //63.59 amb aquest color
        "#72b3df", //19.14 amb aquest color, etc...
        "#ebce86",
        "#7fc5c5",
        "#ae8feb",
        "#f2cfac",
        "#eb8da1",
    ],
    borderColor: "white",
    borderWidth: 2,
};
//Configurem el tipus de gràfica que es carregarà per defecte
const config = {
    type: "bar",
    data: {
        labels: etiquetes,
        datasets: [dadesNavegadors2020],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};

const config2 = {
    type: "pie",
    data: {
        labels: etiquetes,
        datasets: [dadesNavegadors2020],
    },
    options: {},
};

const config3 = {
    type: "doughnut",
    data: {
        labels: etiquetes,
        datasets: [dadesNavegadors2020],
    },
    options: {},
};

//carreguem la nova gràfica de l'id del canvas
let grafica = new Chart(document.getElementById("grafica"), config);
//Fem una funció que actualitzi la gràfica segons el radio que està marcat, a través de l'onclick que hem
//determinat al html (tipusGrafica=("bar"), (tipusGrafica=("pie") o (tipusGrafica=("doughnut"))
function tipusGrafica(tipus) {
    grafica.destroy();
    if (tipus === "bar") {
        grafica = new Chart(document.getElementById("grafica"), config);
    }

    if (tipus === "pie") {
        grafica = new Chart(document.getElementById("grafica"), config2);
    }

    if (tipus === "doughnut") {
        grafica = new Chart(document.getElementById("grafica"), config3);
    }
}
