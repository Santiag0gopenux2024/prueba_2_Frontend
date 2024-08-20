import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RegisterTaskComponent } from './register-task.component';
import { SaveTaskService } from '../../services/save-task.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterTaskComponent', () => {
  let component: RegisterTaskComponent;
  let fixture: ComponentFixture<RegisterTaskComponent>;
  let mockSaveTaskService: jasmine.SpyObj<SaveTaskService>;

  beforeEach(async () => {
    mockSaveTaskService = jasmine.createSpyObj('SaveTaskService', ['updateTask', 'addTask']);

    await TestBed.configureTestingModule({
      declarations: [ RegisterTaskComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ],
      providers: [
        FormBuilder,
        { provide: SaveTaskService, useValue: mockSaveTaskService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
