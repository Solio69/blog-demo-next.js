import React from 'react';
import Post from '../../post/Post';
import styles from './Blog.module.scss'

const Blog = () => {
    return (
        <div className={styles.blog}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Blog;