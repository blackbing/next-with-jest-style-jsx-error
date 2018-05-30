import css from 'styled-jsx/css';

const color = 'red';
const backgroundColor = '#eee';

export default css`
    .hello {
        background-color: ${backgroundColor};
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;

        &:hover {
            color: ${color};
        }
        @media only screen and (max-width: 480px) {
            font-size: 20px;
        }
    }
`;
