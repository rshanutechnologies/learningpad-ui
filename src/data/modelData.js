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
  "CBSE-VI-MATHS-VI-A": {

    "L1. Patterns in Mathematics": {

      // ================= TOPICS =================
      topics: {
        1: {
          heading: "Number Sequences Explorer",
          type: "sequence",
          image: "/images/number-sequence.jpg"
        },
        2: {
          heading: "Shape Sequences",
          type: "sequence",
          image: "/images/shape-sequence.jpg"
        }
      },

      // ================= ACTIVITIES =================
      activities: {
        1: {
          heading: "Pattern Puzzle Activity",
          type: "game",
          image: "/images/pattern-puzzle.jpg"
        },
        2: {
          heading: "Shape Matching Game",
          type: "game",
          image: "/images/shape-matching.jpg"
        }
      },

      // ================= RESOURCES =================
      resources: {
        1: {
          heading: "Exploring Relationships Between Sequences",
          type: "pdf",
          file: "/resources/maths_sequences.pdf",
          image: "/images/sequence-resource.jpg"
        },
        2: {
          heading: "Building Number Sequences",
          type: "video",
          file: "/resources/building_sequences.mp4",
          image: "/images/building-sequence.jpg"
        }
      }
    },

    "L2. Lines and Angles": {

      topics: {
        1: {
          heading: "Terms and Definitions",
          type: "text",
          image: "/images/terms.jpg"
        },
        2: {
          heading: "Angles",
          type: "text",
          image: "/images/angles.jpg"
        },
        3: {
          heading: "Comparing Angles",
          type: "text",
          image: "/images/comparing-angles.jpg"
        }
      },

      activities: {
        1: {
          heading: "Angle Drawing Activity",
          type: "activity",
          image: "/images/angle-drawing.jpg"
        },
        2: {
          heading: "Measure The Angle Game",
          type: "game",
          image: "/images/measure-angle.jpg"
        }
      },

      resources: {
        1: {
          heading: "Types of Angles Chart",
          type: "pdf",
          file: "/resources/angles_chart.pdf",
          image: "/images/angle-chart.jpg"
        },
        2: {
          heading: "Angle Measurement Guide",
          type: "pdf",
          file: "/resources/angle_measurement.pdf",
          image: "/images/angle-guide.jpg"
        }
      }
    }
  },

  // =========================================================
  // ======================= SCIENCE ==========================
  // =========================================================

  "CBSE-VI-SCIENCE-VI-A": {

    "L1. Components of Food": {

      topics: {
        1: {
          heading: "Introduction",
          type: "3d",
          modelFile: "/models/SUSHI.glb",
          image: "/models/Science_L1_intro.png"
        },
        2: {
          heading: "Food Items Contain",
          type: "3d",
          modelFile: "/models/nutrients.glb",
          image: "/models/Science_L1_cotains.png"
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
          image: "/models/Science_L1_activites_search.png"
        },
        2: {
          heading: "Starch Test Activity",
          type: "3d",
          modelFile: "/models/starch.glb",
          image: "/models/Science_L1_activites_starch.png"
        }
      },

      resources: {
        1: {
          heading: "Understanding Food Components with Simple Tests",
          type: "pdf",
          file: "/resources/food_tests.pdf",
          image: "/models/DIY.png"
        },
        2: {
          heading: "Starch Test with Iodine",
          type: "video",
          file: "/resources/starch_test.mp4",
          image: "/models/DIY.png"
        }
      }
    },

    "L2. Sorting Materials into Groups": {

      topics: {
        1: {
          heading: "Introduction",
          type: "text",
          image: "/images/materials-intro.jpg"
        },
        2: {
          heading: "Shape of Objects",
          type: "text",
          image: "/images/shapes-objects.jpg"
        },
        3: {
          heading: "Properties of Materials",
          type: "text",
          image: "/images/material-properties.jpg"
        },
        4: {
          heading: "Solubility",
          type: "text",
          image: "/images/solubility.jpg"
        }
      },

      activities: {
        1: {
          heading: "Group The Materials",
          type: "activity",
          image: "/images/group-materials.jpg"
        },
        2: {
          heading: "Solubility Experiment",
          type: "activity",
          image: "/images/solubility-exp.jpg"
        }
      },

      resources: {
        1: {
          heading: "Materials Classification Chart",
          type: "pdf",
          file: "/resources/materials_chart.pdf",
          image: "/images/material-chart.jpg"
        },
        2: {
          heading: "Solubility Table",
          type: "pdf",
          file: "/resources/solubility_table.pdf",
          image: "/images/solubility-table.jpg"
        }
      }
    }
  }
};

export default modelData;
