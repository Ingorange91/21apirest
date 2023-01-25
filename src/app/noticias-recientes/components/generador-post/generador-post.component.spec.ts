import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorPostComponent } from './generador-post.component';

describe('GeneradorPostComponent', () => {
  let component: GeneradorPostComponent;
  let fixture: ComponentFixture<GeneradorPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
