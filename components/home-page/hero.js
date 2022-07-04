import Image from "next/image";
import styles from './hero.module.css';

const Hero = ()=>{
    return <section className={styles.hero}>
        <div className={styles.image}>
            <Image
                src='/images/site/wambua.jpg'
                alt='A image showing John Wambua'
                width={300}
                height={300}
            />
        </div>
        <h1>Hi I am John Wambua</h1>
        <p>I am a full stack developer specialising in the MEAN/ MERN stack</p>
    </section>
}
export default Hero;