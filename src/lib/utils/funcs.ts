export function truncate(text: string, size: number, trailing:string=" ...") {
    return text.substring(0, size) + trailing;
}