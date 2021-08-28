// description - get all the search data
// route - GET /search
// access - public
// request - contain company names
exports.getSearchData = (req,res,next) => {
    const searchStr = req.query.q;
    console.log(searchStr);
    res.send('GET search data');
}