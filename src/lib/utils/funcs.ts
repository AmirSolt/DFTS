export function truncate(text: string, size: number, trailing:string=" ...") {
    let r = text.substring(0, size)
    if(r.length<text.length){
        r = r+trailing;
    }

    return  r;
}