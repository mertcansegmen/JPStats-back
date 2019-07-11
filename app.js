const ui = new UI();

const listUI = document.querySelector(".list-group");
const cardUI = document.querySelector(".card");
const chartCanvasUI = document.querySelector("#chart");

let chart = ui.createChart(chartCanvasUI, []);
chart.destroy();

ui.handleSize(listUI, cardUI, chartCanvasUI);
ui.handleListSelection();

listUI.addEventListener("click", function (e) {
    let selection = null;
    if (e.target.nodeName === "A") {
        selection = e.target;
    } else if (e.target.nodeName === "P") {
        selection = e.target.parentElement;
    } else if (e.target.nodeName === "H5") {
        selection = e.target.parentElement.parentElement;
    } else {
        selection = e.target.parentElement;
    }
    const keywords = selection.lastElementChild.innerText.split(", ");
    chart.destroy();
    chart = ui.createChart(chartCanvasUI, keywords);
});