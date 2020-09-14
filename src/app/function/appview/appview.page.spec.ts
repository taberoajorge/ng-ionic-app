import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppviewPage } from './appview.page';

describe('AppviewPage', () => {
  let component: AppviewPage;
  let fixture: ComponentFixture<AppviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
