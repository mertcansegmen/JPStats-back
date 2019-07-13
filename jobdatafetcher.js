class JobDataFetcher {
    constructor() {}
    
    async getSingleJobPostingCount(keyword) {
        const response = await fetch(`http://localhost:3000/${keyword}`);
        const jobPostingCount = await response.json();
        return {
            keyword: keyword,
            count: jobPostingCount
        };
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