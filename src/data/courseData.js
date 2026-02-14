const courseData = {
  "CBSE-VI-MATHS": {
    lessons: {
      "Patterns": {
        topics: {
          1: {
            heading: "Number Sequences Explorer",
            type: "sequence",
            atAGlance: [
              "Counting numbers start from 1",
              "Odd numbers leave remainder 1",
              "Even numbers divisible by 2"
            ],
            brainBuster: {
              question: "What is the next number after 15 in odd numbers?",
              answer: "17"
            }
          }
        }
      }
    }
  },

  "CBSE-VI-SCIENCE": {
    lessons: {
      "Components of Food": {
        topics: {
          1: {
            heading: "Healthy Food",
            type: "3d",
            modelFile: "/models/food.glb",
            atAGlance: [
              "Food gives us energy",
              "Food contains nutrients",
              "Balanced diet is important"
            ],
            brainBuster: {
              question: "Which nutrient gives energy?",
              answer: "Carbohydrates"
            }
          }
        }
      }
    }
  }
};

export default courseData;
