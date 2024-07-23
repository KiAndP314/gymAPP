import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltrainerCardComponent } from './personaltrainer-card.component';

describe('PersonaltrainerCardComponent', () => {
  let component: PersonaltrainerCardComponent;
  let fixture: ComponentFixture<PersonaltrainerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaltrainerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaltrainerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
