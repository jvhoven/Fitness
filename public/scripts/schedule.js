var data = [
    {
        value: 300,
        color:"#4caf50",
        highlight: "#66bb6a",
        label: "Protein"
    },
    {
        value: 105,
        color: "#5d4037",
        highlight: "#6d4c41",
        label: "Fat"
    },
    {
        value: 65,
        color: "#a1887f",
        highlight: "#bcaaa4",
        label: "Saturated fat"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Carbohydrates"
    }
]

var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Doughnut(data, {
	animateScale: false,
	animateRotate: true,
	animationEasing: 'easeOutBack'
});

var legend = document.getElementById("legend");
legend.innerHTML = myNewChart.generateLegend();
