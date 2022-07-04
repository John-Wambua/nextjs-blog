import styles from './post-grid.module.css';
import PostItem from "./post-item";

const PostsGrid = ({posts})=>{
    return(
        <ul className={styles.grid}>
            {posts.map(post=>
                <PostItem key={post.slug} post={post} />
            )}
        </ul>
    )
}
export default PostsGrid;