import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbookMeaningDrawerComponent } from './ibook-meaning-drawer.component';

describe('IbookMeaningDrawerComponent', () => {
  let component: IbookMeaningDrawerComponent;
  let fixture: ComponentFixture<IbookMeaningDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbookMeaningDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbookMeaningDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
