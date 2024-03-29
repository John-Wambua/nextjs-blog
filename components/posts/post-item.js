import Link from "next/link";

import styles from './post-item.module.css'
import Image from "next/image";
const PostItem = ({post: {title, image, date, excerpt, slug}, ...props})=>{

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    return <li className={styles.post}>
        <Link href={linkPath}>
            <a>
                <div className={styles.image}>
                    <Image
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}
export default PostItem;