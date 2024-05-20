import { createBoard } from '@wixc3/react-board';
import styles from './ui-kit.board.module.scss';
import SectionSvg from '../../../assets/section.svg';
import { Button } from '../../../components/button/button';

const icon = (
    <svg viewBox="0 0 40 40" width="14px">
        <mask id="mask0_1_2" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
            <path d="M40 0H0V40H40V0Z" fill="white"></path>
        </mask>
        <g mask="url(#mask0_1_2)">
            <path d="M0 0H40V40H0V0Z" fill="#34BDB2"></path>
            <path
                d="M26.322 13.6002C24.21 12.3749 22.3354 11.4113 19.8829 11.4538C18.4798 11.4781 17.2751 12.2408 17.0218 13.6366C16.786 14.9352 17.9404 15.6555 19.1413 16.0977C21.133 16.8311 22.867 17.6055 24.824 18.421C28.3816 19.9036 30.2058 22.3048 29.9902 25.3854C29.7158 29.3054 27.3568 32.1168 23.6076 33.0436C18.7085 34.2548 13.9512 32.4098 9.93164 29.8342C10.9462 28.2888 12.1232 27.2338 13.1316 25.6976C15.4538 26.6862 17.2782 28.0218 19.7076 28.23C21.4206 28.3768 23.3614 28.2952 23.7464 26.2832C24.0932 24.4688 22.5142 23.4962 20.974 22.9528C19.1404 22.3062 17.3102 21.515 15.5121 20.7806C12.1882 19.423 10.8357 16.7675 11.0634 13.6392C11.0634 11.805 12.5852 8.09767 16.3166 6.94455C22.0498 5.17267 25.2086 6.98705 29.3658 9.65877C28.2616 11.1191 27.4128 12.1574 26.322 13.6002Z"
                fill="white"
            ></path>
        </g>
    </svg>
);

export default createBoard({
    name: 'UI Kit',
    Board: () => (
        <div className={styles.root}>
            <section className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>UI Kit</h1>
                <div className={styles.logo}>
                    <span className={styles.logoMarker}>Designer</span> Playground
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <img className={styles.asterisk} src={SectionSvg} />
                    <div>
                        <h2 className={styles.sectionTitle}>Buttons</h2>
                        <p className={styles.sectionSubtitle}>
                            See button properties in the &quot;Properties Panel&quot; on the right{' '}
                        </p>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.contentBlock}>
                        <Button size="large" variant="primary">
                            Large
                        </Button>
                        <Button variant="primary">Medium</Button>
                        <Button size="small" variant="primary">
                            Small
                        </Button>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.contentBlock}>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button disabled={true}>Disabled</Button>
                    </div>
                </div>
            </section>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
        windowWidth: 1024,
        windowHeight: 973,
    },
});
