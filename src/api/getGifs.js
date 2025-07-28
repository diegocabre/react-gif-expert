export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KZg0WIVAVXT2FkP2szufk89QDl0xTPin&q=${category}&limit=20&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images.downsized_medium.url
    }));

    return gifs;
    
}