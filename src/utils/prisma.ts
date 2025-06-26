import { PrismaClient } from "@prisma/client";
import  winston, { transport }  from "winston";

export const prisma = new PrismaClient({
    log : [
        {
            emit : "event",
            level : "query"
        },
        {
            emit: "event",
            level: "error"
        },{
            emit: "event",
            level: "info"
        },
        {
            emit: "event",
            level:  "warn"
        }
    ]
});

prisma.$on("query", (element) => {
    return logger.error(element);
});

prisma.$on("error", (element) => {
    return logger.error(element);
});

prisma.$on("info", (element) => {
    return logger.info(element);
});

prisma.$on("warn", (element) => {
    return logger.warn(element);
});


let transports;
if (process.env.NODE_ENV === "development") {
    transports = [ new winston.transports.Console()];
} else if (process.env.NODE_ENV === "production") {
    transports = [
        new winston.transports.File({ filename: "logs/error.log", level: "error" }),
        new winston.transports.File({ filename: "logs/combined.log" })
    ];
}

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.simple()
    ),
    transports
})