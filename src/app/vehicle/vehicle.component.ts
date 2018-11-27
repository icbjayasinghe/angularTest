import { Component, OnInit } from '@angular/core';
import { VehicleService} from '../services/vehicle.service'

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  absoluteOwner:string;
  barcode:string;
  brand:string;
  cNumber:string;

  constructor( private vehicle: VehicleService) { }

  ngOnInit() {
  }
  addVehicle(){
    const vehicleObj = {
      absoluteOwner: this.absoluteOwner,
      barcode: this.barcode,
      brand: this.brand,
      cNumber: this.cNumber,
    };
    const realObj = {
      absoluteOwner: "string",
      barcode: "string",
      brand: "string",
      buildYear: "string",
      chasisNumber: "string",
      classOfVehicle: "string",
      countryOfOrigin: "string",
      cylinderCapacity: "string",
      email: "string",
      engineNumber: "string",
      firstRegDate: "string",
      fuelType: "string",
      image: "string",
      imei: "string",
      internalRefNum: "string",
      make: "string",
      mobileNumber: "string",
      model: "string",
      odoMeterReading: "string",
      officialMobileNumber: "string",
      officialPhoneNum: {
        ext: "string",
        phoneNum: "string"
  },
      orgId: "string",
      photo: "string",
      portEntryPassNum: "string",
      portEntryValidPeriod: {
        end: "string",
        start: "string"
  },
      previousOwnerDetails: "string",
      purchasedValue: "string",
      regNumber: "string",
      registeredAddress: "string",
      revenueLicense: "string",
      rmvRegNumber: "string",
      statusWhenRegister: "string",
      taxationClass: "string",
      type: 0,
      typeOfIdDocument: "string",
      vehicleId: "string",
      vehicleInsurance: "string",
      warranty: true,
      warrantyPeriod: "string",
      weightUnladenGross: "string"
    };
    this.vehicle.putVehicle(vehicleObj,realObj);
    
  }

}
