import express, {NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());

const handleGetBookOne = (req:Request, res:Response, next:NextFunction) => {
  console.log(req.params);
  next();
}

const handleGetBookTwo = (req:Request, res:Response, next:NextFunction) => {
  console.log("Second handler");
  return res.send(req.params);
}

app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});