import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';
import { Immunization, Patient } from 'fhir/r4';
import { PatientDto } from './api-dto';
var Fhir = require('fhir').Fhir;
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/patient')
  @ApiBody({ type: Object })
  async createPatient(@Body() patient: any) {
    return await this.appService.createPatient(patient);
  }

  @Post('/observation')
  @ApiBody({ type: Object })
  async createObservation(@Body() observation: any) {
    return await this.appService.createObservation(observation);
  }

  @Post('/diagnostic-report')
  @ApiBody({ type: Object })
  async createDiagnosticReport(@Body() diagnosticReport: any) {
    return await this.appService.createDiagnosticReport(diagnosticReport);
  }

  @Post('/medication-request')
  @ApiBody({ type: Object })
  async createMedicationRequest(@Body() medicationRequest: any) {
    return await this.appService.createMedicationRequest(medicationRequest);
  }

  @Post('/medication-dispense')
  @ApiBody({ type: Object })
  async createMedicationDispense(@Body() medicationDispense: any) {
    return await this.appService.createMedicationDispense(medicationDispense);
  }

  @Post('/medication-administration')
  @ApiBody({ type: Object })
  async createMedicationAdministration(@Body() medicationAdministration: any) {
    return await this.appService.createMedicationAdministration(medicationAdministration);
  }

  @Post('/medication-statement')
  @ApiBody({ type: Object })
  async createMedicationStatement(@Body() medicationStatement: any) {
    return await this.appService.createMedicationStatement(medicationStatement);
  }

  @Post('/immunization')
  @ApiBody({ type: Object })
  async createImmunization(@Body() immunization: any) {
    return await this.appService.createImmunization(immunization);
  }

  @Post('/allergy-intolerance')
  @ApiBody({ type: Object })
  async createAllergyIntolerance(@Body() allergyIntolerance: any) {
    return await this.appService.createAllergyIntolerance(allergyIntolerance);
  }

  @Post('/condition')
  @ApiBody({ type: Object })
  async createCondition(@Body() condition: any) {
    return await this.appService.createCondition(condition);
  }

  @Post('/procedure')
  @ApiBody({ type: Object })
  async createProcedure(@Body() procedure: any) {
    return await this.appService.createProcedure(procedure);
  }

  @Post('/appointment')
  @ApiBody({ type: Object })
  async createAppointment(@Body() appointment: any) {
    return await this.appService.createAppointment(appointment);
  }

  @Get('/fhir')
  getFhir() {
    var resource = {
      resourceType: 'Patie',
      // ...
    };
    var fhir = new Fhir();
    fhir.objToJson(resource);
    var xml = fhir.objToXml(resource);
    var json = fhir.xmlToJson(xml);
    var obj = fhir.xmlToObj(xml);
    var results = fhir.validate(xml, { errorOnUnexpected: true });
    results = fhir.validate(obj, {});
    console.log(results)
    return json;
    // fhir.generateSnapshot(SnapshotGenerator.createBundle(sd1, sd2, sd3));
  }
}
