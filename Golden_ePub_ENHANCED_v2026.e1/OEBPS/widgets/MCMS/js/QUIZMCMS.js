var quiz = [
    {
        q: `Which of the following conditions causing cough is most prevalent in the immigrant population?`,
        q2: ``,
        q3: [],
        option: [`Chronic bronchitis`, `Asthma`, `Heart failure`, `Pneumonia`, `Tuberculosis`],
        optionStyleType: `st-upper-alpha`,
        answer: [1,4],
        ansText: `Rationale: Only tuberculosis (e) from the listed conditions is more associated with ethnicity.`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Which of the following conditions with cough as a major presenting symptom is least likely to produce a productive cough?`,
        q2: ``,
        q3: [],
        option: [`Chronic bronchitis`, `Asthma`, `Bronchiectasis`, `Pneu monia`, `Tuberculosis`],
        optionStyleType: `st-lower-alpha`,
        answer: [1,2],
        ansText: `Rationale: Chronic bronchitis (a), bronchiectasis (c), and tuberculosis (e) are associated with productive coughs; Pneumonia (d) can start with a nonproductive cough but becomes productive; asthma (b) invariably has a nonproductive cough.`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Dyspnoea is a symptom most closely associated with Heart failure `,
        q2: ``,
        q3: [],
        option: [`True`,`False`],
        answer:[0],
        ansText:`Rationale: Dyspnoea, difficulty in breathing, could be seen in all the listed conditions. However, in a community pharmacy context, people with conditions other than heart failure (c) will be less associated with dyspnoea. Other symptoms such as shortness of breath and fatigue will be more frequently seen.`,
        state: 'notAnswered',
        userAnswered: [],
        type:`TF`
    },
    {
        q: `Mrs Jones visits your pharmacy complaining of having a dry cough for the last 7 days. After questioning, you decide it is a simple viral infection and recommend simple linctus. If symptoms persist, after how many further days would referral to the physician be appropriate?`,
        q2: ``,
        q3: [],
        option: [`3 days`, `5 days`, `7 days`, `10 days`, `14 days`],
        optionFeedback: [`Accuracy is a measure of the closeness of a result to the true value. The true value (as determined, for example by a reference method) is not given here`,`Precision is a measure of the reproducibility of a measurement; these results fall within a very small range, indicating good precision`,`Specificity in this context implies that only glucose is measured by the test. No information is provided concerning this`,`Precision (and accuracy) are obviously desirable characteristics of any tests, but whether it is suitable for use in any given context depends on many other factors, for example cost and ease of use`,`This would certainly be a desirable characteristic but does not follow from the data presented because the glucose concentrations are not in the hypoglycaemic range`],
        optionStyleType: `st-upper-roman`,
        answer: [4],
        ansText:`Rationale: Conditional referrals are important for safety netting purposes. Acute cough is defined as 3 weeks or less, so in this case giving 14 days as the referral point is correct as the person has had the cough for just 7 days.`, 
        state: `notAnswered`,
        userAnswered: [],
        type:`MCSS`
    }   

];
