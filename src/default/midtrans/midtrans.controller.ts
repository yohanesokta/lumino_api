import express from "express";
import { logger } from "../../utils/prisma";
export const midtramsRouter = express.Router();

midtramsRouter.post('/:slug/socket',async (request, response) => {
    const slug = request.params.slug;
    response.status(200).json({
        status: "OK",
        message: "Socket is ready",
        data: {
            slug: slug,
            secret : btoa(process.env.APP_KEY!)
        }
    });
    logger.info(`======== Socket request BY CLIENT [${slug}] ========`);
    logger.info(`Socket request for __ HEADER __: ${JSON.stringify(request.headers)}`);
    logger.info(`Socket request for __ BODY __: ${JSON.stringify(request.body)}`);

})