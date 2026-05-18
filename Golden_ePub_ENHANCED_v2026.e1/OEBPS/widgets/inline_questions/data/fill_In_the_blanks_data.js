const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier: "X1750702588988", //statedata identifier to store data in localstorage.
      saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
    },
    question_groups: {
      group8: {
        id: "group8",
        type: "cloze", //Fill-in-the-Blank
        placeholder_id: "group8_placeholder",
        items: [
          {
            headerImage: {},
            clozeHtml: `<span>Word beginnings are called #cloze1#.</span>`,
            clozes: {
              cloze1: {
                correctValue: "prefixes",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>Word endings are called #cloze1#.</span>`,
            clozes: {
              cloze1: {
                correctValue: "suffixes",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>The foundation of a word is known as the #cloze1#.</span>`,
            clozes: {
              cloze1: { correctValue: "root", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>A letter linking a suffix and a root, or linking two roots, in a term is the #cloze1#.</span>`,
            clozes: {
              cloze1: {
                correctValue: "combining vowel",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>The combination of a root and a combining vowel is known as the #cloze1#.</span>`,
            clozes: {
              cloze1: {
                correctValue: "combining form",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
        ],
        correctFeedback: `All of your answers are correct.`,
        partialFeedback: `You have one or more incorrect answers.`,
        incorrectFeedback: `Your answers are incorrect.`,
        optionStyleType: "st-decimal",
        itemSeperator: "false",
      },
      group9: {
        id: "group9",
        type: "cloze", //Fill-in-the-Blank
        placeholder_id: "group9_placeholder",
        items: [
          {
            headerImage: {},
            clozeHtml: `<span>-oma #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "tumor, mass, swelling",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-al #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "pertaining to",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-itis #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "inflammation",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-logy #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "process of study",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-scopy #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "process of visual examination",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-ic #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "pertaining to",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-gram #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "record (image)",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>-opsy #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "process of viewing",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
        ],
        correctFeedback: `All of your answers are correct.`,
        partialFeedback: `You have one or more incorrect answers.`,
        incorrectFeedback: `Your answers are incorrect.`,
        optionStyleType: "st-decimal",
        itemSeperator: "false",
      },
      group10: {
        id: "group10",
        type: "cloze", //Fill-in-the-Blank
        placeholder_id: "group10_placeholder",
        items: [
          {
            headerImage: {},
            clozeHtml: `<span>cardi/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "heart", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>aden/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "gland", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>bi/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "life", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>cerebr/o #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "cerebrum, largest part of the brain",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>cephal/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "head", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>arthr/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "joint", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>carcin/o #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "cancer, cancerous",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>cyst/o #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "urinary bladder",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>cyt/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "cell", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            headerImage: {},
            clozeHtml: `<span>derm/o or dermat/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "skin", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>encephal/o #cloze1#</span>`,
            clozes: {
              cloze1: { correctValue: "brain", clozelabel: "fill in the blank" },
            },
            clozePlacement: "inline", //newline
          },
          {
            clozeHtml: `<span>electr/o #cloze1#</span>`,
            clozes: {
              cloze1: {
                correctValue: "electricity",
                clozelabel: "fill in the blank",
              },
            },
            clozePlacement: "inline", //newline
          },
        ],
        correctFeedback: `All of your answers are correct.`,
        partialFeedback: `You have one or more incorrect answers.`,
        incorrectFeedback: `Your answers are incorrect.`,
        optionStyleType: "st-decimal",
        itemSeperator: "false",
      }
    },
};