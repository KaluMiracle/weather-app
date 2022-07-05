import styles from '../../pages/index.module.scss';
import Image from 'next/image';
import sadFace from '../../assets/img/sad_face.png'
const NetworkErrorFallBack = ({error}) => {
    return (
        <div className={styles.error_container}>
            <div><Image src={sadFace} width={150} height={120} alt=''/></div>          
         
          <p>{error} 
            <span className={styles.reload} onClick={() => getNews()}>
              reload
            </span>
          </p>
          
        </div>
    )
}

export default NetworkErrorFallBack