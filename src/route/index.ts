import {Router} from "express";
import { categoryRouter } from "../modules/category/category.route";


const router = Router();

const routeList = [
    {
        prefix: "/category",
        route: categoryRouter,
    }
]

routeList.forEach((route) => {
    router.use(route.prefix, route.route)
})


export default router;


