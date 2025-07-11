import { PrismaClient } from "@prisma/client";
import  winston  from "winston";

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
    return logger.error({element});
});

prisma.$on("error", (element) => {
    return logger.error({element});
});

prisma.$on("info", (element) => {
    return logger.info({element});
});

prisma.$on("warn", (element) => {
    return logger.warn({element});
});

let transports;
if (process.env.NODE_ENV != "vercel") {
    transports = [
        new winston.transports.Console({
            format: winston.format.json()
        }),
        new winston.transports.File({
            format : winston.format.json(),
            filename: "logs/development.log",
        })
    ];
} else {
    transports = [new winston.transports.Console()]
}

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
    ),
    transports: transports
})