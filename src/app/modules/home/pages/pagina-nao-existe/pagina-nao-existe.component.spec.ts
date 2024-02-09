import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoExisteComponent } from './pagina-nao-existe.component';

describe('PaginaNaoExisteComponent', () => {
  let component: PaginaNaoExisteComponent;
  let fixture: ComponentFixture<PaginaNaoExisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNaoExisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNaoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
