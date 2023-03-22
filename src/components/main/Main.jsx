import Section from '../section/Section'
import style from './main.module.scss'

const Main = () => {
    return <main className={style ['main']}>
        <Section title='Supervisor' text='Monitors activity to identify project roadblocks' image='/public/images/icon-supervisor.svg'/>
        <Section title='Team Builder' text='Scans our talent network to create the optimal team for your project' image='/public/images/icon-team-builder.svg'/>
        <Section title='Karma' text='Regularly evaluates our talent to ensure quality' image='/public/images/icon-karma.svg'/>
        <Section title='Calculator' text='Uses data from past projects to provide better delivery estimates' image='/public/images/icon-calculator.svg'/>
    </main>
}

export default Main