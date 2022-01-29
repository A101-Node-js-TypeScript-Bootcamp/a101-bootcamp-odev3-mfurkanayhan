const axios = require("axios");

module.exports.multigetCategories = async (req, res) => {
  const responseData = await axios(
    "https://api.trendyol.com/sapigw/product-categories"
  );
  res.json(responseData.data);
};

module.exports.singlegetCategories = async (req, res) => {
  const responseData = await axios(
    "https://api.trendyol.com/sapigw/product-categories"
  );
  let categoryName = req.params.categoryName;
  let editedData = responseData.data.categories.find((e) => {
    return e["name"] === categoryName;
  });
  res.json(editedData);
};
