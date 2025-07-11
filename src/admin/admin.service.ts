import { Request, Response } from 'express';
import busboy from 'busboy';
import fs from 'fs';
import path from 'path';
import { logger } from '../utils/prisma';
import { randomUUID } from 'crypto';
import { userCreate } from "../auth/auth.repository";
import { registerRequest } from "../auth/auth.service";
import bycript from "bcryptjs"
import { mentorUserDelete } from "./admin.repository";

export const mentorRegister = async (data: registerRequest) => {
    data.user_password = await bycript.hash(data.user_password, 4)
    await userCreate(data, "mentor");
    return;
}

export const mentorDelete = async (mentor_id: string) => {
    await mentorUserDelete(mentor_id);
}

export function PublicUploadImage(request: Request, response: Response) {
    const totalFileSize = parseInt(request.headers['content-length'] || '0', 10);
    if (totalFileSize === 0) {
        response.status(400).send('File size is zero or content-length header is missing.');
        return;
    }

    const bb = busboy({ headers: request.headers });
    let uploadedSize = 0;
    let validFilename = '';

    bb.on('file', (fieldname, file, info) => {
        const { filename, encoding, mimeType } = info;
        validFilename = randomUUID() + Date.now() + path.extname(filename);
        console.log(`File [${fieldname}] received: ${filename}, encoding: ${encoding}, mimeType: ${mimeType}`);
        const saveTo = `./uploads/${validFilename}`;
        fs.mkdirSync(path.dirname(saveTo), { recursive: true });
        const writeStream = fs.createWriteStream(saveTo);
        file.pipe(writeStream);

        file.on('data', (data) => {
            uploadedSize += data.length;
            const progress = Math.round((uploadedSize / totalFileSize) * 100);
            console.log(`Progress: ${progress}%`);
        });

        file.on('end', () => {
            logger.info(`File [${validFilename}] finished`);
        });
    });

    bb.on('finish', () => {
        logger.info('🎉 Upload complete!');
        response.status(200).send({ message: 'File uploaded successfully!', public_url: `${process.env.APP_URL}/images/${validFilename}` });
    });

    bb.on('error', (err) => {
        logger.error('Error parsing form:', err);
        response.status(500).send('An error occurred during upload.');
    });

    request.pipe(bb);
}