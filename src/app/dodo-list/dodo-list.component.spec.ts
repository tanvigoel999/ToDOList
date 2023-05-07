import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodoListComponent } from './dodo-list.component';

describe('DodoListComponent', () => {
  let component: DodoListComponent;
  let fixture: ComponentFixture<DodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
