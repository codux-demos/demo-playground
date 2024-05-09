import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';
import { Button } from 'semantic-ui-react';

export default createBoard({
    name: 'Style Guide',
    Board: () => (
        <div className={StyleGuide_board_module.root}>
            <Button basic color="black">
                Black
            </Button>
        </div>
    ),
    isSnippet: true,
});
