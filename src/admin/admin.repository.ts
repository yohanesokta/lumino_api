import { userSecretDeselect } from "../utils/exepts";
import { prisma } from "../utils/prisma"

export const mentorUserDelete = async (mentor_id : string) => {
    await prisma.users.delete({where : {id : mentor_id}});
}

export const getMentorbyId = async (mentor_id : string) => {
    return await prisma.users.findFirst({where : {id : mentor_id , role : "mentor"}, select : userSecretDeselect});
}
export const getManyMentors = async (skip : number , take : number) => {
    return await prisma.users.findMany({where : {role : "mentor"},skip : skip , take : take , select : userSecretDeselect});
}

export const mentorUpdate = async (userid:string,userdata: any) => {
    return await prisma.users.update({where : {id : userid} , data : userdata})
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