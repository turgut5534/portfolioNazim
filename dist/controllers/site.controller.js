"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const index_service_1 = require("../services/index.service");
const homePage = async (req, res, next) => {
    try {
        const user = await index_service_1.userService.getOne(); // <-- FIXED
        // res.json(users);                    // <-- send the result
        res.render("index", { user });
    }
    catch (err) {
        next(err);
    }
};
exports.homePage = homePage;
//# sourceMappingURL=site.controller.js.map