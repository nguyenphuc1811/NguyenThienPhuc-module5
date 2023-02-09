import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  word = '';

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
  }
}
