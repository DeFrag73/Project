// Дані про товари
var productsData = {
    labels: ['Rose', 'Tulip', 'Lily', 'Chrysanthemum'],
    values: [300, 450, 200, 600]
};

// Кругова діаграма
var pieChartCanvas = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: {
        labels: productsData.labels,
        datasets: [{
            label: 'Popularity of products',
            data: productsData.values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false
    }
});

// Гістограма
var barChartCanvas = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: {
        labels: productsData.labels,
        datasets: [{
            label: 'Popularity of products',
            data: productsData.values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Графік
var lineChartCanvas = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: {
        labels: productsData.labels,
        datasets: [{
            label: 'Popularity of products',
            data: productsData.values,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: false
    }
});
