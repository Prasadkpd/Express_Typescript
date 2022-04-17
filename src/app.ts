import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());

app
    .route("/")
    .get((req: Request, res: Response) => {
        return res.send("You make a GET Request")
    })
    .post((req: Request, res: Response) => {
        return res.send("You make a POST Request")
    })
    .put((req: Request, res: Response) => {
        return res.send("You make a PUT Request")
    })
    .all((req: Request, res: Response) => {
        return res.send("You make a X Request")
    })

app.listen(4000, () => {
    console.log("Application listen at http://localhost:4000");
});