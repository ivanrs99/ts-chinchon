import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jugar2Page } from './jugar2.page';

describe('Jugar2Page', () => {
  let component: Jugar2Page;
  let fixture: ComponentFixture<Jugar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jugar2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jugar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
