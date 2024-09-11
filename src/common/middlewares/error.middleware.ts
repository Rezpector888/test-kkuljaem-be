import { BadRequestException } from "@common/exceptions";
import { NextFunction, Request, Response } from "express";

export const ErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof BadRequestException) {
        return res.status(err.statusCode).json({ messsage: err.message});
    }

    res.status(500).json({
        message: "Internal Server Error"
    })
}