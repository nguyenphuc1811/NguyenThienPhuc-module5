import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  mean?: string;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe(param => {
        this.mean = dictionaryService.findByWord(param.get('word'));
      }, error => {
      },
      () => {
      });
  }

  ngOnInit(): void {
  }

}
