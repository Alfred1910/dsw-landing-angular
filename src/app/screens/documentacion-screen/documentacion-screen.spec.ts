import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentacionScreen } from './documentacion-screen';

describe('DocumentacionScreen', () => {
  let component: DocumentacionScreen;
  let fixture: ComponentFixture<DocumentacionScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacionScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentacionScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
