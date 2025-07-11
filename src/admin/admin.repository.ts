import { userSecretDeselect } from "../utils/exepts";
import { prisma } from "../utils/prisma"

export const mentorUserDelete = async (mentor_id : string) => {
    await prisma.users.delete({where : {id : mentor_id}});
}

export const getAllUsers = async (skip : number , take : number , role : "user" | "admin" | "mentor" | null) => {
    if (role) {
        return await prisma.users.findMany({where : {role : role } , skip : skip , take : take , select : userSecretDeselect,orderBy :{role : "desc"}});
    }
    return await prisma.users.findMany({skip : skip , take : take , select : userSecretDeselect,orderBy :{role : "desc"}});
}

export const getUserById = async (userid : string) => {
    return await prisma.users.findFirst({where : {id : userid} , select : userSecretDeselect});
}