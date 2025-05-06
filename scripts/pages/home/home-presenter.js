import { sleep } from '../../utils.js';
async #showCats() {
    this.#view.showLoading();
   
    const cats = await this.#model.getAllCats();
    this.#view.showCats(cats);
   
    this.#view.hideLoading();
    
  }
  async #getCats() {
    this.#view.showLoading();
 
    const cats = await this.#model.getAllCats();
    await sleep();
    this.#view.showCats(cats);
 
    this.#view.hideLoading();
  }