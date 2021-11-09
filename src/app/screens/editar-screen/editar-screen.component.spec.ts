import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarScreenComponent } from './editar-screen.component';

describe('EditarScreenComponent', () => {
  let component: EditarScreenComponent;
  let fixture: ComponentFixture<EditarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
