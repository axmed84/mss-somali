import styles from './header.module.scss'
const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <ul>
                <li>
                    <a href='#' className={styles.logo}>Mss Soomaali</a>
                </li>
                <li>
                    <a href='#'>All Components</a>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header