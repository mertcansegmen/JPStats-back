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
        return Promise.all(
          keywords.map(this.getSingleJobPostingCount)
        );
      }
}