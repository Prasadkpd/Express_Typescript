import express, {Request, Response} from 'express';
import helmet from "helmet";

const app = express();

app.use(express.json());

app.use(helmet);

app.get("/", (req:Request, res: Response))

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});