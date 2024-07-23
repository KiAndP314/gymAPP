import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltrainerListComponent } from './personaltrainer-list.component';

describe('PersonaltrainerListComponent', () => {
  let component: PersonaltrainerListComponent;
  let fixture: ComponentFixture<PersonaltrainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaltrainerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaltrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
