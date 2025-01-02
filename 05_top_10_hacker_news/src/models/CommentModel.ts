export default interface CommentModel {
    by: string
    id: number
    parent: number
    kids?: number[]
    text: string
    time: number
    type: string
}