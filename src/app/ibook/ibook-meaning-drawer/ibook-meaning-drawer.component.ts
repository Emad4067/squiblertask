import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WordsAPIService } from 'src/app/services/wordsAPI.service';

@Component({
  selector: 'app-ibook-meaning-drawer',
  templateUrl: './ibook-meaning-drawer.component.html',
  styleUrls: ['./ibook-meaning-drawer.component.scss'],
})
export class IbookMeaningDrawerComponent implements OnInit {
  public wordDefinition: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private wordsService: WordsAPIService
  ) {
    this.getWordDefinition();
    // this.wordDefinition = this.getMockData();
  }

  ngOnInit(): void {}


  private getMockData() {
    return [
      {
        "definition": "trying something to find out about it",
        "partOfSpeech": "noun"
      },
      {
        "definition": "any standardized procedure for measuring sensitivity or memory or intelligence or aptitude or personality etc",
        "partOfSpeech": "noun"
      },
      {
        "definition": "a set of questions or exercises evaluating skill or knowledge",
        "partOfSpeech": "noun"
      },
      {
        "definition": "test or examine for the presence of disease or infection",
        "partOfSpeech": "verb"
      },
      {
        "definition": "examine someone's knowledge of something",
        "partOfSpeech": "verb"
      },
      {
        "definition": "put to the test, as for its quality, or give experimental use to",
        "partOfSpeech": "verb"
      },
      {
        "definition": "the act of testing something",
        "partOfSpeech": "noun"
      },
      {
        "definition": "the act of undergoing testing",
        "partOfSpeech": "noun"
      },
      {
        "definition": "achieve a certain score or rating on a test",
        "partOfSpeech": "verb"
      },
      {
        "definition": "a hard outer covering as of some amoebas and sea urchins",
        "partOfSpeech": "noun"
      },
      {
        "definition": "determine the presence or properties of (a substance)",
        "partOfSpeech": "verb"
      },
      {
        "definition": "show a certain characteristic when tested",
        "partOfSpeech": "verb"
      },
      {
        "definition": "undergo a test",
        "partOfSpeech": "verb"
      }
    ]
  }

  private getWordDefinition() {
    if (this.data?.selection) {
      this.wordsService.getWordDefinition(this.data?.selection).subscribe({
        next: (res) => {
         console.log('response',res)
         this.wordDefinition = res?.definitions
        },
        error: (err) => {
          console.log('error while fetching definition',err)
        },
      });
    }
  }
}
