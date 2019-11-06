const router = require("express").Router();
const ingredientsRoutes = require("./ingredients");
const usersRoutes = require("./users");
const productsRoutes = require("./products");

// Book routes
router.use("/ingredients", ingredientsRoutes);
router.use("/users", usersRoutes);
router.use("/products", productsRoutes);

module.exports = router;
