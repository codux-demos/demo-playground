import { createBoard } from '@wixc3/react-board';
import styles from './card-board.board.module.scss';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Build Your Card',
    Board: () => (
        <div className={styles.card}>
            <img
                src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_01.svg"
                className={styles.image}
            />

            <div className={styles['product-info']}>
                <h1 className={styles.title}>Design Your Card</h1>
                <p className={styles.description}>
                    Unleash your creativity with Codux. Customize fonts, colors, and layouts to
                    craft a masterpiece tailored to your vision. Your art, your rules.
                </p>
                <div className={styles['card-footer']}>
                    <span className={styles.price}>$202</span>
                    <Button className={styles['card-button']} size="small">
                        Buy Now
                    </Button>
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
