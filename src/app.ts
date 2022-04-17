import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());

app.get("/api/books/:bookId/:authorId", (req: Request, res: Response) => {
    console.log(req.params.bookId);
    console.log(req.params.authorId);
    return res.send(req.params);
});

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});