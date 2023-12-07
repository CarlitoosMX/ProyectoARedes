import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxpartidosComponent } from './proxpartidos.component';

describe('ProxpartidosComponent', () => {
  let component: ProxpartidosComponent;
  let fixture: ComponentFixture<ProxpartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxpartidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxpartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
