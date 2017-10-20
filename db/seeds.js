const moment = require('moment');
const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

const afterDate = days => moment().add(days, 'days').format('ll')

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Property = require('../models/property');

Property.collection.drop();

Property
  .create([
  {
    name: 'London - New Malden',
    address: '72 High St, New Malden',
    postcode: 'KT3 4ET',
    lat: 51.4012471,
    lng: -0.2579145,
    placeId:"ChIJ7bDl5RIJdkgRIe_81l7yWg8",
    availableDates: [
      {
        date: afterDate(1),
        times: ['9.20am', '11.10am', '12.40pm', '1.10pm', '1.30pm', '2.50pm', '4.20pm' ]
      },
      {
        date: afterDate(3),
        times: ['8.20am','9.20am','9.30am','10.05am','10.20am','10.30am', '11.10am', '12.40pm', '1.10pm', '2.00pm', '2.05pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(4),
        times: ['8.45am','9.25am','10.05am','10.20am','10.30am', '11.10am', '12.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.05pm']
      },
      {
        date: afterDate(5),
        times: ['8.55am','9.30am','10.20am', '11.12am', '12.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.05pm']
      },
      {
        date: afterDate(6),
        times: ['8.55am','4.20pm']
      },
      {
        date: afterDate(7),
        times: ['8.55am','9.35am','10.50am', '11.32am', '12.30pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.25pm']
      }
    ]
  },
  {
    name: 'London - Kingston Upon Thames',
    address: '56-58 Clarence St, Kingston upon Thames',
    postcode: 'KT1 1NP',
    lat: 51.4106461,
    lng: -0.3039573,
    placeId:"ChIJffMKYeoLdkgRPZcwEchLK_M",
    availableDates: [
      {
        date: afterDate(2),
        times: ['9.40am', '10.10am', '12.40pm', '1.40pm', '1.50pm', '2.50pm', '4.20pm' ]
      },
      {
        date: afterDate(5),
        times: ['8.50am','9.20am','9.10am','10.05am','10.20am','10.30am', '11.20am', '12.40pm','2.00pm', '2.05pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(6),
        times: ['7.55am','9.30am','10.15am','11.20am','4.20pm']
      },
      {
        date: afterDate(8),
        times: ['8.55am','9.20am','10.30am', '11.32am', '12.30pm', '1.10pm', '1.20pm', '2.10pm', '2.45pm', '3.15pm','3.45pm','4.25pm']
      }
    ]
  },
  {
    name: 'Surbiton',
    address: '2 Surbiton Parade',
    postcode: 'KT6 4RB',
    lat: 51.3927032,
    lng: -0.3050912,
    placeId: "ChIJd3-bmsgLdkgRkS26KntyWZU",
    availableDates: [
      {
        date: afterDate(1),
        times: ['11.20am','3.10pm', '3.30pm', '3.50pm', '4.20pm' ]
      },
      {
        date: afterDate(3),
        times: ['8.50am','9.50am','10.05am','10.20am','10.30am', '11.10am', '12.40pm', '1.10pm', '2.00pm', '2.15pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(5),
        times: ['8.55am','9.30am','10.20am', '11.12am', '12.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.05pm']
      },
      {
        date: afterDate(6),
        times: ['8.55am','4.20pm']
      },
      {
        date: afterDate(7),
        times: ['8.55am','9.35am','10.50am', '11.32am', '12.30pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.25pm']
      }
    ]
  },
  {
    name: 'Worcester Park',
    address: '103 Central Rd, Worcester Park',
    postcode: 'KT4 8DY',
    lat: 51.3784824,
    lng: -0.2439529,
    placeId: "ChIJt9i3Jq4JdkgRyKp4sLqe3hs",
    availableDates: [
      {
        date: afterDate(1),
        times: ['11.20am','12.30am','12.50am']
      },
      {
        date: afterDate(2),
        times: ['10.20am','10.30am','12.20am','1.10pm', '3.30pm','3.50pm', '4.40pm' ]
      },
      {
        date: afterDate(3),
        times: ['10.25am','12.30am','12.50am','1.10pm', '1.30pm', '2.30pm','3.30pm','3.55pm', '4.30pm' ]
      },
      {
        date: afterDate(5),
        times: ['8.55am','9.50am','10.15am','10.20am','10.30am', '11.20am', '12.40pm', '1.10pm', '2.00pm', '2.15pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(8),
        times: ['10.10am','10.50am', '11.10am', '12.40pm', '1.10pm', '2.10pm','4.20pm']
      },
      {
        date: afterDate(10),
        times: ['8.35am','11.32am', '12.30pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.25pm']
      }
    ]
  },
  {
    name: 'London - Wimbledon',
    address: '38 The Broadway, Wimbledon',
    postcode: 'SW19 1RQ',
    lat: 51.4200038,
    lng: -0.2058233,
    placeId: "ChIJ3Wp4C7oIdkgR2jCSd6vvVg4",
    availableDates: [
      {
        date: afterDate(2),
        times: ['11.20am','12.30am','12.50am','1.00pm', '1.30pm', '2.30pm','12.50am']
      },
      {
        date: afterDate(3),
        times: ['10.25am','12.30am','12.50am','1.10pm', '1.30pm', '2.30pm','3.30pm','3.55pm', '4.30pm' ]
      },
      {
        date: afterDate(5),
        times: ['8.55am','9.50am','10.05am','10.20am','10.30am', '11.20am', '12.40pm', '1.10pm', '2.00pm', '2.15pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(6),
        times: ['8.30am','10.00am','10.50am', '11.00am', '12.40pm', '1.10pm', '2.10pm','3.15pm','3.45pm','4.20pm']
      },
      {
        date: afterDate(9),
        times: ['8.30am','10.32am', '12.00pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm',]
      }
    ]
  },
  {
    name: 'London - Morden',
    address: '30 London Rd, Morden',
    postcode: 'SM4 5BQ',
    lat: 51.4031923,
    lng: -0.1950073,
    placeId: "ChIJjd95c5wIdkgROv6b0ySKunE",
    availableDates: [
      {
        date: afterDate(1),
        times: ['10.20am','11.30am','12.20am','1.30pm', '12.30pm', '1.40pm','12.50am']
      },
      {
        date: afterDate(2),
        times: ['10.25am','12.30am','12.50am','1.10pm', '1.30pm', '2.30pm','3.30pm','3.55pm', '4.30pm' ]
      },
      {
        date: afterDate(3),
        times: ['8.55am','9.55am','10.00am','10.25am','10.30am', '11.20am', '12.40pm', '1.10pm', '2.00pm', '2.15pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(6),
        times: ['8.30am','10.00am','10.50am', '11.00am', '12.40pm', '1.00pm', '2.10pm','3.15pm','3.45pm','4.20pm']
      },
      {
        date: afterDate(7),
        times: ['9.30am','10.32am', '12.00pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm',]
      }
    ]
  },
  {
    name: 'London - Wandsworth',
    address: 'Unit 125/126, Southside Shopping Centre, London',
    postcode: 'SW18 4TQ',
    lat: 51.4561793,
    lng: -0.1961287,
    placeId: "ChIJ61TTr2YPdkgR3FCBRsQI74I",
    availableDates: [
      {
        date: afterDate(1),
        times: ['8.55am','9.55am','10.00am','10.25am','10.30am','11.30am','12.20am','1.30pm', '12.30pm','1.40pm','12.50am']
      },
      {
        date: afterDate(2),
        times: ['9.25am','9.30am','12.50am','1.10pm','5.30pm' ]
      },
      {
        date: afterDate(4),
        times: ['8.55am','9.55am','10.00am','10.25am','10.30am', '11.20am', '12.40pm', '1.10pm', '2.00pm', '2.15pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm']
      },
      {
        date: afterDate(5),
        times: ['8.30am','4.20pm']
      },
      {
        date: afterDate(6),
        times: ['9.30am','10.32am', '12.00pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm',]
      }
    ]
  }


])
  .then((properties) => {
    console.log(`${properties.length} properties created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
