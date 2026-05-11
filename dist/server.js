"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const port = process.env.PORT || "5000";
const uri = process.env.MONGODB_URI;
const bootstrap = async () => {
    await mongoose_1.default.connect(uri);
    console.log("Mongodb Connected");
    app_1.default.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map