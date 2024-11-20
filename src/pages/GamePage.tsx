import {ButtonCell} from '@telegram-apps/telegram-ui';

export const GamePage = () => {

    return (

        <div style={{
            display: 'grid',
            placeItems: 'center',  // Centers horizontally
            height: '10vh',          // Optional: makes the container fill the viewport
            placeContent: 'center'
            }}>

        <ButtonCell 
        title="Play Game"
        onClick={() => (window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D')}
        >Play Game
        </ButtonCell>
        </div>
    );
};