/* eslint-disable @typescript-eslint/no-explicit-any */
export type IndividualPost ={
    _id:string;
    title:string;
    category:{
        title:string
    },
    author:{
        name:string,
        twitter?:string,
        bio?:string,
        image?:any
        email:string
    },
    mainImage:any;
    publishedAt:string;
    excerpt:string;
    currentSlug:string;
    body:any;
}

export type PostType={
    _id:string;
    title:string;
    category:{
        title:string
    },
    author:{
        name:string,
        twitter?:string,
        bio?:string,
        image?:any
        email:string
    },
    mainImage:any;
    publishedAt:string;
    excerpt:string;
    currentSlug:string;
}