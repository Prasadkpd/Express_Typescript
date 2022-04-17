import express, {NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());

//Customizing the middleware with curring
const middleware = ({name}: { name: String }) =>
    (req: Request, res: Response, next: NextFunction) => {
    //To remove ts-ignore ad name to locals of response
        res.locals.name = name;
        next();
    }
//Apply this middleware to every route
app.use(middleware({name: "Prasad"}));

app.get("/api/books/:bookId/:authorId",
    // middleware,
    (req: Request, res: Response, next: NextFunction) => {
        console.log(res.locals.name);
        res.send(res.locals.name);
    }
);

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});