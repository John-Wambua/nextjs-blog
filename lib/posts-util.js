import fs from 'fs';
import * as path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(),'posts');

export const getPostsFiles = ()=>{
    return fs.readdirSync(postsDirectory);
}
export const getPostData = (postIdentifier)=>{
    const postSlug = postIdentifier.replace(/\.md$/,'');//removes file extension
    const filepath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filepath, 'utf-8');

    const {data, content} = matter(fileContent);

    return {
        slug: postSlug,
        ...data,
        content
    }
}

export const getAllPosts = ()=>{
    const postFiles = getPostsFiles();
    const postData = postFiles.map(getPostData)

    return postData.sort((postA, postB)=>postA.date > postB.date ? -1 : 1);
}

export const getFeaturedPosts = ()=>{
    const allPosts = getAllPosts();
    return allPosts.filter(post =>post.isFeatured);
}