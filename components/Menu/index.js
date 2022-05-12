import { useState, useEffect } from 'react'
import styles from './menu.module.scss'

const Menuitem = ({
    icon,
    val = '',
    href = '',
    style={},
    active= false,
    setActive
}) => {

    return(
        <div className={styles.menu_item + ' ' + (active ? styles.active : '')} onClick={()=>setActive(navItems[val])} style={{
            ...style,
            
        }}>
            <div className={styles.icon}>
                <svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </div>
            
            
            <p>{navItems[val]}</p>

        </div>
    )
}


const navItems = {
    top: 'Top stories',
    covid: 'COVID-19',
    nigeria: 'Nigeria',
    world: 'World',
    local: 'Your local News',
    business: 'Business',
    entertainment: 'Entertainment',
    technology: 'Technology',
    sports: 'Sports',
    science: 'Science',
    health: 'Health',

}

const Menu = () => {
    const [active,setActive] = useState(navItems.top)

    useEffect(()=>{
        console.log('active', active)
    }, [active])
    return(
        <div className={styles.menu + ' animate__animated animate__bounceInLeft'} data-aos="fade-right">

            {
                Object.keys(navItems).map((key, index)=>{
                    if (key === 'covid') return (
                        <Menuitem
                            key={index} 
                            val={key} 
                            active={active === navItems[key]} 
                            setActive={setActive}

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
                            val={key} 
                            active={active === navItems[key]} 
                            setActive={setActive}
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