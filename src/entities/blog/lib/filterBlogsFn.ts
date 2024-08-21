export function filterBlogsFn(data: string, tagsFilterArray: any[], titleFilter: string) {
    let dataArray: object[] = JSON.parse(data)

    if(titleFilter.length) dataArray = dataArray.filter((el: any) => el.title.toLowerCase().includes(titleFilter))

    if (tagsFilterArray.length) dataArray = dataArray.filter((el: any) => {
        return tagsFilterArray.every(filterTag => !!el.tags.includes(filterTag))
    })

    return dataArray
}