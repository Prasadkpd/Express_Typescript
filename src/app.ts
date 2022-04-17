import express, {NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());

const handleGetBook = (req:Request, res:Response, next:NextFunction) => {
  console.log(req.params);
  return res.send(req.params);
}

app.get("/api/books/:bookId/:authorId", handleGetBook);

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});