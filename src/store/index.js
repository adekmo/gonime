import axios from 'axios';
import { selector } from 'recoil';

const movie = selector({
    key: 'movies',
    get: async () => {
        let mov = null;

        try {
            let { data } = await axios.get('https://gogoanime2.p.rapidapi.com/anime-movies');
            mov = {mov: data}
        } catch (error) {
            console.log('data', error);
        }

        return mov;
    }
})

export { movie }