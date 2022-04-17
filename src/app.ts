import express, {NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());
//First way with two functions
// const handleGetBookOne = (req:Request, res:Response, next:NextFunction) => {
//   console.log(req.params);
//   next();
// }
//
// const handleGetBookTwo = (req:Request, res:Response, next:NextFunction) => {
//   console.log("Second handler");
//   return res.send(req.params);
// }

// app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);
//second way
app.get("/api/books/:bookId/:authorId", function (req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    next();
}, function (req: Request, res: Response, next: NextFunction) {
    return res.send(req.params);
});

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});