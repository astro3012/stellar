export interface IPost {
    _id?: string
    name: string
    title: string
    createdBy: string
    message: string
    tags: string[]
    stars: string[]
    selectedFile: string
    createdAt: number
}
