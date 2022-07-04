import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData, getPostsFiles} from "../../lib/posts-util";
import Head from "next/head";

const SinglePostPage = ({post})=>{
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt}/>
            </Head>
            <PostContent post={post} />
        </>
    )
}

export function getStaticPaths(){
    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map(file=>file.replace(/\.md$/,''))
    const paths = slugs.map((slug) => ({params: { slug }}))

    return {paths, fallback: false}
}
export function getStaticProps({params}){
    const post = getPostData(params.slug);
    return {
        props: {post},
        revalidate: 600
    }
}
export default SinglePostPage;