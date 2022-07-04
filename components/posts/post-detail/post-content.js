import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import PostHeader from "./post-header";
import styles from './post-content.module.css'
import Image from "next/image";

SyntaxHighlighter.registerLanguage('js', js);

const PostContent = ({post})=>{

    const customComponents = {
        img:  (image)=>{
            return <Image
                src={`/images/posts/${post.slug}/${image.src}`}
                alt={image.alt}
                width={600}
                height={300}
            />
        },
        code: ({className, children, ...code})=>{

            console.log(children)
            console.log(code)
            return <SyntaxHighlighter language="javascript" style={atomDark}>
                {children[0]}
            </SyntaxHighlighter>
        }
    }
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
        </article>
    )
}
export default PostContent