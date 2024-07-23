import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAtletaComponent } from './home-page-atleta.component';

describe('HomePageAtletaComponent', () => {
  let component: HomePageAtletaComponent;
  let fixture: ComponentFixture<HomePageAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageAtletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
