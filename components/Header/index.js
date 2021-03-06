import styles from './header.module.scss';
import menuIcon from '../../assets/icons/menu.svg'
import Image from 'next/image'





const Header = ({
    showMenu,
    setShowMenu
})=>{
    return(
        <div className={styles.header}>
            
            <div className={styles.icon} onClick={()=>setShowMenu(!showMenu)}>
                <svg focusable="false" viewBox="0 0 24 24"  style={{
                    fill: showMenu ? "#2a41659d" : 'white'
                }}>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
            </div>

            {/* <div className={styles.icon}>
                <svg focusable="false" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                    <path d="M0,0h24v24H0V0z" fill="none"></path>
                </svg>
            </div> */}

            <div style={{
                width: '90%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h1>News</h1>
                <p className={styles.smallText}>Powered by New York Times API</p>
            </div>
            
            <div className={styles.search_container}>
            </div>
        </div>
    )
}

export default Header;