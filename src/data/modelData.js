// const modelData = {
//   "CBSE-VI-MATHS-VI-A": {
//     "L1. Patterns in Mathematics": {
//       1: {
//         heading: "Number Sequences Explorer",
//         type: "sequence"
//       },
//       2: {
//         heading: "Shape Sequences",
//         type: "sequence"
//       }
//     },
//     "L2. Lines and Angles": {
//       1: {
//         heading: "Terms and Definitions",
//         type: "text"
//       },
//       2: {
//         heading: "Angles Explorer",
//         type: "text"
//       }
//     }
//   },

// "CBSE-VI-SCIENCE-VI-A": {
//   "L1. Components of Food": {
//     1: {
//       heading: "Introduction to Food",
//       type: "3d",
//       modelFile: "../models/food.gif"
//     },
//     2: {
//       heading: "Food Items Contain Nutrients",
//       type: "3d",
//       modelFile: "../models/nutrients.glb"   // 👈 MUST add this
//     }
//   }
// }

// };

// export default modelData;


const modelData = {
  "CBSE-V-MATHS": {

    "L1. Patterns in Mathematics": {

      // ================= TOPICS =================
      topics: {
        1: {
          heading: "Number Sequences Explorer",
          type: "sequence",
          image: "/models/Maths_VII_topics_L1_pic.png",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Shape Sequences",
          type: "sequence",
          image: "/models/Maths_VII_topics_L1_2pic.png",
            disabled: true   // ✅ disabled
        }
      },

      // ================= ACTIVITIES =================
      activities: {
        1: {
          heading: "Pattern Puzzle Activity",
          type: "game",
          image: "/models/PPA.jpg",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Shape Matching Game",
          type: "game",
          image: "/models/SMG.jpg",
            disabled: true   // ✅ disabled
        }
      },

      // ================= RESOURCES =================
      resources: {
        1: {
          heading: "Exploring Relationships Between Sequences",
          type: "pdf",
          file: "/resources/maths_sequences.pdf",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Building Number Sequences",
          type: "video",
          file: "/resources/building_sequences.mp4",
           image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        }
      }
    },

    "L2. Lines and Angles": {

      topics: {
        1: {
          heading: "Terms and Definitions",
          type: "text",
         image: "/models/T&D.jpg",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Angles",
        //   type: "text",
        //   image: "/images/angles.jpg",
        //     disabled: true   // ✅ disabled
        // },
        // 3: {
        //   heading: "Comparing Angles",
        //   type: "text",
        //   image: "/images/comparing-angles.jpg",
        //     disabled: true   // ✅ disabled
        // }
      },

      activities: {
        1: {
          heading: "Angle Drawing Activity",
          type: "activity",
          image: "/models/ADA.jpg",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Measure The Angle Game",
          type: "game",
          image: "/models/MTAG.jpg",
            disabled: true   // ✅ disabled
        }
      },

      resources: {
        1: {
          heading: "Types of Angles Chart",
          type: "pdf",
          file: "/resources/angles_chart.pdf",
        image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Angle Measurement Guide",
          type: "pdf",
          file: "/resources/angle_measurement.pdf",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        }
      }
    }
  },

  // =========================================================
  // ======================= SCIENCE ==========================
  // =========================================================

  "CBSE-V-SCIENCE": {

    "L1. Heart Anatomy": {

      topics: {
        1: {
          heading: "Heart Anatomy",
        
            type: "link",
   link:  "https://vrjgaming.github.io/Heart.github.io/DemoV01/",
 
          image: "/models/q2-TF.png",

           assessment: {
    type: "link",
    link: "/Grade5_chapter3/exercises/label.html"
  }
        },
        2: {
          heading: "Food Items Contain",
          type: "3d",
          modelFile: "/models/nutrients.glb",
          image: "/models/Science_L1_cotains.png",
            disabled: true   // ✅ disabled
        },
        // 3: {
        //   heading: "Nutrients Work in Body",
        //   type: "3d",
        //   modelFile: "/models/body.glb",
        //   image: "/images/nutrients-body.jpg"
        // },
        // 4: {
        //   heading: "Balanced Diet",
        //   type: "3d",
        //   modelFile: "/models/diet.glb",
        //   image: "/images/balanced-diet.jpg"
        // }
      },

      activities: {
        1: {
          heading: "Protein Test Experiment",
          type: "3d",
          modelFile: "/models/protein.glb",
          image: "/models/Science_L1_activites_search.png",
           disabled: true   // ✅ disabled
        },
        2: {
          heading: "Starch Test Activity",
          type: "3d",
          modelFile: "/models/starch.glb",
          image: "/models/Science_L1_activites_starch.png",
            disabled: true   // ✅ disabled
        }
      },

      resources: {
        1: {
          heading: "Understanding Food Components with Simple Tests",
          type: "pdf",
          file: "/resources/food_tests.pdf",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Starch Test with Iodine",
          type: "video",
          file: "/resources/starch_test.mp4",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        }
      }
    },

    "L2. Sorting Materials into Groups": {

      topics: {
        1: {
          heading: "Introduction",
            type: "3d",
          modelFile: "/models/SUSHI.glb",
          image: "/models/Science_L1_intro.png",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Shape of Objects",
        //   type: "text",
        //   image: "/images/shapes-objects.jpg"
        // },
        // 3: {
        //   heading: "Properties of Materials",
        //   type: "text",
        //   image: "/images/material-properties.jpg"
        // },
        // 4: {
        //   heading: "Solubility",
        //   type: "text",
        //   image: "/images/solubility.jpg"
        // }
      },

      activities: {
        1: {
          heading: "Group The Materials",
          type: "activity",
           image: "/models/food.jpg",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Solubility Experiment",
        //   type: "activity",
        //   image: "/images/solubility-exp.jpg"
        // }
      },

      resources: {
        1: {
          heading: "Materials Classification Chart",
          type: "pdf",
          file: "/resources/materials_chart.pdf",
           image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Solubility Table",
        //   type: "pdf",
        //   file: "/resources/solubility_table.pdf",
        //   image: "/images/solubility-table.jpg"
        // }
      }
    }
  },
  "CBSE-V-SOCIALSCIENCE": {

    "L1. Locating Places on the Earth": {

      topics: {
        1: {
          heading: "Introduction",
         type: "video",
          file: "/models/SOCIAL01.mp4",
          image: "/models/scocial_topic_intro.png",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "A Map and Its Components",
          type: "video",
          modelFile: "/models/SOCIAL01.mp4",
          image: "/models/Science_L1_cotains.png",
            disabled: true   // ✅ disabled
        },
        // 3: {
        //   heading: "Nutrients Work in Body",
        //   type: "3d",
        //   modelFile: "/models/body.glb",
        //   image: "/images/nutrients-body.jpg"
        // },
        // 4: {
        //   heading: "Balanced Diet",
        //   type: "3d",
        //   modelFile: "/models/diet.glb",
        //   image: "/images/balanced-diet.jpg"
        // }
      },

      activities: {
        1: {
          heading: "Protein Test Experiment",
          type: "3d",
          modelFile: "/models/protein.glb",
          image: "/models/Science_L1_activites_search.png",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Starch Test Activity",
        //   type: "3d",
        //   modelFile: "/models/starch.glb",
        //   image: "/models/Science_L1_activites_starch.png"

        // }
      },

      resources: {
        1: {
          heading: "Understanding Food Components with Simple Tests",
          type: "pdf",
          file: "/resources/food_tests.pdf",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        },
        2: {
          heading: "Starch Test with Iodine",
          type: "video",
          file: "/models/SOCIAL01.mp4",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        }
      }
    },

    "L2. Oceans and Continents": {

      topics: {
        1: {
          heading: "Introduction",
          type: "text",
          image: "/models/scocial.jpg",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Shape of Objects",
        //   type: "text",
        //   image: "/images/shapes-objects.jpg"
        // },
        // 3: {
        //   heading: "Properties of Materials",
        //   type: "text",
        //   image: "/images/material-properties.jpg"
        // },
        // 4: {
        //   heading: "Solubility",
        //   type: "text",
        //   image: "/images/solubility.jpg"
        // }
      },

      activities: {
        1: {
          heading: "Group The Materials",
          type: "activity",
           image: "/models/scocial2.jpg",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Solubility Experiment",
        //   type: "activity",
        //   image: "/images/solubility-exp.jpg"
        // }
      },

      resources: {
        1: {
          heading: "Materials Classification Chart",
          type: "pdf",
          file: "/resources/materials_chart.pdf",
          image: "/models/DIY.png",
            disabled: true   // ✅ disabled
        },
        // 2: {
        //   heading: "Solubility Table",
        //   type: "pdf",
        //   file: "/resources/solubility_table.pdf",
        //   image: "/images/solubility-table.jpg"
        // }
      }
    }
  },
  "CBSE-V-English": {

  // =========================
  // L1 INTEGERS
  // =========================
  "L1. Integers": {

    topics: {
      1: {
        heading: "Introduction",
        type: "integer",    // IMPORTANT
        image: "/models/English1.png",
          disabled: true   // ✅ disabled
      },

      // 2: {
      //   heading: "Properties of Addition",
      //   type: "video",
      //   file: "/models/SOCIAL01.mp4",
      //   image: "/models/Maths_VII_topics_L1_2pic.png"
      // }
    },

    activities: {
      1: {
        heading: "Integer Simulation",
        type: "sequence",
        image: "/models/english2.webp",
          disabled: true   // ✅ disabled
      }
    },

    resources: {
      1: {
        heading: "Integers Notes",
        type: "pdf",
        file: "/resources/food_tests.pdf",
        image: "/models/DIY.png",
          disabled: true   // ✅ disabled
      }
    }
  },

  // =========================
  // L2 FRACTIONS
  // =========================
  "L2. Fractions and Decimals": {

    topics: {
      1: {
        heading: "Multiplication of Fractions",
        type: "sequence",
        image: "/models/english4.jpg",
          disabled: true   // ✅ disabled
      },
      // 2: {
      //   heading: "Division of Fractions",
      //   type: "sequence",
      //   image: "/models/math.png"
      // }
    },

    activities: {},
    resources: {}
  },

  // =========================
  // L3 DATA HANDLING
  // =========================
  // "L3. Data Handling": {

  //   topics: {
  //     1: {
  //       heading: "Introduction",
  //       type: "sequence",
  //       image: "/models/math.png"
  //     },
  //     2: {
  //       heading: "Arithmetic Mean",
  //       type: "sequence",
  //       image: "/models/math.png"
  //     },
  //     3: {
  //       heading: "Range",
  //       type: "sequence",
  //       image: "/models/math.png"
  //     },
  //     4: {
  //       heading: "Mode",
  //       type: "sequence",
  //       image: "/models/math.png"
  //     }
  //   },

  //   activities: {},
  //   resources: {}
  // }
},
};

export default modelData;
