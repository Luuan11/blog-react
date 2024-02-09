import Banner from "components/Banner";
import styles from "./home.module.css";

import posts from "json/posts.json";

export default function Home() {
    return (
        <main>

            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => 
                    <li key={post.id}> 
                        Ler mais.
                    </li>
                )}
            </ul>

        </main>
    )
 }