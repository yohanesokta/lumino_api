import {Request, Response} from "express"

const privateAxios = async (url : string) => {
    const data:any = await fetch(url,{method : "GET", headers : {"Content-Type" : "application/json"}})
    return await data.json()
}

export const homepage = async (request : Request,response : Response) => {
    const sideProjectData = await privateAxios("https://api.github.com/repos/Kurson-Project/server-side")
    const lastCommit = await privateAxios("https://api.github.com/repos/yohanesokta/serbailmu_api/commits")
    const request_data = {
            nama_committer : lastCommit[0]?.commit.committer.name,
            email_commiter : lastCommit[0]?.commit.committer.email,
            tanggal : lastCommit[0]?.commit.committer.date,
            pesan_commit : lastCommit[0]?.commit.message,
    }
    response.json(request_data)
}