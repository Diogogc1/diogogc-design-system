import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiogogcDesignSystemLib } from './diogogc-design-system-lib';

describe('DiogogcDesignSystemLib', () => {
  let component: DiogogcDesignSystemLib;
  let fixture: ComponentFixture<DiogogcDesignSystemLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiogogcDesignSystemLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiogogcDesignSystemLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
