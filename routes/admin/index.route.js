const dashboardRoutes = require("./dashboard.route");
const productRoutes = require("./product.route");

const systemConfig = require("../../config/system");

const PATH_ADMIN = systemConfig.prefixAdmin;

module.exports = (app) => {
    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);

    app.use(PATH_ADMIN + "/products", productRoutes);
}
