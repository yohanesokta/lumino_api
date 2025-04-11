import { updateProductContent } from "./mentor.class.content.repository";

export interface AssetsClass {
    class_id: string;
    content_type: string;
    content_title: string;
    content_data: string;
    instructor_id : string
}
export async function addContentToClass(data: AssetsClass) {
    try {
        const newContent = {
            content_type: data.content_type,
            content_title: data.content_title,
            content_data: data.content_data,
            timeStamp: new Date().toISOString(),
        }
        await updateProductContent(Number(data.class_id), data.instructor_id, newContent)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}