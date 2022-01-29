const axios = require("axios");

module.exports.multiGetBrands = async (req, res) => {
  const responseData = await axios("https://api.trendyol.com/sapigw/brands");
  res.json(responseData.data);
};

module.exports.singleGetBrands = async (req, res) => {
  const brandsName = req.params.brandsName;
  const responseData = await axios(
    `https://api.trendyol.com/sapigw/brands/by-name?name={${brandsName}}`
  );
  res.json(responseData.data);
};
