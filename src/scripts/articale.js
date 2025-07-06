
import { getCollection } from "astro:content";
export const getAllArticales = async ()=>{
    const Posts1 = await getCollection("testBlog");
    const Posts2 = await getCollection("testBlog2");
    const allPosts = [...Posts1, ...Posts2];
    const uniqueCategories = [
        ...new Set(allPosts.map((post) => post.collection).flat()),
    ];
    const uniqueTags = [
        ...new Set(allPosts.map((post) => post.data.tags).flat()),
    ];

    return [ allPosts, uniqueCategories, uniqueTags ];
}