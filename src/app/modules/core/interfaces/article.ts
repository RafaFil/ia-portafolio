import { Callout } from "./callout";

export interface Article {
    id: number,
    title: string,
    category: string,
    topics: string,
    parapgraph: string[],
    images?: string[],
    relatedJupyter?: string[],
    callouts?: Callout[],
    intrestLinks?: {
        text: string,
        link: string,
    }[],
    publishedDate?: Date | string,
    tags : string[]
}