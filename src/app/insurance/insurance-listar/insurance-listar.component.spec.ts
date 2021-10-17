/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { InsuranceListarComponent } from "./insurance-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as faker from "faker";
import { Insurance } from "../insurance";

describe("InsuranceListarComponent", () => {
 let component: InsuranceListarComponent;
 let fixture: ComponentFixture<InsuranceListarComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [InsuranceListarComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(InsuranceListarComponent);
   component = fixture.componentInstance;
   component.insurances = [
     new Insurance(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number()
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it("should create", () => {
   expect(component).toBeTruthy();
 });

 it("Should have an td element ", () => {
   expect(debug.query(By.css("td")).nativeElement.innerText).toContain(
     component.insurances[0].name
   );

 });
});
