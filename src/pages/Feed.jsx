import React from 'react'
import { Hero, NewEpisode, Kategori, Movie } from '../components'

import styles from '../style'

const Feed = () => {
    return (
        <div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <NewEpisode />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Kategori />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Movie />
                </div>
            </div>
        </div>
    )
}

export default Feed