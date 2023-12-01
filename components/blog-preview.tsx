import { titillium_web } from "./font";
import Image from "next/image";


type BlogDetails = {
    title: string,
    description: string,
    image: string,
    date: string,
}

const date = new Date();


const BlogPreviewCard = ({title, description,image,date}:BlogDetails)=>{
    return(
        <>
        
        </>
    )
}

export default BlogPreviewCard;