import { createBoard } from '@wixc3/react-board';
import { Image } from 'semantic-ui-react';

export default createBoard({
    name: 'Card Board',
    Board: () => (
        <div>
            <Image
                src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_01.svg"
                size="small"
            ></Image>
        </div>
    ),
    isSnippet: true,
});
