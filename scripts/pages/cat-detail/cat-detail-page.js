import { parseActivePathname } from '../../routes/url-parser.js';
 
export default class CatDetailPage {
  async render() {
    return `
      <div id="cat-detail"></div>
 
      <p>Oke, sudah cukup. Kita bisa kembali ke <a href="#/">halaman home</a>.</p>
    `;
  }
 
  async afterRender() {
    const { id } = parseActivePathname();
 
    this.#presenter = new CatDetailPresenter(id, {
      model: CatsLocal,
      view: this,
    });
 
    await this.#presenter.getCatDetail();
  }
 
  showCat(cat) {
    const html = generateCatDetailTemplate(cat);
 
    document.getElementById('cat-detail').innerHTML = html;
  }

}