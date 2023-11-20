export interface Activities {
  id: string;
  name: string;
}

export interface Address {
  city: string;
  line1: string;
  line2?: string;
  line3?: string;
  postalCode: string;
  stateCode: string;
}

export interface Contact {
  emailAddresses: { emailAddress: string }[];
  phoneNumbers: { phoneNumber: string }[];
}

export interface EntranceFees {
  cost: string;
  description: string;
  title: string;
}

export interface Images {
  altText: string;
  title: string;
  url: string;
}

export interface Topics {
  id: string;
  name: string;
}

export interface Park {
  id: string;
  url: string;
  fullName: string;
  parkCode: string;
  description: string;
  latitude: string;
  longitude: string;
  latLong: string;
  activities: Activities[];
  topics: Topics[];
  addresses: Address[];
  contacts: Contact;
  entranceFees?: EntranceFees[];
  directionsInfo: string;
  directionsUrl: string;
  images: Images[];
  weatherInfo?: string;
}

export interface Parks extends Array<Park> {}

export interface ParksList {
  parks: Parks;
}
