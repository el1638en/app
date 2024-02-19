export class Hospital {
  name!: string;
  address!: string;
  city!: string;
  postCode!: string;
  longitude!: DoubleRange;
  latitude!: DoubleRange;
  formattedDistanceInKm!: string;
  formattedDistanceInTime!: string;
  availableBeds!:number;
  }