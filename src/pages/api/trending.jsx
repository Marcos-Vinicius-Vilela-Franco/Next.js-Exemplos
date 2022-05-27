import {apiBase,apiKey} from '../../../lib/tmdb'


export default async function handler(req, res) {
    const resp = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
    const json = await resp.json();
    res.status(200).json({
        list: json.results
    });
  }
  