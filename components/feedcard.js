import styles from '../styles/FeedCard.module.css'

const FeedCard = ({article}) =>{
    return <article  className={styles.feedcard}>
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    {
        !!article.urlToImage && <img src={article.urlToImage} alt={article.title} loading="lazy" width="500"/>
    }
</article>
}

export default FeedCard;