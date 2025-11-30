"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const site_controller_1 = require("../controllers/site.controller");
const router = (0, express_1.Router)();
router.get('/', site_controller_1.homePage);
exports.default = router;
//# sourceMappingURL=index.router.js.map