export const getGifs = async( category ) => {
    const key = 'BAlJP3cL8X15nkPxhvgZgCahtFDFvT65';
    const limit = '10';
    const urlBase = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${key}`;

    const resp = await fetch(urlBase);
    const { data } = await resp.json();
    const gifs = data.map( gif => {
       return  {
           id: gif.id,
           title: gif.title,
           img: gif.images?.downsized_medium.url
       }
    });
  
    return gifs;

}