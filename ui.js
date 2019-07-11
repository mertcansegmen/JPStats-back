class UI {
    constructor() {}

    handleSize(listUI, cardUI, chartCanvasUI) {
        cardUI.style.height = listUI.offsetHeight + 2.5 + "px";
        chartCanvasUI.height = 185;
    }

    handleListSelection() {
        // Make list item selected on click
        $(function () {
            $('body').on('click', '.list-group-item', function () {
                $('.list-group-item').removeClass('active');
                $(this).closest('.list-group-item').addClass('active');
            });
        });
    }

    createChart(chartCanvasUI, keywords) {
        var ctx = chartCanvasUI.getContext('2d');
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: keywords,
                datasets: [{
                    label: 'Current Number of Job Postings',
                    data: [78, 34, 14, 8],
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
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}