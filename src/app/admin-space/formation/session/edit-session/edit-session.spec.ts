import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSession } from './edit-session';

describe('EditSession', () => {
  let component: EditSession;
  let fixture: ComponentFixture<EditSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
