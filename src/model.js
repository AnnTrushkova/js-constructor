// import image from './assets/helpbox-contact.jpg'
import image from './assets/english.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks'
import {css} from "./utils"

export const model = [

    new TitleBlock('Курсы английского языка в Минске', {
        tag: 'h2',
        styles: css({
            background: '#111111',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5 rem',
        })
    }),
    new ImageBlock(image, {
        alt: 'my img',
        imageStyles: 'width: 100%; height: 400px'
    }),
    new TextColumnBlock([
        'Языковые курсы для взрослых',
        'Языковые курсы для детей',
        'Онлайн-обучение',
    ], {
        styles: 'background: #f8de05; color: 2d1e1e; font-weight: bold; text-align: center; padding: 3rem; '
    }),
    new TextBlock('Наши курсы английского языка доступны для начинающих с нуля и для самых продвинутых студентов. ' +
        'Обучаться можно в групповом, индивидуальном или VIP-формате. Несомненным преимуществом является постоянная ' +
        'дополнительная практика: бесплатные занятия с носителями языка из Великобритании и США, языковые клубы и ' +
        'проекты Streamline Club. ', {
        styles: 'background: #dbdbdb47; color: `black`; padding: 3rem;'
    })

]
