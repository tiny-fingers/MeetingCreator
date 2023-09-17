import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication/authentication.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [AuthenticationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should show Logout button if the user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();
    const logoutButton = fixture.nativeElement.querySelector('#logout-button');
    expect(logoutButton).not.toBeNull();
  });

  it('should show Login button if the user is not authenticated and showLoginButton is true', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    component.showLoginButton = true;
    fixture.detectChanges();
    const loginButton = fixture.nativeElement.querySelector('#login-button');
    const logoutButton = fixture.nativeElement.querySelector('#logout-button');
    expect(loginButton).not.toBeNull();
    expect(logoutButton).toBeNull();
  });
});
