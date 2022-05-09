import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardarPeluqueriaPage } from './guardar-peluqueria.page';

describe('GuardarPeluqueriaPage', () => {
  let component: GuardarPeluqueriaPage;
  let fixture: ComponentFixture<GuardarPeluqueriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarPeluqueriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardarPeluqueriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
