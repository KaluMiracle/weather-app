import { useState, useEffect } from 'react'
import styles from './menu.module.scss'
import { AppContext } from '../../layouts/baselayout'
import { useContext } from 'react'
const Menuitem = ({
    icon,
    item = '',
    href = '',
    style={},
    active= false,
    setActive,
    dispatch,
    query
}) => {

    const handleClick = () =>{
        setActive(item.query)
        dispatch(item.query)
    }

    return(
        <div className={styles.menu_item + ' ' + (active ? styles.active : '')} onClick={handleClick} style={{
            ...style,
            
        }}>
            <div className={styles.icon}>
                <svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </div>
            
            
            <p>{item.text}</p>

        </div>
    )
}


const navItems = {
    top: {text:'Top Stories', query: ''},
    covid: {text:'COVID-19', query: 'covid'},
    nigeria: {text:'NIGERIA', query: 'nigeria'},
    world: {text:'World', query: 'world'},
    local_news: {text:'Local News', query: 'localnews'},
    business: {text:'Business', query: 'business'},
    entertainment: {text:'Entertainment', query: 'entertainment'},
    technology: {text:'Technology', query: 'technology'},
    sports: {text:'Sports', query: 'sports'},
    science: {text:'Science', query: 'science'},
    health: {text:'Health', query: 'health'},

}

const Menu = () => {
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
                        />
                    )

                    return (
                        <Menuitem
                            key={index} 
                            item={item} 
                            active={active === item.query} 
                            setActive={setActive}
                            dispatch={appContext.dispatch}
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