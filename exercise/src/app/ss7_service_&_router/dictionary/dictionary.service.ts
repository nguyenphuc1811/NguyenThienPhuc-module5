import {Injectable} from '@angular/core';
import {IWord} from './i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWords: IWord[] = [{
    word: 'cat',
    mean: 'meo'
  }];

  constructor() {
  }

  findByWord(word: string) {
    debugger
    for (let i = 0; i < this.getAll().length; i++) {
      if (this.getAll()[i].word === word) {
        return this.getAll()[i].mean;
      }
    }
    return 'Không tìm thấy từ nào có nghiã';
  }

  getAll() {
    return this.iWords;
  }
}
