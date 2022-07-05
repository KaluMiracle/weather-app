import styles from '../../styles/index.module.scss';

const NewsCard = ({

    headline,
    abstract,
    multimedia,
    leadParagraph,
    url
}) =>  {
    return (
                
        <div className={styles.news_card  + ' animate__animated animate__bounceInUp'} style={{
            color:'white'
        }}>
            <h3>{headline}</h3>
            <p>{abstract}</p>
            <div>
                
            </div>
            {
                multimedia[0] ? <img   width='100%' alt='failed to load image' src={`https://www.nytimes.com/${multimedia[0].url}`} loading='lazy'></img>  : null 
            }
            {
                abstract === leadParagraph ? null : <p>{leadParagraph}</p>
            }
            <a target={'_blank'} href={url} rel="noreferrer">Read more...</a>
        </div>
    )
}

export default NewsCard;