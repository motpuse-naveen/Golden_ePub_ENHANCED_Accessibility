const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier: "X1750702603002", //statedata identifier to store data in localstorage.
      saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
    },
    question_groups: {
      group11: {
        id: "group11",
        type: "dropdown",
        placeholder_id: "group11_placeholder",
        commonDropdownOptions: [],
        items: [
          {
            headerImage: {},
            dropdownHtml: `<span>Ms. Brody had a cough and fever. Her doctor instructed her to go to the #dropdown1# department for a chest x-ray examination.</span>`,
            dropdowns: {
              dropdown1: {
                values: ["pathology", "hematology", "radiology"],
                correctValue: "radiology",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>After she gave birth to her fourth child, Ms. Thompson had problems holding her urine (a condition known as urinary incontinence). She made an appointment with a #dropdown1# to evaluate her condition.</span>`,
            dropdowns: {
              dropdown1: {
                values: ["gastroenterologist", "urologist", "pathologist"],
                correctValue: "urologist",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Dr. Monroe told a new mother she had lost much blood during delivery of her child. She had #dropdown1# and needed a blood transfusion immediately.</span>`,
            dropdowns: {
              dropdown1: {
                values: ["adenitis", "anemia", "leukocytosis"],
                correctValue: "anemia",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Mr. Preston was having chest pain during his morning walks. He made an appointment to discuss his new symptom with a #dropdown1# .</span>`,
            dropdowns: {
              dropdown1: {
                values: ["neurologist", "cardiologist", "nephrologist"],
                correctValue: "cardiologist",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>After my skiing accident, Dr. Curtin suggested #dropdown1# to visually examine my swollen, painful knee.</span>`,
            dropdowns: {
              dropdown1: {
                values: ["biopsy", "arthroscopy", "cystoscopy"],
                correctValue: "arthroscopy",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
        ],
        optionStyleType: "st-decimal",
        itemSeperator: "true",
      },
      group12: {
        id: "group12",
        type: "dropdown",
        placeholder_id: "group12_placeholder",
        commonDropdownOptions: [
          "arthralgia",
          "carcinogenic",
          "cystitis",
          "encephalopathy",
          "endocrine",
          "hematoma",
          "hepatoma (hepatocellular carcinoma)",
          "iatrogenic",
          "leukemia",
          "leukocytosis",
        ],
        items: [
          {
            headerImage: {},
            dropdownHtml: `<span>When Paul smoked cigarettes, he inhaled a #dropdown1# substance with each puff.</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "carcinogenic",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Sally’s sore throat, fever, and chills made her doctor order a white blood cell count. The results, indicating infection, showed a slight increase in normal cells, a condition called #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "leukocytosis",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Mr. Smith’s liver enlarged, giving him abdominal pain. His radiologic tests and biopsy revealed a malignant tumor, or #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "hepatoma",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Mrs. Rose complained of pain in her hip joints, knees, and shoulders each morning. She was told that she had painful joints, or #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "arthralgia",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Dr. Black was trained to treat disorders of the pancreas, thyroid gland, adrenal glands, and pituitary gland. Thus, he was an expert in the #dropdown1# glands.</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "endocrine",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Ms. Walsh told her doctor she had pain when urinating. After tests, the doctor’s  diagnosis was inﬂammation of the urinary bladder, or #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "cystitis",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Elizabeth’s overhead tennis shot hit David in the thigh, producing a large #dropdown1# . His skin looked bruised and the affected area was tender.</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "hematoma",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Mr. Bell’ s  white blood cell count is 10 times higher than normal. Examination of his blood shows cancerous white blood cells. His diagnosis is #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "leukemia",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>Mr. Kay was resuscitated (revived from potential or apparent death) in the emergency department after experiencing a heart attack. Unfortunately, he suffered a broken rib as a result of the   physician’s  chest compressions. This is an example of a/an #dropdown1# fracture.</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "iatrogenic",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
          {
            headerImage: {},
            dropdownHtml: `<span>After playing one season for a professional football team, Bill Smith decided to retire because he worried about the dangers of concussions and head trauma—a condition called CTE, or chronic traumatic #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "encephalopathy",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
        ],
  
        correctFeedback: `All of your answers are correct.`,
        incorrectFeedback: `You have one or more incorrect answers.`,
        optionStyleType: "st-decimal",
        itemSeperator: "false",
      },
      group13: {
        id: "group13",
        type: "dropdown",
        placeholder_id: "group13_placeholder",
        commonDropdownOptions: [],
        items: [
          {
            headerImage: {},
            dropdownHtml: `<span>process of visual examination of the eye: ophthalmo #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["scopy", "scope", "tion", "tomy", "ectomy"],
                correctValue: "scopy",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>instrument to visually examine the eye: ophthalmo #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["tomy", "scope", "scopy", "ectomy", "tion"],
                correctValue: "scope",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>study of tumors: onco #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["al", "genic", "cyte", "logy"],
                correctValue: "logy",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>inflammation of bone: oste #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["oma", "osis", "itis"],
                correctValue: "itis",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>abnormal condition of the mind: psych #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["osis", "itis", "oma"],
                correctValue: "osis",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>clotting cell (platelet): thrombo #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["genic", "logy", "cyte", "al"],
                correctValue: "cyte",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>pertaining to the kidney: ren #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["cyte", "logy", "al", "genic"],
                correctValue: "al",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>removal (excision or resection) of the kidney: nephr #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["ectomy", "scope", "scopy", "tion", "tomy"],
                correctValue: "ectomy",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>incision of (process of cutting into) a bone: osteo #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["tion", "scope", "ectomy", "scopy", "tomy"],
                correctValue: "tomy",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>process of cutting back (in the sense of “cutting out” or removal): resect #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["tomy", "ectomy", "ion", "scopy", "tion", "scope"],
                correctValue: "ion",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>pertaining to producing cancer: carcino #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["cyte", "genic", "logy", "al"],
                correctValue: "genic",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
          {
            headerImage: {},
            dropdownHtml: `<span>tumor of flesh tissue (cancerous tumor found in connective tissue such as bone, fat and muscle):sarc #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: ["osis", "itis", "oma"],
                correctValue: "oma",
                dropdownlabel: "Select the type of view",
                useCommonOptions: "false",
              },
            },
            dropdownPlacement: "inline", //newline
            correctFeedback: `Your answer is correct.`,
            incorrectFeedback: `Your answer is incorrect.`,
          },
        ],
        optionStyleType: "st-decimal",
        itemSeperator: "true",
      }
    },
};