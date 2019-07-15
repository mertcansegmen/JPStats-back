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
    let selectedListElement = null;
    if (e.target.nodeName === "A") {
        selectedListElement = e.target;
    } else if (e.target.nodeName === "P") {
        selectedListElement = e.target.parentElement;
    } else if (e.target.nodeName === "H5") {
        selectedListElement = e.target.parentElement.parentElement;
    } else {
        selectedListElement = e.target.parentElement;
    }
    const keywords = selectedListElement.lastElementChild.innerText.split(", ");
    dataFetcher.getJobPostingCounts(keywords)
        .then(jobPostings => {
            const sortedJobPostings = jobPostings.sort(function (a, b) {
                if (a.count > b.count) {
                    return -1;
                }
                if (a.count < b.count) {
                    return 1;
                }
                return 0;
            });
            chart.destroy();
            chart = ui.createChart(cardBodyUI, jobPostings);
        })
        .catch(err => console.log(err));
});

formUI.addEventListener("submit", function (e) {
    const keywordInputUI = document.querySelector(".form-control");
    const keyword = keywordInputUI.value;
    if (keyword === "") {
        return;
    }
    dataFetcher.getSingleJobPostingCount(keyword)
        .then(jobPosting => {
            ui.createJumbotron(cardBodyUI, jobPosting);
        });

    keywordInputUI.value = "";

});