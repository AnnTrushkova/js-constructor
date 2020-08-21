import image from './assets/helpbox-contact.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks'

export const model = [

    new TitleBlock('Test Title', {
        tag: 'h1',
        styles: 'background: #0552d4; color: #fff; text-align: center; padding: 15px 0;'
    }),
    new ImageBlock(image, {
        alt: 'my img',
        imageStyles: 'width: 100%'
    }),
    new TextColumnBlock([
        '1 text dfkj skdjksdj lkjsd sdkasd kjasd',
        '2 text dfkj skdjksdj lkjsd sdkasd kjasd',
        '3 text dfkj skdjksdj lkjsd sdkasd kjasd',
    ], {
        styles: 'background: #3c5c09; color: white; text-align: center; padding: 3rem; '
    }),
    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', {
        styles: 'background: #dbdbdb47; color: `black`; padding: 3rem;'
    })

]
