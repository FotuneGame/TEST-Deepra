import {Request, Response, NextFunction} from "express";
import express, {Router} from "express";
import path from "path";


const router:Router = express.Router();



router.get("/", (req:Request, res:Response, next:NextFunction) => {    
    const {name,message} = req.query;
    console.log(name,message)
    if(!name || !message)
        res.sendFile(path.resolve(__dirname,"..","..","public","index.html"));
    else
        res.sendFile(path.resolve(__dirname,"..","..","public","wow.html"))
});

export default router;
