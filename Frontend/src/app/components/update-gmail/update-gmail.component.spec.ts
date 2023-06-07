import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGmailComponent } from './update-gmail.component';

describe('UpdateGmailComponent', () => {
  let component: UpdateGmailComponent;
  let fixture: ComponentFixture<UpdateGmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
