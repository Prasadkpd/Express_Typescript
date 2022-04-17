import express, {NextFunction, Request, Response} from 'express';
import routes from "./routes";

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

routes(app);
app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});