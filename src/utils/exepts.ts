
export const sendJson = ({message = "",data = {}} ) =>  ({message,data})
export function containsSpecialChars(str : String) {
    const pattern = /[\/=<>|,"'\[\]]/;
    return pattern.test(String(str));
}

export const userSecretDeselect = {
    id : true,
    username : true,
    user_email : true,
    profile_picture_url : true,
    role : true,
    createAt : true,
    updateAt : true
}

export function validator(object :any) {
    let includes : string[] = []
    Object.keys(object).map((element)=>{
        if (!object[element]){
            includes.push(`${element} is required`)
        }
    })
    return includes.length > 0 ? {status : false , data : includes} : {status : true , data : object};
}