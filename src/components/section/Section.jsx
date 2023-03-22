import style from './section.module.scss'

const Section = ({title, text, image}) => {
    return <div className={style ['section']}>
        <h3 className={style ['section__title']}>{title}</h3>
        <p className={style ['section__text']}>{text}</p>
        <img className={style ['section__icon']} src={image} alt="" />
    </div>
}

export default Section