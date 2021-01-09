import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedsPhotosItem = ({photo}) => {
    return (
        <li className={styles.photo}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.vizualizacao}>{photo.acessos}</span>
        </li>
    );
}

export default FeedsPhotosItem;
