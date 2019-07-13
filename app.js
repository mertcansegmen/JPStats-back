const ui = new UI();
const dataFetcher = new JobDataFetcher();

const listUI = document.querySelector(".list-group");
const cardUI = document.querySelector(".card");
const cardBodyUI = document.querySelector(".card-body");
const formUI = document.querySelector(".form-inline");

let chart = ui.createChart(cardBodyUI, []);
chart.destroy();

ui.handleSize(listUI, cardUI);
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
    const jobPostings = dataFetcher.getJobPostingCounts(keywords);
    chart.destroy();
    chart = ui.createChart(cardBodyUI, jobPostings);
});

formUI.addEventListener("submit", function(e) {
    const keywordInputUI = document.querySelector(".form-control");
    const keyword = keywordInputUI.value;
    const jobPosting = dataFetcher.getSingleJobPostingCount(keyword);
    if(keyword === "") {
        return;
    } else {
        ui.createJumbotron(cardBodyUI, jobPosting);
        keywordInputUI.value = "";
    }
});