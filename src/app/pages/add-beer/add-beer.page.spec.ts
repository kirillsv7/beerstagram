import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBeerPage } from './add-beer.page';

describe('AddBeerPage', () => {
  let component: AddBeerPage;
  let fixture: ComponentFixture<AddBeerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddBeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
