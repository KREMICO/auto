import styles from './Home.module.css'
import logo from '../assets/logo-principal.png'
import {WhatsappLogo, InstagramLogo, FacebookLogo, List} from '@phosphor-icons/react'
import ButtonW from './BtnW'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [expand, setExpand] = useState(false)

    function handleMenuExpand() {
        if (expand == false) {
            setExpand(true)
        } else {
            setExpand(false)
        }
    }

    function RenderMenu() {
        if (expand == true) {
            return (
                <ul className={styles.menuOpen}>
                        <a href='#contato'><li>Fale conosco</li></a>
                        <a href='#stock'><li>Veículos</li></a>
                        <a href='#quems'><li>Quem Somos?</li></a>
                    </ul>
            )
        }
    }




    return (
        <div>
            <header className={styles.header}>
                <img src={logo}/>
                
                <div className={styles.menuWrapper}>
                    <ul className={styles.menu}>
                        <a href='#contato'><li>Fale conosco</li></a>
                        <Link to={'/'}><li>Veículos</li></Link>
                        <a href='#quems'><li>Quem Somos?</li></a>
                    </ul>
                    <div className={styles.headerIcons}>
                    <a>
                        <WhatsappLogo weight='regular' color='#222' size={25}/>
                    </a>
                    <a>
                        <InstagramLogo weight='regular' color='#222' size={25}/>
                    </a>
                    <a>
                        <FacebookLogo weight='regular' color='#222' size={25}/>
                    </a>
                    </div>
                </div>
                <div className={styles.hiddenMenu} onClick={handleMenuExpand}>
                    <List color="#eee" size={30}/>
                </div>
            </header>
            <RenderMenu />
            

            
            
        </div>
    )
}

export default Home