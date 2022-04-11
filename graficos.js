var xValues = ["Fixos" , "Investimentos" , "Lazer"];
var yValues = [70 , 20 , 10];
var colors = ["#253659" , "#F27D52" , "#04BF9D"];

new Chart("myChrat" , {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: colors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Planejamento"
        }
    }
})