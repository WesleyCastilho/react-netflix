const { REACT_APP_API_KEY } = process.env;
const { REACT_APP_API_BASE } = process.env;

const OPTIONS = `&language=pt-BR&api_key=${REACT_APP_API_KEY}`;

const basicFetch = async (endpoint) => {
    const req = await fetch(`${REACT_APP_API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213${OPTIONS}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?${OPTIONS}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${OPTIONS}`)                
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28${OPTIONS}`)                
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35${OPTIONS}`)                
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27${OPTIONS}`)                
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749${OPTIONS}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99${OPTIONS}`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${OPTIONS}`)
                break;
                case 'tv' :
                    info = await basicFetch(`/tv/${movieId}?${OPTIONS}`);
                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
    }

}