import {Express, NextFunction, Request, Response} from "express";
import getBookHandler from "./controllers/books.controller";

function routes(app: Express) {
    app.get("/api/books/:bookId/:authorId",getBookHandler);
}

export default routes;