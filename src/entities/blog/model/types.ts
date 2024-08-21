export interface Blog {
    id: number,
    title: string,
    description?: string,
    description_short: string,
    date: string,
    period: number,
    image: string,
    tags?: string[]
    comments?: any[]
}