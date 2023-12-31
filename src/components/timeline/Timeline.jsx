import Lines from '../../assets/images/Lines.png';
import circle from '../../assets/images/circle.png';

import styles from './Timeline.module.css';


const Timeline = () => {
    return (
        <section className={styles.timeline} id='timeline'>
            <img src={circle} alt="circle" className={styles.circleOne} />
            <div className={styles.mobileWrapper}>
                <div className='flex items-center flex-col py-20'>
                    <div className='flex h-full  w-10/12  flex-col justify-center '>
                        <h1 className={styles.title}>Timeline</h1>
                    </div>
                    <div className={styles.lineContainer}>
                        <div className={styles.lineFirst}>
                            <h1 className={styles.info}>Реєстрація</h1>
                            <p className={`${styles.info} opacity-80`}>до 17.11 </p>
                            <span className={styles.dot}>
                          </span>
                            <span className={styles.line}>
                        </span>
                        </div>

                        <div className={styles.lineSecond}>
                            <h1 className={styles.info}>Відбірковий етап</h1>
                            <p className={`${styles.info} opacity-80`}>  18.11 - 24.11</p>
                            <span className={styles.dot}>
                          </span>
                            <span className={styles.line}>
                        </span>
                        </div>

                        <div className={styles.lineThird}>
                            <h1 className={styles.info}>Дні лекцій</h1>
                            <p className={`${styles.info} opacity-80`}>  25.11 - 30.11</p>
                            <span className={styles.dot}>
                          </span>
                            <span className={styles.line}>
                        </span>
                        </div>

                        <div className={styles.lineFourth}>
                            <h1 className={styles.info} >Фінал</h1>
                            <p className={`${styles.info} opacity-80`}> 01.12 - 03.12</p>
                            <span className={styles.dot}>
                          </span>
                            <span className={styles.line}>
                        </span>
                        </div>
                        <img src={Lines} alt='lines' className={styles.lines} />
                    </div>
                </div>
            </div>
            <img src={circle} alt="circle" className={styles.circleTwo} />
        </section>
    )
}

export default Timeline;