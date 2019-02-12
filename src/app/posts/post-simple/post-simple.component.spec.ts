import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSimpleComponent } from './post-simple.component';

describe('PostSimpleComponent', () => {
  let component: PostSimpleComponent;
  let fixture: ComponentFixture<PostSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
