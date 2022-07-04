import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";
import Head from "next/head";

const AllPostsPage = ({posts})=>{
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name='description' content='A list of all programming-related tutorials.'/>
            </Head>
            <AllPosts posts={posts}/>
        </>
    )
}

export function getStaticProps(){
    const posts = getAllPosts();
    return {
        props: {posts}
    }
}
export default AllPostsPage;