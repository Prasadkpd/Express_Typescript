import express, {NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());

//Customizing the middleware with curring
const middleware = ({name}: { name: String }) =>
    (req: Request, res: Response, next: NextFunction) => {
        //@ts-ignore
        req.name = name;
        next();
    }
//Apply this middleware to every route
app.use(middleware({name: "Prasad"}));

app.get("/api/books/:bookId/:authorId",
    // middleware,
    (req: Request, res: Response, next: NextFunction) => {
        //@ts-ignore
        console.log(req.name);
        //@ts-ignore
        res.send(req.name);
    }
);

//Error handling with async Action
async function throwError() {
    throw new Error("Boom!");
}

app.get("/error", async (req: Request, res: Response) => {
    try{
        await throwError();
        res.sendStatus(200);
    }catch (e) {
        res.status(400).send("Something bad happened");
    }
});

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});