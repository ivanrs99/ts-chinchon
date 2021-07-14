import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jugar3Page } from './jugar3.page';

describe('Jugar3Page', () => {
  let component: Jugar3Page;
  let fixture: ComponentFixture<Jugar3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jugar3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jugar3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
