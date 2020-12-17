import Jokes from "../components/Jokes/Jokes";
import AboutJoke from "../components/AboutJoke/AboutJoke";

export const routes = [
    {
        path: '',
        component: Jokes,
        name: 'Jokes',
    },
    {
        path:'/:id',
        component: AboutJoke,
        name: 'Joke'
    }



]
