import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send("Hello World");
});

app.post("/api/data", (req: Request, res: Response) => {
    console.log(req.body);
    return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
    return res.sendStatus(200);
})

app.listen(4000, () => {
    console.log("Application listen at http://localhost:4000");
});