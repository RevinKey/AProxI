var express = require("express");
var router = express.Router();
const request = require("request-promise-native");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "AProxI" });
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  const makeApiRequest = request({
    method: req.body.method,
    url: `${req.body.apiEndpoint}`,
    body: req.body.callBody
  }).then(response => {
    const apiResponse = JSON.parse(response).api_response;
    console.log(apiResponse);
    res.json(apiResponse);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
