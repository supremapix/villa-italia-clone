import veranda from '@/assets/gallery-1.jpg';
import room from '@/assets/room-1.jpg';
import pool from '@/assets/gallery-6.jpg';

// Only the client's confirmed photographic collection is reused here.
// These are guesthouse photographs, never evidence of an attraction or event.
export const guesthousePhotographs = {
  veranda: { image:veranda, imageAlt:'Varanda de madeira e jardim da Pousada Vila D’Itália', caption:'Varanda da Pousada Vila D’Itália. Fotografia da hospedagem, não do passeio abordado no texto.', file:'src/assets/gallery-1.jpg' },
  room: { image:room, imageAlt:'Quarto de casal da Pousada Vila D’Itália', caption:'Quarto da Pousada Vila D’Itália. Fotografia da hospedagem.', file:'src/assets/room-1.jpg' },
  pool: { image:pool, imageAlt:'Piscina externa e varandas da Pousada Vila D’Itália', caption:'Piscina da Pousada Vila D’Itália. Fotografia da hospedagem, não de uma praia ou parque.', file:'src/assets/gallery-6.jpg' },
};

export function guesthousePhotoForArticle(id:string) {
  const key = /pousada|hospedagem|casais|mobilidade/.test(id) ? 'room' : /familia|criancas|verao|temporada/.test(id) ? 'pool' : 'veranda';
  const photo = guesthousePhotographs[key];
  return {image:photo.image,imageAlt:photo.imageAlt,imageCredit:{
    author:'Acervo da Pousada Vila D’Itália (fotógrafo não identificado)',
    source:'https://www.pousadaviladitalia.com.br/#gallery',
    license:'',licenseLabel:'Reutilização no site autorizada pelo cliente; sem licença aberta declarada',
    changes:photo.caption,
  }};
}
