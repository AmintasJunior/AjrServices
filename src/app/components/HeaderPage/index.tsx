
'use client' 
import styles from './style.module.css';
import Image from 'next/image';


export function HeaderPage() {
  return (
    <div>
      <div className={styles.CxHeader}>
        <div className={styles.CxLogoNavLink}>
        <Image src="/LOGO_AMINTAS_Azual.png" alt='Logo AJ' width={70} height={70}/>
        
        <nav className={styles.CxLinks}>
         <div className={styles.TxtPage}>• AJR Services</div>
        </nav>
        </div>
      </div>
    </div>
  );
}
