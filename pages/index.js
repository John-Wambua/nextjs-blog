import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";
import Head from "next/head";

const HomePage = ({featuredPosts})=>{
    return (
          <>
              <Head>
                  <title>JW Blog</title>
                  <meta name='description' content="I am a full stack engineer aspiring to become a blogger"/>
              </Head>
            <Hero/>
            <FeaturedPosts posts={featuredPosts}/>
          </>
      )
}

export async function getStaticProps(){
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            featuredPosts
        }
    }
}
export default HomePage;