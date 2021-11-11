/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItineraryListarComponent } from './itinerary-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Itinerary } from '../itinerary';


describe('ItineraryListarComponent', () => {
  let component: ItineraryListarComponent;
  let fixture: ComponentFixture<ItineraryListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItineraryListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryListarComponent);
    component = fixture.componentInstance;
    component.itineraries = [
      new Itinerary(
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an td element ', () => {
    expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.itineraries[0].lodging
    );

  });
});
