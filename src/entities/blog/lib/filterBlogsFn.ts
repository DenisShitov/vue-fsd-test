export function filterBlogsFn(data: string, tagsFilterArray: any[]) {
    let dataArray: object[] = JSON.parse(data)

    if (tagsFilterArray.length) return dataArray.filter((el: any) => {
        return tagsFilterArray.every(filterTag => !!el.tags.includes(filterTag))
    })

    return dataArray
}