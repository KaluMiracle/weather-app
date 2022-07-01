import { useState, useEffect } from 'react'
import styles from './menu.module.scss'
import { AppContext } from '../../layouts/baselayout'
import { useContext } from 'react'
const Menuitem = ({
    item = '',
    style={},
    active= false,
    setActive,
    dispatch,
    setShowMenu
}) => {

    const handleClick = () =>{
        setActive(item.query)
        dispatch(item)
        setShowMenu(false)
    }

    return(
        <div className={styles.menu_item + ' ' + (active ? styles.active : '')} onClick={handleClick} style={{
            ...style,
            
        }}>
            
            <p>{item.text}</p>

        </div>
    )
}


const navItems = {
    top: {text:'Top Stories', query: '', twitter: 'BBCBreaking'},
    covid: {text:'COVID-19', query: 'covid', twitter: 'COVID19Tracking'},
    nigeria: {text:'NIGERIA', query: 'nigeria', twitter: 'Naija_PR'},
    world: {text:'World', query: 'world', twitter: 'CNN'},
    local_news: {text:'Local News', query: 'localnews', twitter: 'vanguardngrnews'},
    business: {text:'Business', query: 'business', twitter: 'business'},
    entertainment: {text:'Entertainment', query: 'entertainment', twitter: 'EW'},
    technology: {text:'Technology', query: 'technology', twitter: 'BBCTech'},
    sports: {text:'Sports', query: 'sports', twitter: 'SportsCenter'},
    science: {text:'Science', query: 'science', twitter: 'BBCTech'},
    health: {text:'Health', query: 'health', twitter: 'WHO'},

}

const Menu = ({
    setShowMenu
}) => {
    const appContext = useContext(AppContext)
    const [active,setActive] = useState(appContext.state.newsApiQuery)
    


    
    return(
        <div className={styles.menu + ' animate__animated animate__bounceInLeft'} data-aos="fade-right">

            {
                Object.values(navItems).map((item, index)=>{
                    if (item.text === 'COVID-19') return (
                        <Menuitem
                            key={index} 
                            item={item} 
                            active={active === item.query} 
                            setActive={setActive}
                            dispatch={appContext.dispatch}
                            style={{
                                padding: '10px',
                                borderTop: '0.5px solid white',
                                borderBottom: '0.5px solid white',
                                borderRadius: '0'
                            }}
                            setShowMenu={setShowMenu}
                        />
                    )

                    return (
                        <Menuitem
                            key={index} 
                            item={item} 
                            active={active === item.query} 
                            setActive={setActive}
                            dispatch={appContext.dispatch}
                            setShowMenu={setShowMenu}
                        />
                    )
                })
            }

            {/* 
 */}
        </div>
    )
}

export default Menu