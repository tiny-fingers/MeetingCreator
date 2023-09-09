import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let fixture: ComponentFixture<LandingComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
    });
    fixture = TestBed.createComponent(LandingComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MeetingCreator'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Meeting Creator',
    );
    expect(compiled.querySelector('h3').textContent).toContain(
      'Create and manage meetings with ease',
    );
  });

  it(`should have a navbar`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar')).toBeTruthy();
  });

  it(`should go ro href /login when button 'Sign in' is clicked`, async () => {
    const compiled = fixture.debugElement.nativeElement;
    const signInBtn = compiled.querySelector('#sign-in-btn');
    expect(signInBtn.textContent).toContain('Sign in');
  });
});
