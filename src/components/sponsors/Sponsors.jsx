import SponsorLorem from '../../assets/images/LoremLogo.png';
import SponsorSoftServe from '../../assets/images/softserve_logo.png';
import SponsorSolidGate from '../../assets/images/solidgate_logo.png';
import SponsorLifecell from '../../assets/images/lifecell_logo.png';
import SponsorAIHouse from '../../assets/images/aihouse_logo.png';

import styles from './Sponsors.module.css';
import SponsorBlocks from "../ui/sponsor-blocks/SponsorBlocks";


const sponsorDataFirst = [
    {
        img: SponsorLorem,
        link: 'https://loremipsum.ua/',
        subtitle:'Data Science',
        subtitleTab:'Data Science',
        description:'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.'
    },
    {
        img: SponsorAIHouse,
        link: 'https://loremipsum.ua/',
        description: 'AI HOUSE — це найбільше та найпотужніше АІ-комʼюніті в Україні, в якому учасники обмінюються досвідом і знаннями, здобувають навички, реалізовують нові технологічні та бізнесові ідеї, розвивають AI-індустрію та сприяють народженню продуктових AI-стартапів.'
    },
]

const sponsorDataSecond = [
    {
        img: SponsorSolidGate,
        link: 'https://loremipsum.ua/',
        subtitle:'Software Engineering',
        subtitleTab:'Software Engineering',
        description:'Компанія створює надсучасний фінтех-продукт у сфері онлайн-платежів. Solidgate допомагає інтернет-бізнесам приймати платежі та забезпечувати безперебійну роботу для своїх клієнтів по всьому світу: від Європи до ЛАТАМу, від США до Азії, загалом у 150+ країнах і 150+ валютах. Платіжна платформа Solidgate підтримує понад 100 платіжних методів, щоб партнери могли пропонувати зручні платежі для своїх клієнтів. Серед партнерів компанії понад 200 продуктових бізнесів у всьому світі. Команда Solidgate налічує 150+ спеціалістів, серед яких понад 80 людей працюють у продуктово-технічному напрямі.'
    },
    {
        img: SponsorSoftServe,
        link: 'https://loremipsum.ua/',
        // subtitleTab:'Software Engineering',
        description:'Найбільша глобальна ІТ-компанія з українським корінням, що з року в рік входить до переліку найкращих ІТ-роботодавців України. Компанія надає можливість отримати всі job ready skills завдяки навчальним рішенням від SoftServe Academy та розпочати свою роботу, навіть будучи ще студентом.'
    },
    {
        img: SponsorLifecell,
        link: 'https://loremipsum.ua/',
        // subtitleTab:'Software Engineering',
        description:'Український оператор електронних комунікацій, що надає послуги мобільного зв’язку та передачі даних на базі швидкісного інтернету. Компанія розвиває інноваційну екосистему електронної комунікаційної галузі, реалізовуючи проєкти, спрямовані на розвиток «розумного міста», «розумного регіону», покращення безпеки громадян і розгортання мережі IoT (інтернету речей).'
    },
    ]

const Sponsors = () => {
    return (
        //eslint-ignore-next-line
        <section className={styles.sponsors} id='sponsors'>
            <div className='flex justify-around py-20'>
                <div className='flex  w-10/12  flex-col justify-center items-center relative'>
                    <div className='w-full'>
                        <h1 className={styles.title}>Партнери</h1>
                    </div>
                    <span className={styles.centerLine}></span>
                    <div className={styles.sponsorWrap}>
                        <div className='flex justify-center flex-wrap'>
                            <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                <SponsorBlocks props={sponsorDataFirst}/>
                            </div>
                            <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                <SponsorBlocks props={sponsorDataSecond}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors;