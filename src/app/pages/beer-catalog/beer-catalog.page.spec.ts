import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerCatalogPage } from './beer-catalog.page';

describe('BeerCatalogPage', () => {
  let component: BeerCatalogPage;
  let fixture: ComponentFixture<BeerCatalogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeerCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
