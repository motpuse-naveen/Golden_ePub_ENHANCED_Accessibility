const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
    pageStateIdentifier: "X1750692069090", //statedata identifier to store data in localstorage.
    saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "group1_placeholder",
      items: [
        {
          title: `aden/o`,
          explanation: `gland`,
        },
        {
          title: `arthr/o`,
          explanation: `joint`,
        },
        {
          title: `bi/o`,
          explanation: `life`,
        },
        {
          title: `carcin/o`,
          explanation: `cancerous; cancer`,
        },
        {
          title: `cardi/o`,
          explanation: `heart`,
        },
        {
          title: `cephal/o`,
          explanation: `head`,
        },
        {
          title: `cerebr/o`,
          explanation: `cerebrum (largest part of the brain)`,
        },
        {
          title: `cis/o`,
          explanation: `to cut`,
        },
        {
          title: `crin/o`,
          explanation: `to secrete (to form and give off)`,
        },
        {
          title: `cyst/o`,
          explanation: `urinary bladder; cyst; sac of fluid`,
        }
      ],
      titleElement: "h4", //"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "group2_placeholder",
      items: [
        {
          title: `-ac `,
          explanation: `pertaining to`,
        },
        {
          title: `-al`,
          explanation: `pertaining to`,
        },
        {
          title: `-algia`,
          explanation: `pain`,
        },
        {
          title: `-cyte`,
          explanation: `cell`,
        },
        {
          title: `-ectomy`,
          explanation: `removal; excision;  resection`,
        },
        {
          title: `-emia`,
          explanation: `blood condition`,
        },
        {
          title: `-genic`,
          explanation: `produced by or in`,
        },
        {
          title: `-globin`,
          explanation: `protein`,
        },
        {
          title: `-gram`,
          explanation: `record`,
        },
        {
          title: `-ic, -ical`,
          explanation: `pertaining to`,
        }
      ],
      titleElement: "h4", //"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian",
      placeholder_id: "group3_placeholder",
      items: [
        {
          title: `a-, an-`,
          explanation: `no; not; without`,
        },
        {
          title: `aut-, auto-`,
          explanation: `self; own`,
        },
        {
          title: `dia-`,
          explanation: `complete; through`,
        },
        {
          title: `endo-`,
          explanation: `in; within`,
        },
        {
          title: `epi-`,
          explanation: `above; upon; on`,
        },
        {
          title: `ex-, exo-`,
          explanation: `out; outside of; outward`,
        },
        {
          title: `hyper-`,
          explanation: `above; excessive; more than normal`,
        },
        {
          title: `hypo-`,
          explanation: `deficient; below; under; less than normal`,
        },
        {
          title: `in-`,
          explanation: `in; into; not`,
        },
        {
          title: `peri-`,
          explanation: `surrounding; around`,
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
  },
};
