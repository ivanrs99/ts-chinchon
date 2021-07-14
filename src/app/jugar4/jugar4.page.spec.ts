import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jugar4Page } from './jugar4.page';

describe('Jugar4Page', () => {
  let component: Jugar4Page;
  let fixture: ComponentFixture<Jugar4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jugar4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jugar4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
