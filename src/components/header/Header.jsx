import style from './header.module.scss'

const Header = () => {
    return <header className={style ['header']}>
        <h2 className={style ['thin-title']}>Reliable, efficient delivery</h2>
        <h2 className={style ['title']}>Powered by Technology</h2>
        <p className={style ['text']}>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </header>
}

export default Header