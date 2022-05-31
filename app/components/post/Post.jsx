import React from 'react';
import MuiCarousel from './carousel';
import styles from './Post.module.scss'

const Post = () => {
    return (
        <div className={styles.post}>
            <MuiCarousel/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sint, officia minima facere quod, maiores saepe vel, quo a eos suscipit nobis est recusandae ducimus deleniti consectetur eligendi quasi provident.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sed consequuntur, reprehenderit nostrum excepturi perspiciatis eos recusandae quam laborum ut, fugit illum aliquam in debitis accusantium nisi eveniet nihil repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam nam consectetur dolores aspernatur non alias nisi explicabo maiores saepe veritatis et, ab quasi nesciunt asperiores ipsum doloribus architecto necessitatibus!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non temporibus ipsam quasi! Minus quibusdam voluptas cumque aut est laborum veritatis ipsam? Dignissimos officiis a rem iusto itaque omnis quasi voluptas!
            </p>
            <div>31.05.2020</div>
        </div>
    );
};

export default Post;