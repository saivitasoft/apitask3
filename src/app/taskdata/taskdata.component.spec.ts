import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdataComponent } from './taskdata.component';

describe('TaskdataComponent', () => {
  let component: TaskdataComponent;
  let fixture: ComponentFixture<TaskdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskdataComponent]
    });
    fixture = TestBed.createComponent(TaskdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
