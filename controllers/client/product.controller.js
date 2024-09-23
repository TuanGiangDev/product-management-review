const Product = require("../../models/product.model");

module.exports.index =async (req, res) =>{
    const products = await Product.find({
        status: "active",
        deleted: "false"
    });

    newProduct = products.map(item => {
        item.priceNew = (item.price - (item.price*item.discountPercentage/100)).toFixed(2);
        return item;
    });
    res.render("client/pages/products/index.pug", {
        titlePage: "Trang danh sách sản phẩm",
        products: products
    });
}