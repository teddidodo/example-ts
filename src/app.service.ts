import { Injectable } from '@nestjs/common';
import Begood from 'biotoken-begood';

@Injectable()
export class AppService {

  private begood: Begood;
  constructor() {
    this.begood = new Begood({
      apiKey: "123456"
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  createPatient(patient: any) {
    return this.begood.addPatient(patient);
  }

  createObservation(observation: any) {
    return this.begood.addObservation(observation);
  }

  createDiagnosticReport(diagnosticReport: any) {
    return this.begood.addDiagnosticReport(diagnosticReport);
  }

  createMedicationRequest(medicationRequest: any) {
    return this.begood.addMedicationRequest(medicationRequest);
  }

  createMedicationDispense(medicationDispense: any) {
    return this.begood.addMedicationDispense(medicationDispense);
  }

  createMedicationAdministration(medicationAdministration: any) {
    return this.begood.addMedicationAdministration(medicationAdministration);
  }

  createMedicationStatement(medicationStatement: any) {
    return this.begood.addMedicationStatement(medicationStatement);
  }

  createImmunization(immunization: any) {
    return this.begood.addImmunization(immunization);
  }

  createAllergyIntolerance(allergyIntolerance: any) {
    return this.begood.addAllergyIntolerance(allergyIntolerance);
  }

  createCondition(condition: any) {
    return this.begood.addCondition(condition);
  }

  createProcedure(procedure: any) {
    return this.begood.addProcedure(procedure);
  }

  createAppointment(appointment: any) {
    return this.begood.addAppointment(appointment);
  }
}
