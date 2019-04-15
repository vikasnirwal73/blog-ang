export interface PostSimple {
    _id: string;
    title: string;
    body: string;
    author: string;
    dateCreated: string;
    topics? : any[];
    categories? : any[];
}