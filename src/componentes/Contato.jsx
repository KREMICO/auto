import styles from './Contato.module.css'
import {WhatsappLogo, InstagramLogo, FacebookLogo} from '@phosphor-icons/react'


function Contato() {
    return (
        <div className={styles.contactFather}>
        <div className={styles.socials}>
            <a  className={styles.icon}>
            <div>
                <FacebookLogo  color='#eee' size={30}/>
            </div>
            FACEBOOK
            </a>
            <a  className={styles.icon}>
            <div>
                <InstagramLogo  color='#eee' size={30}/>
            </div>
            INSTAGRAM
            </a>
            <a  className={styles.icon}>
            <div>
                <WhatsappLogo  color='#eee' size={30}/>
            </div>
            WHATSAPP
            </a>
            
            
        </div>
        <div>
            <a className={styles.endereco}>1255 Woodruff Rd</a>
            <a className={styles.endereco}> Greenvile, South Carolina</a>
        </div>
        </div>
    )
}


export default Contato