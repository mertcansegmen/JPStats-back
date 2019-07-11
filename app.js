const listUI = document.querySelector(".list-group");
const cardUI = document.querySelector(".card");
const chartUI = document.querySelector("#chart");

// Set list item selected on click
$(function () {
    $('body').on('click', '.list-group-item', function () {
        $('.list-group-item').removeClass('active');
        $(this).closest('.list-group-item').addClass('active');
    });
});

listUI.addEventListener("click", function (e) {
    //console.log(e.target);
    let selection = null;
    if (e.target.nodeName === "A") {
        selection = e.target;
    } else if (e.target.nodeName === "P") {
        selection = e.target.parentElement;
    } else {
        selection = e.target.parentElement.parentElement;
    }
    console.log(selection);
});

cardUI.style.height = listUI.offsetHeight + 2 + "px";
chartUI.height = 185;

var ctx = chartUI.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['React Native', 'Flutter', 'Ionic', 'Xamarin'],
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