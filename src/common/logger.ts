import {Request} from "express";
import LogRequest from "../entity/log.request.entity";

export function logger(request: Request,res,next) {
    const logRequest: LogRequest =  new LogRequest()
    logRequest.ip = request.ip
    logRequest.baseUrl = request.originalUrl
    logRequest.data = JSON.stringify(request.body)
    next()
    LogRequest.create(logRequest)
}
