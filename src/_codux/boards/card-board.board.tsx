import { createBoard } from '@wixc3/react-board';
import { Image, Button } from 'semantic-ui-react';
import CardBoard_board_module from './card-board.board.module.scss';

export default createBoard({
    name: 'Build Your Card',
    Board: () => (
        <div className={CardBoard_board_module.card}>
            <Image
                src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_01.svg"
                className={CardBoard_board_module.image}
                rounded
            />
            <div className={CardBoard_board_module['product-info']}>
                <h1 className={CardBoard_board_module.title}>Design Your Card</h1>
                <p className={CardBoard_board_module.description}>
                    Unleash your creativity with Codux. Customize fonts, colors, and layouts to
                    craft a masterpiece tailored to your vision. Your art, your rules.
                </p>
                <div className={CardBoard_board_module['card-footer']}>
                    <span className={CardBoard_board_module.price}>$202</span>
                    <Button color="yellow">Buy Now</Button>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 874,
        windowWidth: 1024,
        canvasWidth: 370,
    },
});
