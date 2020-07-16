

//PROPERTY HERO IMAGES -----

//apartments
import apartment1 from "./properties/apartment-1.jpg";
import apartment2 from "./properties/apartment-2.jpg";
import apartment3 from "./properties/apartment-3.jpg";
import apartment4 from "./properties/apartment-4.jpg";
import newApartment2 from "./properties/new-apartment-2.jpg";

//houses
import largeHouse from "./properties/large-house.jpg";
import house from "./properties/house.jpg";
import house2 from "./properties/house-2.jpg";
import house3 from "./properties/house-3.jpg";
import newHouse1 from "./properties/new-house-1.jpg";
import newHouse2 from "./properties/new-house-2.jpg";
import newHouse3 from "./properties/new-house-3.jpg";

//villas

import largeVilla from "./properties/large-villa.jpg";
import largeVilla2 from "./properties/large-villa-2.jpg";
import villa1 from "./properties/villa-1.jpg";
import villa2 from "./properties/villa-2.jpg";

// INSIDE PROPERTY IMAGES------------------
import insideApartment from "./properties/inside-apartment.jpg";
import swimmingPool from "./properties/swimming-pool.jpg";
import bedroom from "./properties/average-bedroom.jpeg";
import bathroom from "./properties/bathroom-1.jpg";
import hall1 from "./properties/hall-1.jpg";
import hall2 from "./properties/hall-2.jpg";
import largeBathroom from "./properties/large-bathroom.jpeg";
import livingRoom from "./properties/living-room-1.jpg";









export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "5 bedroom villa",
      slug: "5 bedroom villa",
      type: "villa",
      price: 1000,
      size: 8000,
      capacity: 5,
      pool:true,
      beach:true,
      // pets: false,
      // breakfast: false,
      featured: true,
      description:
        "This beautifully renovated and extended home has been enhanced to include even the finest of details. The villa has been made completely sustainable by the current owners and these upgrades benefit not only the environment but also your pocket. Further benefits include an extended Garden overlooking the Golf Course.",
      extras: [
        "Superb custom built fully Automatic Kitchen & Siemens Appliances",
        "Italian Windows",
        "Upgraded bathrooms",
        "CCTV System including Finger Print access",
        "Extended Outside Terrace overlooking Golf Course with hot tub Jacuzzi",
        "Water feature bar area"
      ],
      images: [
        {
          fields: {
            file: {
              url: largeVilla
            }
          }
        },
        {
          fields: {
            file: {
              url: hall1
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: hall2
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "3 bedroom apartment",
      slug: "3 bedroom apartment",
      type: "apartment",
      price: 500,
      size: 4000,
      capacity: 3,
      // pets: false,
      // breakfast: false,
      pool:true,
      beach:false,
      featured: false,
      description:
        "A breathtaking desert-themed development stretching across 6.67 million square metres, Arabian Ranches features an 18-hole championship golf course nestling in Arabian Ranches I, and luxury homes set in a tranquil landscape across Arabian Ranches I and II, only a short distance from Burj Khalifa and Downtown Dubai.Located within a 25-minute drive from Dubai International Airport, this area - split into Arabian Ranches and Arabian Ranches II has become a popular settling place for families in the UAE, and it's easy to see why.",
      extras: [
        "Club House", "Pool Grotto", " Kids Pool", "Central Park"
      ],
      images: [
        {
          fields: {
            file: {
              url: apartment1
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: apartment3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "5 bedroom villa",
      slug: "5 bedroom villa",
      type: "villa",
      price: 1000,
      size: 9000,
      capacity: 5,
      // pets: true,
      // breakfast: false,
      pool:true,
      beach:true,
      featured: true,
      description:
      "Upon entering you will be stunned by the large rectangular open spaces, with windows from both sides that make it ideal for a living room and a leisure area. Additionally, the floors and bathrooms have been made with the highest quality stone and arched doorways that resemble the European style of architecture. Step outside to a large rectangular swimming pool and outdoor area, facing the beach.",
      extras: [
        "Private pool", "CCTV system", "Close to popular destinations", "private beach"
      ],
      images: [
        {
          fields: {
            file: {
              url: newHouse3
            }
          }
        },
        {
          fields: {
            file: {
              url: largeBathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: swimmingPool
            }
          }
        },
        {
          fields: {
            file: {
              url: hall2
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "2 bedroom apartment",
      slug: "2 bedroom apartment",
      type: "apartment",
      price: 350,
      size: 1100,
      capacity: 2,
      // pets: true,
      // breakfast: true,
      pool:false,
      beach:false,
      featured: true,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities.",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: apartment2
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroom
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "4 bedroom house",
      slug: "4 bedroom house",
      type: "house",
      price: 800,
      size: 2000,
      capacity: 4,
      // pets: false,
      // breakfast: false,
      pool:true,
      beach:true,
      featured: true,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: villa1
            }
          }
        },
        {
          fields: {
            file: {
              url: hall2
            }
          }
        },
        {
          fields: {
            file: {
              url: swimmingPool
            }
          }
        },
        {
          fields: {
            file: {
              url: hall1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "5 bedroom house",
      slug: "5 bedroom house",
      type: "house",
      price: 900,
      size: 1100,
      capacity: 5,
      // pets: false,
      // breakfast: false,
      pool:true,
      beach:false,
      featured: false,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: newApartment2
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroom
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "4 bedroom house",
      slug: "4 bedroom house",
      type: "house",
      price: 754,
      size: 2000,
      capacity: 4,
      // pets: true,
      // breakfast: false,
      pool:false,
      beach:false,
      featured: false,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities.",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: newHouse2
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroom
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "5 bedroom house",
      slug: "5 bedroom house",
      type: "house",
      price: 989,
      size: 4000,
      capacity: 5,
      // pets: true,
      // breakfast: true,
      pool:true,
      beach:false,
      featured: true,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: newHouse3
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroom
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "4 bedroom apartment",
      slug: "4 bedroom apartment",
      type: "apartment",
      price: 875,
      size: 1100,
      capacity: 4,
      // pets: false,
      // breakfast: false,
      pool:false,
      beach:false,
      featured: false,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities.",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroom
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "5 bedroom villa",
      slug: "5 bedroom villa",
      type: "villa",
      price: 765,
      size: 5500,
      capacity: 5,
      // pets: false,
      // breakfast: false,
      pool:true,
      beach:true,
      featured: false,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities.",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: newHouse2
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: hall1
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "3 bedroom house",
      slug: "3 bedroom house",
      type: "house",
      price: 450,
      size: 2000,
      capacity: 3,
      // pets: true,
      // breakfast: false,
      pool:false,
      beach:false,
      featured: false,
      description:
      "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: newHouse1
            }
          }
        },
        {
          fields: {
            file: {
              url: bathroom
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroom
            }
          }
        },
        {
          fields: {
            file: {
              url: insideApartment
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "4 bedroom villa",
      slug: "4 bedroom villa",
      type: "villa",
      price: 810,
      size: 3000,
      capacity: 4,
      // pets: true,
      // breakfast: true,
      pool:true,
      beach:true,
      featured: true,
      description:
        "An Amazing opportunity for investment in Downtown Dubai Spectacular Fountain and Burj Khalifa Views. A life you want to live. A tower crafted with passion and imagination. Sleek, contemporary residences with awe-inspiring views and elevated comforts, in the midst of grand entertainment. Select among 1, 2 and 3 bedroom apartments with amazing amenities",
      extras: [
        "Burj khalifa view",
        "very high return on investment",
        "Amazing location",
        "On site gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: newHouse1
            }
          }
        },
        {
          fields: {
            file: {
              url: swimmingPool
            }
          }
        },
        {
          fields: {
            file: {
              url: hall1
            }
          }
        },
        {
          fields: {
            file: {
              url: hall2
            }
          }
        }
      ]
    }
  },
 
]
