class JobDataFetcher {
    constructor() {}
    
    getSingleJobPostingCount(keyword) {
        return {keyword: keyword, count: Math.floor(Math.random() * (200 - 1)) + 1};
    }

    getJobPostingCounts(keywords) {
        const jobPostings = [];
        keywords.forEach(function(keyword) {
            const jobPosting = {
                keyword: keyword,
                count: Math.floor(Math.random() * (200 - 1)) + 1
            }
            jobPostings.push(jobPosting);
        });

        return jobPostings.sort(function(a, b) {
            if(a.count > b.count) {
                return -1;
            }
            if(a.count < b.count) {
                return 1;
            }
            return 0;
        });
    }
}