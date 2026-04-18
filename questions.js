const QUIZ_LIBRARY = {
  categories: [
    {
      id: "mock-tests",
      title: "Mock Tests",
      description: "Full mixed mock tests with timer and score.",
      items: [
        {
          id: "mock-test-1",
          title: "Full Mock Test – Set 1",
          description: "40 questions • 20 minutes • your current working mock set",
          timeInSeconds: 20 * 60,
          mode: "scored",
          status: "ready",
          sections: [
            {
              title: "Section I: English",
              passages: [
                {
                  title: "Read the passage and answer Questions 1 to 4.",
                  text: "Education does not merely transmit information; it also shapes judgment. A learner may possess a large store of facts and yet fail to use them wisely. True education refines the ability to distinguish between assertion and evidence, between habit and principle, and between appearance and reality. In a democratic society, this capacity is indispensable, because citizens are constantly required to form opinions on public matters. If education produces only imitation, it weakens freedom; if it nurtures reflection, it strengthens both individual character and collective life."
                }
              ],
              questions: [
                { id: "q1", text: "The central idea of the passage is that education should", options: { A: "increase memory power only", B: "prepare students only for employment", C: "cultivate judgment and reflective capacity", D: "encourage agreement with public opinion" }, answer: "C" },
                { id: "q2", text: "The word 'indispensable' in the passage means", options: { A: "ordinary", B: "unnecessary", C: "unavoidable", D: "essential" }, answer: "D" },
                { id: "q3", text: "According to the passage, a democratic society especially needs citizens who can", options: { A: "avoid forming opinions", B: "distinguish evidence from mere assertion", C: "memorize constitutional articles", D: "reject all traditions" }, answer: "B" },
                { id: "q4", text: "Which of the following is most nearly opposite in meaning to 'nurtures' as used in the passage?", options: { A: "develops", B: "destroys", C: "encourages", D: "improves" }, answer: "B" },
                { id: "q5", text: "Choose the correctly spelt word.", options: { A: "consciencious", B: "conscientious", C: "conscientous", D: "conscienscious" }, answer: "B" },
                { id: "q6", text: "Fill in the blank with the most suitable option: No sooner ______ the lecture begin than the electricity went out.", options: { A: "did", B: "had", C: "has", D: "was" }, answer: "B" },
                { id: "q7", text: "Choose the correct sentence.", options: { A: "Each of the students have submitted their assignment.", B: "Each of the students has submitted his or her assignment.", C: "Each of the students have submitted his assignment.", D: "Each of the students has submitted their assignments." }, answer: "B" },
                { id: "q8", text: "Change into indirect speech: The teacher said, 'Why are you making such a noise?'", options: { A: "The teacher asked why was he making such a noise.", B: "The teacher asked why they were making such a noise.", C: "The teacher asked why they had been making such a noise.", D: "The teacher asked why were they making such a noise." }, answer: "B" },
                { id: "q9", text: "Choose the word nearest in meaning to 'prudent'.", options: { A: "careless", B: "wise", C: "noisy", D: "weak" }, answer: "B" },
                { id: "q10", text: "Choose the correct passive form of: 'People believe that the earth revolves round the sun.'", options: { A: "It is believed by people that the earth revolves round the sun.", B: "The earth is believed to revolve round the sun.", C: "The earth has been believed to revolve round the sun.", D: "The earth was believed to revolve round the sun." }, answer: "B" }
              ]
            },
            {
              title: "Section II: General Awareness",
              questions: [
                { id: "q11", text: "Which of the following vitamins is synthesized in the human skin in the presence of sunlight?", options: { A: "Vitamin A", B: "Vitamin B12", C: "Vitamin C", D: "Vitamin D" }, answer: "D" },
                { id: "q12", text: "The Preamble of the Constitution of India declares India to be a", options: { A: "Federal Theocratic State", B: "Sovereign Socialist Secular Democratic Republic", C: "Socialist Parliamentary Monarchy", D: "Democratic Religious Republic" }, answer: "B" },
                { id: "q13", text: "Which gas is mainly responsible for the greenhouse effect among the following?", options: { A: "Nitrogen", B: "Hydrogen", C: "Carbon dioxide", D: "Helium" }, answer: "C" },
                { id: "q14", text: "The Right to Education Act in India broadly relates to children in the age group", options: { A: "3–6 years", B: "6–14 years", C: "14–18 years", D: "5–15 years" }, answer: "B" },
                { id: "q15", text: "Which of the following is primarily an international organization working for education, science and culture?", options: { A: "UNICEF", B: "UNESCO", C: "IMF", D: "WTO" }, answer: "B" },
                { id: "q16", text: "The National Education Policy 2020 recommends a curricular structure of", options: { A: "10+2", B: "5+3+3+4", C: "8+4", D: "6+2+4" }, answer: "B" },
                { id: "q17", text: "Which of the following bodies was mainly associated with recommendations on education and national development in India in the 1960s?", options: { A: "Sarkaria Commission", B: "Kothari Commission", C: "Hunter Commission", D: "Mandal Commission" }, answer: "B" },
                { id: "q18", text: "Which among the following is a communicable disease?", options: { A: "Diabetes", B: "Hypertension", C: "Tuberculosis", D: "Arthritis" }, answer: "C" },
                { id: "q19", text: "In the Indian parliamentary system, the Council of Ministers is collectively responsible to the", options: { A: "President", B: "Rajya Sabha", C: "Supreme Court", D: "Lok Sabha" }, answer: "D" },
                { id: "q20", text: "NCERT primarily functions as", options: { A: "a board conducting all public examinations in India", B: "an institution for curriculum support, textbook development, and educational research", C: "an agency for appointing teachers in schools", D: "an autonomous body for university examinations only" }, answer: "B" }
              ]
            },
            {
              title: "Section III: Reasoning",
              questions: [
                { id: "q21", text: "Find the missing term: 3, 8, 15, 24, 35, ?", options: { A: "46", B: "48", C: "50", D: "52" }, answer: "B" },
                { id: "q22", text: "If BOOK is coded as CPPL, then LAMP is coded as", options: { A: "MBNQ", B: "MBNR", C: "KZLO", D: "LBMQ" }, answer: "A" },
                { id: "q23", text: "Pointing to a woman, Arun said, 'She is the daughter of the only daughter of my mother.' The woman is Arun’s", options: { A: "sister", B: "niece", C: "daughter", D: "mother" }, answer: "B" },
                { id: "q24", text: "Find the odd one out.", options: { A: "Square", B: "Triangle", C: "Rectangle", D: "Cylinder" }, answer: "D" },
                { id: "q25", text: "If in a certain code, TEACHER = VGCEJGT, then STUDENT =", options: { A: "UVWFGPV", B: "UVWFGOV", C: "UVFGPVT", D: "TUVEGPV" }, answer: "A" },
                { id: "q26", text: "In a row of students, P is 12th from the left and 19th from the right. How many students are there in the row?", options: { A: "29", B: "30", C: "31", D: "32" }, answer: "B" },
                { id: "q27", text: "Choose the correct pair: Bird : Nest :: Bee : ?", options: { A: "Den", B: "Hive", C: "Burrow", D: "Stable" }, answer: "B" },
                { id: "q28", text: "Statements: All pens are books. Some books are tables. Conclusions: I. Some pens are tables. II. Some books are pens. Choose the correct option.", options: { A: "Only I follows", B: "Only II follows", C: "Both I and II follow", D: "Neither I nor II follows" }, answer: "B" },
                { id: "q29", text: "If yesterday was Wednesday, what day will it be the day after tomorrow?", options: { A: "Thursday", B: "Friday", C: "Saturday", D: "Sunday" }, answer: "C" },
                { id: "q30", text: "A clock shows 3:00. What is the angle between the hour hand and the minute hand?", options: { A: "60°", B: "75°", C: "90°", D: "105°" }, answer: "C" }
              ]
            },
            {
              title: "Section IV: Teaching Aptitude",
              questions: [
                { id: "q31", text: "A student consistently gives wrong answers but appears eager to participate. The most appropriate response of a teacher is to", options: { A: "stop the student from answering further", B: "ignore the student to save class time", C: "appreciate participation and guide the student toward the correct reasoning", D: "ask classmates to correct and ridicule the student" }, answer: "C" },
                { id: "q32", text: "The primary purpose of formative assessment is to", options: { A: "rank students publicly", B: "provide feedback for improving learning during the process", C: "punish weak learners", D: "replace classroom teaching entirely" }, answer: "B" },
                { id: "q33", text: "A teacher finds that some students learn faster through activities while others learn better through explanation. This suggests that the teacher should", options: { A: "teach only the brightest students", B: "use varied teaching strategies", C: "follow only the textbook", D: "avoid group work entirely" }, answer: "B" },
                { id: "q34", text: "Which of the following best reflects learner-centred teaching?", options: { A: "Teacher speaks throughout and students only note down", B: "Learning is organized around students’ needs, participation, and understanding", C: "Memorization is treated as the only evidence of achievement", D: "Discipline is maintained mainly through fear" }, answer: "B" },
                { id: "q35", text: "Midway through the lesson, many students seem distracted. The best immediate step is to", options: { A: "continue speaking in the same tone", B: "give punishment to the whole class", C: "change the activity or questioning pattern to re-engage students", D: "end the class without explanation" }, answer: "C" },
                { id: "q36", text: "Which of the following is most closely related to inclusive education?", options: { A: "Teaching only high achievers more efficiently", B: "Segregating children with different needs permanently", C: "Providing equitable learning opportunities to diverse learners in common settings", D: "Giving the same method to every learner regardless of need" }, answer: "C" },
                { id: "q37", text: "A good classroom question should mainly", options: { A: "create fear of failure", B: "check only rote memory", C: "stimulate thinking and participation", D: "be answered only by one student repeatedly" }, answer: "C" },
                { id: "q38", text: "The most desirable role of a teacher in modern education is that of a", options: { A: "dictator of knowledge", B: "passive observer only", C: "facilitator of learning", D: "examiner alone" }, answer: "C" },
                { id: "q39", text: "When a child repeatedly performs poorly, the teacher should first", options: { A: "label the child as incapable", B: "examine possible causes and provide suitable support", C: "remove the child from all group activities", D: "compare the child negatively with others" }, answer: "B" },
                { id: "q40", text: "Education in a democratic society should primarily help learners become", options: { A: "unquestioning followers", B: "dependent on authority for every decision", C: "responsible, thoughtful, and socially aware citizens", D: "passive recipients of information" }, answer: "C" }
              ]
            }
          ]
        },
        {
          id: "mock-test-2",
          title: "Full Mock Test – Set 2",
          description: "English, Reasoning, Biology, Chemistry, Physics, and Mathematics included.",
          timeInSeconds: 20 * 60,
          mode: "scored",
          status: "ready",
          sections: [
            {
              title: "Biology (Questions 1 to 10)",
              questions: [
                { id: "q1", text: "Which of the following is the most appropriate reason why prokaryotes are said to lack a “true nucleus”?", options: { A: "They do not contain genetic material", B: "Their DNA is not associated with histone proteins at all", C: "Their nuclear material is not enclosed by a membrane", D: "They do not possess ribosomes inside the cell" }, answer: "C" },
                { id: "q2", text: "In bryophytes, the sporophyte is dependent on the gametophyte mainly because the sporophyte", options: { A: "is always non-photosynthetic", B: "remains attached and obtains nutrition from the gametophyte", C: "produces gametes instead of spores", D: "lacks cell division during development" }, answer: "B" },
                { id: "q3", text: "Which of the following pairs is incorrectly matched?", options: { A: "Riccia — liverwort", B: "Funaria — moss", C: "Pteris — gymnosperm", D: "Marchantia — bryophyte" }, answer: "C" },
                { id: "q4", text: "Mitochondria and chloroplasts are regarded as semiautonomous organelles because they", options: { A: "can survive independently outside the cell", B: "possess their own genetic material and some protein-synthesizing machinery", C: "are bounded by a single membrane and divide by mitosis", D: "can synthesize all cellular proteins on their own" }, answer: "B" },
                { id: "q5", text: "The requirement of water for fertilization in both bryophytes and pteridophytes is due to the fact that", options: { A: "spores can germinate only in water", B: "the male gametes are motile", C: "the zygote develops only under submerged conditions", D: "the female gametes are released into water" }, answer: "B" },
                { id: "q6", text: "Which of the following best explains why fossil fuel is called a non-renewable resource?", options: { A: "It cannot produce energy efficiently", B: "It is formed rapidly but consumed slowly", C: "Its rate of formation is extremely slow compared with its rate of consumption", D: "It is available only in a few countries" }, answer: "C" },
                { id: "q7", text: "In a grazing food chain, if the producer level is drastically reduced, the first direct effect will be on", options: { A: "decomposers only", B: "primary consumers", C: "top carnivores only", D: "secondary consumers before herbivores" }, answer: "B" },
                { id: "q8", text: "During alcoholic fermentation in yeast, pyruvate is first converted into", options: { A: "acetaldehyde and then ethanol", B: "lactic acid and then ethanol", C: "acetyl-CoA and then ethanol", D: "carbon dioxide and then glucose" }, answer: "A" },
                { id: "q9", text: "Which of the following would most directly reduce the rate of transpiration pull in plants?", options: { A: "increase in leaf area", B: "opening of stomata", C: "rise in atmospheric humidity", D: "increase in air movement around leaves" }, answer: "C" },
                { id: "q10", text: "The protective function of mucus in the stomach is mainly due to its ability to", options: { A: "digest proteins before pepsin acts", B: "neutralize acid completely in the stomach cavity", C: "form a protective barrier over the epithelium", D: "stimulate secretion of gastrin" }, answer: "C" }
              ]
            },
            {
              title: "Chemistry (Questions 21 to 30)",
              questions: [
                { id: "q21", text: "Which of the following has the correct order of decreasing bond angle?", options: { A: "CH₄ > NH₃ > H₂O", B: "NH₃ > CH₄ > H₂O", C: "H₂O > NH₃ > CH₄", D: "CH₄ > H₂O > NH₃" }, answer: "A" },
                { id: "q22", text: "The magnetic behaviour of O₂ is best explained by", options: { A: "resonance in valence bond theory", B: "presence of two unpaired electrons in antibonding molecular orbitals", C: "ionic character in O–O bond", D: "equal sharing of electrons in π-bonds" }, answer: "B" },
                { id: "q23", text: "Among the following, the species most likely to act as a soft base is", options: { A: "F⁻", B: "OH⁻", C: "I⁻", D: "NH₃" }, answer: "C" },
                { id: "q24", text: "The energy of an electron in the nth orbit of a hydrogen-like atom is proportional to", options: { A: "-Z/n", B: "-Z²/n²", C: "-Z²/n", D: "-n²/Z" }, answer: "B" },
                { id: "q25", text: "Which of the following is isoelectronic with CO?", options: { A: "NO", B: "CN⁻", C: "O₂", D: "N₂⁺" }, answer: "B" },
                { id: "q26", text: "Maximum bond dissociation energy among the following C–H bonds is expected in", options: { A: "CH₄", B: "C₂H₆", C: "C₂H₄", D: "C₂H₂" }, answer: "D" },
                { id: "q27", text: "In the reaction of white phosphorus with alkali, the oxidation number of phosphorus in KH₂PO₂ is", options: { A: "+1", B: "+2", C: "+3", D: "+5" }, answer: "A" },
                { id: "q28", text: "Which of the following oxyacids has chlorine in the highest oxidation state?", options: { A: "HClO", B: "HClO₂", C: "HClO₃", D: "HClO₄" }, answer: "D" },
                { id: "q29", text: "If frequency of radiation is doubled, its wavelength becomes", options: { A: "double", B: "half", C: "four times", D: "one-fourth" }, answer: "B" },
                { id: "q30", text: "Which statement is correct?", options: { A: "All linear molecules are nonpolar", B: "All molecules with polar bonds are polar", C: "Molecular geometry determines whether bond dipoles cancel", D: "Dipole moment depends only on electronegativity difference" }, answer: "C" }
              ]
            },
            {
              title: "Physics (Questions 31 to 40)",
              questions: [
                { id: "q31", text: "A body is projected vertically upward with speed u. Ignoring air resistance, the ratio of times spent by it in the upper half and lower half of its total upward journey is", options: { A: "1:1", B: "1:√2", C: "(√2 - 1):1", D: "1:(√2 - 1)" }, answer: "C" },
                { id: "q32", text: "A particle starts from rest and moves with constant acceleration. If it covers distances x and y in successive equal intervals of time, then the ratio y/x must be", options: { A: "1", B: "2", C: "greater than 1 but not fixed", D: "always 3" }, answer: "D" },
                { id: "q33", text: "In Young's double slit experiment, one slit is covered by a thin transparent sheet. As a result", options: { A: "fringe width changes, but central fringe remains at the same place", B: "fringe width remains unchanged, but the entire pattern shifts", C: "both fringe width and intensity remain unchanged everywhere", D: "fringe width and wavelength both change" }, answer: "B" },
                { id: "q34", text: "A source of sound and an observer move in the same direction with the same speed in still air. The apparent frequency heard by the observer is", options: { A: "greater than the actual frequency", B: "smaller than the actual frequency", C: "equal to the actual frequency", D: "zero" }, answer: "C" },
                { id: "q35", text: "A concave mirror forms an image of magnification +2. The image is", options: { A: "real and inverted", B: "virtual and erect", C: "real and erect", D: "virtual and inverted" }, answer: "B" },
                { id: "q36", text: "The flux through a closed surface is zero. Which statement must be true?", options: { A: "electric field is zero at every point on the surface", B: "no charge is enclosed by the surface", C: "the net enclosed charge is zero", D: "the surface cannot lie in an electric field" }, answer: "C" },
                { id: "q37", text: "A wire of resistance R is cut into three equal parts and the parts are connected in parallel. The equivalent resistance is", options: { A: "R/9", B: "R/3", C: "3R", D: "R/27" }, answer: "A" },
                { id: "q38", text: "A charged particle enters a magnetic field with velocity parallel to the field. The magnetic force on it is", options: { A: "maximum", B: "zero", C: "perpendicular to velocity", D: "opposite to velocity" }, answer: "B" },
                { id: "q39", text: "For an ideal gas undergoing an isobaric process, the ratio of heat supplied to change in internal energy is", options: { A: "γ", B: "γ - 1", C: "γ/(γ - 1)", D: "1/(γ - 1)" }, answer: "A" },
                { id: "q40", text: "A train moves with speed v on rails separated by distance l in a vertical magnetic field B. If the speed doubles, the induced emf becomes", options: { A: "half", B: "same", C: "double", D: "four times" }, answer: "C" }
              ]
            },
            {
              title: "Mathematics (Questions 51 to 60)",
              questions: [
                { id: "q51", text: "If x − 1/x = 3, then x² + 1/x² equals", options: { A: "7", B: "9", C: "11", D: "13" }, answer: "C" },
                { id: "q52", text: "If log₃(x + 1) − log₃(x − 1) = 1, then x equals", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "B" },
                { id: "q53", text: "If the roots α and β of x² − 5x + 3 = 0, then α² + β² equals", options: { A: "19", B: "21", C: "25", D: "31" }, answer: "A" },
                { id: "q54", text: "The ratio in which the x-axis divides the line segment joining (2, 3) and (8, −6) is", options: { A: "1:2", B: "2:1", C: "1:3", D: "3:1" }, answer: "A" },
                { id: "q55", text: "A sum amounts to ₹12,100 in 2 years at compound interest compounded annually. If the rate is 10% per annum, the principal is", options: { A: "₹9,000", B: "₹10,000", C: "₹11,000", D: "₹12,000" }, answer: "B" },
                { id: "q56", text: "If secθ + tanθ = 3, then secθ − tanθ equals", options: { A: "1/2", B: "1/3", C: "1/4", D: "1/9" }, answer: "B" },
                { id: "q57", text: "The area of the triangle formed by the coordinate axes and the line 3x + 2y = 12 is", options: { A: "6 sq units", B: "8 sq units", C: "12 sq units", D: "24 sq units" }, answer: "C" },
                { id: "q58", text: "If A = [[2, 3], [1, 4]], then |A⁻¹| equals", options: { A: "1/5", B: "1/8", C: "1/11", D: "5" }, answer: "A" },
                { id: "q59", text: "The mean of 10 observations is 15. If each observation is increased by 3, the new mean is", options: { A: "15.3", B: "16", C: "18", D: "30" }, answer: "C" },
                { id: "q60", text: "∫(1/x + 2x) dx equals", options: { A: "ln x + x² + C", B: "ln|x| + x² + C", C: "1/x² + x² + C", D: "ln|x| + 2x² + C" }, answer: "B" }
              ]
            },
            {
              title: "English (Questions 61 to 70)",
              passages: [
                {
                  title: "Directions: Read the passage carefully and answer Questions 61 to 63.",
                  text: "People often assume that communication means speaking clearly, but listening is equally important. Many disagreements arise not because words are absent, but because attention is absent. To listen well is not merely to remain silent while another speaks; it is to make an effort to understand intention, tone, and unspoken meaning. In this sense, listening is an active discipline."
                }
              ],
              questions: [
                { id: "q61", text: "The central idea of the passage is that", options: { A: "speaking is more difficult than listening", B: "communication fails mainly due to lack of vocabulary", C: "effective listening is an active part of communication", D: "silence is always a sign of good listening" }, answer: "C" },
                { id: "q62", text: "Which of the following can be inferred from the passage?", options: { A: "Most people misunderstand others because they do not listen carefully", B: "Tone matters only in formal conversation", C: "Unspoken meaning should not be considered in communication", D: "Speaking clearly is less important than remaining silent" }, answer: "A" },
                { id: "q63", text: "“An active discipline” in the passage refers to", options: { A: "punishment for careless listeners", B: "a skill requiring conscious effort", C: "a formal academic subject", D: "a habit of speaking less" }, answer: "B" },
                { id: "q64", text: "Choose the synonym of “arise” as used in the passage.", options: { A: "disappear", B: "emerge", C: "continue", D: "settle" }, answer: "B" },
                { id: "q65", text: "Choose the antonym of “absent”.", options: { A: "hidden", B: "present", C: "delayed", D: "careful" }, answer: "B" },
                { id: "q66", text: "Fill in the blank with the correct preposition. He has no control ______ his temper when provoked.", options: { A: "at", B: "on", C: "over", D: "for" }, answer: "C" },
                { id: "q67", text: "Choose the correct sentence.", options: { A: "No sooner had she reached home when it started raining.", B: "No sooner she had reached home than it started raining.", C: "No sooner had she reached home than it started raining.", D: "No sooner did she reached home than it started raining." }, answer: "C" },
                { id: "q68", text: "Choose the correct transformation. “I shall help you,” she said to me.", options: { A: "She told me that she would help me.", B: "She said that she will help me.", C: "She told that she would help me.", D: "She said me that she would help me." }, answer: "A" },
                { id: "q69", text: "Identify the correctly spelt word.", options: { A: "Conscience", B: "Consience", C: "Consciense", D: "Conscince" }, answer: "A" },
                { id: "q70", text: "Which sentence is grammatically correct?", options: { A: "The teacher as well as the students were present.", B: "The teacher as well as the students was present.", C: "The teacher as well as the students have been present.", D: "The teacher as well as the students are present." }, answer: "B" }
              ]
            },
            {
              title: "Reasoning (Questions 71 to 80)",
              questions: [
                { id: "q71", text: "In a certain code language, “SING” is written as “VJQF” and “DUST” as “GXRW”. How will “MIND” be written in that code?", options: { A: "PLQG", B: "OLQG", C: "PKQF", D: "PLOG" }, answer: "A" },
                { id: "q72", text: "In a row, Anu is 16th from the left and 21st from the right. Rima is 5 places to the right of Anu. What is Rima’s position from the right?", options: { A: "15th", B: "16th", C: "17th", D: "18th" }, answer: "B" },
                { id: "q73", text: "A, B, C, D and E are sitting in a row facing north. B is to the immediate right of A. C is second to the left of B. D is not at any end. E is to the immediate left of D. Who is sitting at the extreme left?", options: { A: "A", B: "C", C: "E", D: "D" }, answer: "B" },
                { id: "q74", text: "If ‘GIVE’ is written as ‘VIEG’ and ‘OVER’ as ‘EVRO’, then how will ‘DISH’ be written in the same code?", options: { A: "ISHD", B: "SDIH", C: "IDSH", D: "SIDH" }, answer: "A" },
                { id: "q75", text: "Find the next term: 7, 15, 32, 66, 133, ?", options: { A: "265", B: "267", C: "268", D: "271" }, answer: "D" },
                { id: "q76", text: "Find the missing term: 4, 9, 19, 39, 79, ?", options: { A: "149", B: "151", C: "159", D: "161" }, answer: "C" },
                { id: "q77", text: "Statements: All teachers are readers. Some readers are writers. No writer is careless. Conclusions: I. Some readers are not careless. II. Some teachers are writers. III. No teacher is careless.", options: { A: "Only I follows", B: "Only I and II follow", C: "Only II and III follow", D: "Only III follows" }, answer: "A" },
                { id: "q78", text: "A man walks 7 m south, then 5 m east, then 7 m north, then 3 m west, and then 4 m north. In which direction is he now from the starting point?", options: { A: "East", B: "North-East", C: "North", D: "West" }, answer: "B" },
                { id: "q79", text: "If today is Wednesday, what day will it be 93 days after tomorrow?", options: { A: "Monday", B: "Tuesday", C: "Wednesday", D: "Thursday" }, answer: "D" },
                { id: "q80", text: "A is older than B but younger than C. D is younger than B but older than E. Who is the youngest?", options: { A: "A", B: "B", C: "D", D: "E" }, answer: "D" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "pyq-papers",
      title: "PYQ Papers",
      description: "Year-wise previous year paper section.",
      items: [
        {
          id: "pyq-2025",
          title: "PYQ 2025",
          description: "Official 2025 PYQ added almost fully. Questions 1 to 89 and 91 to 100 are added now.",
          timeInSeconds: 120 * 60,
          mode: "scored",
          status: "ready",
          sections: [
            {
              title: "PYQ 2025 – Physics (Questions 1 to 11)",
              questions: [
                { id: "q1", text: "Two equal masses are attached to the two ends of a spring of spring constant k. The masses are pulled out symmetrically to stretch the spring by a length x over its natural length. The work done by the spring on each mass is:", options: { A: "1/2 kx^2", B: "-1/2 kx^2", C: "1/4 kx^2", D: "-1/4 kx^2" }, answer: "D" },
                { id: "q2", text: "An empty plastic box of mass m is found to accelerate up at the rate g/3 when placed deep inside water. How much sand should be put inside the box so that it may accelerate down at rate g/6?", options: { A: "2m/5", B: "m/5", C: "m/6", D: "2m/3" }, answer: "A" },
                { id: "q3", text: "A person going away from a factory on his scooter at a speed 36 km h^-1 listens to the siren of the factory. If the main frequency of the siren is 600 Hz and a wind is blowing along the direction of the scooter at 36 km h^-1, the main frequency as heard by the person is:", options: { A: "583 Hz", B: "618 Hz", C: "783 Hz", D: "718 Hz" }, answer: "A" },
                { id: "q4", text: "Monochromatic light of wavelength 600 nm is used in a Young's double slit experiment. One of the slits is covered by a transparent sheet of thickness 1.8 × 10^-5 m made of a material of refractive index 1.6. The number of fringes shifted due to the introduction of the sheet is:", options: { A: "9", B: "18", C: "27", D: "0" }, answer: "B" },
                { id: "q5", text: "A hemispherical bowl of radius R is filled with liquid of density ρ. The pressure at the bottom center of the bowl due to the liquid is:", options: { A: "ρgR", B: "(2/3)ρgR", C: "(3/2)ρgR", D: "(5/3)ρgR" }, answer: ["A", "B"] },
                { id: "q6", text: "A charge Q is placed at the center of a cube, the flux of the electric field through the six surfaces of the cube is:", options: { A: "Q/(6ε₀)", B: "Q/ε₀", C: "Q/(4ε₀)", D: "Q/(2ε₀)" }, answer: "B" },
                { id: "q7", text: "A uniform wire of resistance 50 ohm is cut into 5 equal parts. These parts are now connected in parallel. The equivalent resistance of the combination is:", options: { A: "2 ohm", B: "10 ohm", C: "250 ohm", D: "6250 ohm" }, answer: "A" },
                { id: "q8", text: "An electric current i enters and leaves a uniform circular wire of radius a through diametrically opposite points. A charged particle q moving along the axis of the circular wire passes through its center at speed v. The magnetic force acting on the particle when it passes through the center has magnitude:", options: { A: "qvμ₀i/(2a)", B: "qvμ₀i/(2πa)", C: "qvμ₀i/a", D: "Zero" }, answer: "D" },
                { id: "q9", text: "A diatomic gas (γ = 1.4) does 200 J of work when it is expanded isobarically, then the heat given to the gas in the process is:", options: { A: "700 J", B: "500 J", C: "1200 J", D: "200 J" }, answer: "A" },
                { id: "q10", text: "The two rails of a railway track, insulated from each other and from the ground, are connected to a millivoltmeter. The vertical component of Earth's magnetic field is 0.2 × 10^-4 T and rails are separated by 1 m; the reading of the millivoltmeter when the train travels on the track at a speed of 180 km h^-1 is:", options: { A: "1.5 mV", B: "0.5 mV", C: "2 mV", D: "1 mV" }, answer: "D" },
                { id: "q11", text: "How many possible combinations of quantum numbers are there for the N shell?", options: { A: "8", B: "10", C: "18", D: "32" }, answer: "D" }
              ]
            },
            {
              title: "PYQ 2025 – Chemistry (Questions 12 to 20)",
              questions: [
                { id: "q12", text: "Among the following molecules, which one has the highest dipole moment?", options: { A: "CH3Cl", B: "CH2Cl2", C: "CHCl3", D: "CCl4" }, answer: "A" },
                { id: "q13", text: "Which of the following species has unpaired electron(s)?", options: { A: "N2", B: "F2", C: "O2−", D: "O2²−" }, answer: "C" },
                { id: "q14", text: "Which of the following is a hard acid?", options: { A: "Li+", B: "Cu+", C: "Ag+", D: "Au+" }, answer: "A" },
                { id: "q15", text: "Bohr's model can explain:", options: { A: "Spectrum of hydrogen atom only", B: "Spectrum of atom or ion containing one electron only", C: "Spectrum of hydrogen molecule", D: "Solar spectrum" }, answer: "B" },
                { id: "q16", text: "The HOMO of CO is:", options: { A: "σ-bonding", B: "π-bonding", C: "σ-antibonding", D: "π-antibonding" }, answer: ["A", "C"] },
                { id: "q17", text: "In the reaction 4P + 3KOH + 3H2O → 3KH2PO2 + PH3:", options: { A: "Phosphorous is oxidized only", B: "Phosphorous is reduced only", C: "Phosphorous is both oxidized and reduced", D: "Phosphorous is neither oxidized nor reduced" }, answer: "C" },
                { id: "q18", text: "In which of the following C–H bond, the highest s-character is found?", options: { A: "Acetylene", B: "Ethylene", C: "Methane", D: "Carbene" }, answer: "A" },
                { id: "q19", text: "Perchloric acid has:", options: { A: "8 lone pairs, 4 σ bonds, and 3 π bonds", B: "9 lone pairs, 6 σ bonds, and no π bonds", C: "11 lone pairs, 5 σ bonds, and no π bonds", D: "13 lone pairs, 4 σ bonds, and 1 π bond" }, bonus: true },
                { id: "q20", text: "If the energies of two photons are in the ratio of 3 : 2, their wavelengths will be in the ratio of:", options: { A: "9 : 4", B: "2 : 3", C: "1 : 2", D: "3 : 2" }, answer: "B" }
              ]
            },
            {
              title: "PYQ 2025 – Biology and Environment (Questions 21 to 29)",
              questions: [
                { id: "q21", text: "Prokaryotic cells do not have:", options: { A: "Chromosome", B: "Cell wall", C: "Mitochondrion", D: "Plasma membrane" }, answer: "C" },
                { id: "q22", text: "Sandwich model of plasma membrane was proposed by:", options: { A: "Danielli and Davson", B: "Robertson", C: "R. Hooke", D: "Singer and Nicolson" }, answer: "A" },
                { id: "q23", text: "G2 phase of cell cycle occurs between:", options: { A: "M-phase and S-phase", B: "M-phase and G1-phase", C: "G1-phase and S-phase", D: "G1-phase and G0-phase" }, answer: "A" },
                { id: "q24", text: "Which one is said to have semi-autonomous nature?", options: { A: "Endoplasmic reticulum", B: "Golgi complex", C: "Peroxisome", D: "Chloroplast" }, answer: "D" },
                { id: "q25", text: "The family Xanthophyceae belongs to:", options: { A: "Algae", B: "Fungi", C: "Bryophyta", D: "Pteridophyta" }, answer: "A" },
                { id: "q26", text: "The sporophyte of ________ is devoid of seta.", options: { A: "Riccia", B: "Marchantia", C: "Porella", D: "Funaria" }, answer: "A" },
                { id: "q27", text: "Which statement is wrong about Gymnosperms?", options: { A: "The plants are mostly perennial.", B: "Strobili are unisexual.", C: "In most cases, endosperm develops after fertilization.", D: "Pollination is mostly anemophilous." }, answer: "C" },
                { id: "q28", text: "Which one is not a resemblance between Bryophytes and Pteridophytes?", options: { A: "Multicellular jacketed sex organs", B: "Water is mostly a necessity for the process of fertilization", C: "Heteromorphic type of alternation of generations", D: "Gametophyte is the dominant independent generation" }, answer: "D" },
                { id: "q29", text: "Which is not a renewable energy source?", options: { A: "Fossil fuel", B: "Water", C: "Tide", D: "Sunlight" }, answer: "A" }
              ]
            },
            {
              title: "PYQ 2025 – General, Math, English, GK and Reasoning (Questions 30 to 90)",
              questions: [
                { id: "q30", text: "Regarding biological resource, the number of species per unit area is called species:", options: { A: "Diversity", B: "Evenness", C: "Equitability", D: "Richness" }, answer: "D" },
                { id: "q31", text: "In relation to energy flow in an ecosystem, PAR refers to:", options: { A: "Photosynthetically active radiation", B: "Photosynthetically accurate radiation", C: "Photosynthetically assured radiation", D: "Photosynthetically absorbed radiation" }, answer: "A" },
                { id: "q32", text: "The consumers that feed on the herbivores are called:", options: { A: "Primary consumers", B: "Primary carnivores", C: "Primary herbivores", D: "Primary decomposers" }, answer: "B" },
                { id: "q33", text: "Combustion of fossil fuels, mining and industries are the main sources of:", options: { A: "Water pollution", B: "Air pollution", C: "Soil pollution", D: "Noise pollution" }, answer: "B" },
                { id: "q34", text: "The most significant contributor to water pollution due to human interference is:", options: { A: "Industry", B: "Agriculture", C: "Cultural activities", D: "Horticulture" }, answer: "A" },
                { id: "q35", text: "The maintenance processes of living organisms go on every time, and together they are called:", options: { A: "Repair process", B: "Life process", C: "Renovation process", D: "Rejuvenation process" }, answer: "B" },
                { id: "q36", text: "The compounds that are utilised for providing energy to the plants are:", options: { A: "Amino acids", B: "Fat", C: "Carbohydrates", D: "Proteins" }, answer: "C" },
                { id: "q37", text: "The substance that is secreted by gastric glands and protects the inner lining of the stomach from the action of hydrochloric acid under normal conditions is:", options: { A: "Pepsin", B: "Rennin", C: "Gastrin", D: "Mucus" }, answer: "D" },
                { id: "q38", text: "In yeasts, the pyruvate is converted into ______ under anaerobic condition.", options: { A: "Ethanol and butane", B: "Ethanol and carbon dioxide", C: "Ethanol and oxygen", D: "Ethanol and propane" }, answer: "B" },
                { id: "q39", text: "_____ of throat ensure that the air-passage does not collapse.", options: { A: "Rings of bones", B: "Rings of muscles", C: "Rings of cartilage", D: "Rings of connective tissue" }, answer: "C" },
                { id: "q40", text: "During day time, when the stomata are open, the major driving force in the movement of water in the xylem is:", options: { A: "Transpiration pull", B: "Gravitational pull", C: "Diffusion pressure", D: "Osmotic pressure" }, answer: "A" },
                { id: "q41", text: "The decimal equivalent of the binary number 11001 is:", options: { A: "25", B: "24", C: "23", D: "22" }, answer: "A" },
                { id: "q42", text: "For the sets A = {5n : n ∈ N}, B = {7n : n ∈ N} and C = {35n : n ∈ N}, which one of the following options is true?", options: { A: "(A ∩ B) ∪ C = ϕ", B: "(A ∪ B) ∩ C = ϕ", C: "(A − B) ∪ C = ϕ", D: "(A ∩ B) − C = ϕ" }, answer: "D" },
                { id: "q43", text: "On the set {1, 2, 3, 4}, consider the relation R = {(1, 2), (3, 1), (3, 4)}. What minimum number of elements is to be added in R to make it an equivalence relation?", options: { A: "11", B: "10", C: "8", D: "6" }, bonus: true },
                { id: "q44", text: "Which of the following relations on R is not a function? (i) {(x, y) : y² = x} (ii) {(x, y) : y = √(4 − x²), |x| ≤ 2} (iii) {(x, y) : x² + y² = 1}", options: { A: "Only (i)", B: "Only (i) and (ii)", C: "Only (i) and (iii)", D: "Only (ii) and (iii)" }, answer: "C" },
                { id: "q45", text: "Which of the following pairs of linear equations is inconsistent?", options: { A: "x − 2y = 6, 2x + 3y = 4", B: "9x − 8y = 17, 18x − 16y = 34", C: "5x − 3y = 11, 7x + 2y = 13", D: "2x + 3y = 7, 4x + 6y = 5" }, answer: "D" },
                { id: "q46", text: "Assertion (A): The number of common solution(s) for the system of linear equations 5x + 4y + 6 = 0 and 10x + 8y − 12 = 0 is zero. Reason (R): The system of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 has a unique solution, if a₁/a₂ ≠ b₁/b₂.", options: { A: "Both (A) and (R) are correct and (R) is the correct explanation for (A)", B: "Both (A) and (R) are correct, but (R) is not the correct explanation for (A)", C: "(A) is correct, but (R) is incorrect", D: "(A) is incorrect, but (R) is correct" }, answer: "B" },
                { id: "q47", text: "What is the remainder when the polynomial x¹⁰⁰ − x⁵⁰ + 1 is divided by x² + 1?", options: { A: "3", B: "2", C: "1", D: "0" }, answer: "C" },
                { id: "q48", text: "Hardik and Shivang attempted to solve the same quadratic equation. Hardik made a mistake in writing down the constant term and ended up getting the roots 4 and 3 respectively. Shivang made a mistake in writing down the coefficient of x and got the roots 3 and 2 respectively. The correct roots of the equation are:", options: { A: "1, 6", B: "3, 4", C: "−4, 3", D: "−6, −1" }, answer: "A" },
                { id: "q49", text: "What is the value of (0.000001)^(1/3)?", options: { A: "0.0001", B: "0.00001", C: "0.001", D: "0.01" }, answer: "D" },
                { id: "q50", text: "Rs. 8400 is divided among A, B, C and D in such a way that the shares of A and B, B and C, C and D are in the ratios of 2 : 3, 4 : 5 and 6 : 7 respectively. What is the share of A?", options: { A: "Rs. 1280", B: "Rs. 1320", C: "Rs. 1380", D: "Rs. 1420" }, answer: "A" },
                { id: "q51", text: "If x varies inversely as y³ − 1 and x = 6 when y = 3, then what is the value of x when y = 8?", options: { A: "155/510", B: "156/511", C: "157/512", D: "158/513" }, answer: "B" },
                { id: "q52", text: "If log₁₀(2) = 0.3010, then what is the number of digits in 2⁷²?", options: { A: "18", B: "20", C: "22", D: "24" }, answer: "C" },
                { id: "q53", text: "log₃(24) / log₆(2) − log₈(192) / log₁₂(2) =", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "B" },
                { id: "q54", text: "Which of the following assertions is/are true? (i) sin²2° + sin²4° + sin²6° + ... + sin²88° + sin²90° = 23 (ii) cos(2θ) > |sin(θ)| for −π/6 < θ < π/6", options: { A: "Only (i)", B: "Only (ii)", C: "Both (i) and (ii)", D: "Neither (i) nor (ii)" }, answer: "C" },
                { id: "q55", text: "For x ∈ R, which one of the following assertions is false?", options: { A: "sec²(x) − tan²(x) = 1", B: "sin²(x) + cos²(x) = 1", C: "cos(2x) = 1 − 2sin²(x)", D: "sin(2x) = 2sin(x) cos(x)" }, answer: "A" },
                { id: "q56", text: "In a triangle ABC, if ∠C = 60°, then what is the value of (cos A + cos B) / cos((A − B)/2)?", options: { A: "3", B: "2", C: "√2", D: "1" }, answer: "D" },
                { id: "q57", text: "The angle of elevation of the top of a tower is 30°. If the height of the tower is doubled, then the angle of elevation of its top will be:", options: { A: "Equal to 30°", B: "Equal to 60°", C: "Less than 60°", D: "Greater than 60°" }, answer: "C" },
                { id: "q58", text: "If the shadow of a tower standing on the level ground is found to be 40 meters longer when the Sun's altitude is 30° than when it was 60°, then what is the height of the tower?", options: { A: "40/√3 meters", B: "20√3 meters", C: "20 meters", D: "15√3 meters" }, answer: "B" },
                { id: "q59", text: "Three or more lines which pass through the same point are called:", options: { A: "Intersecting lines", B: "Collinear lines", C: "Concurrent lines", D: "Parallel lines" }, answer: "C" },
                { id: "q60", text: "Which one of the following statements is incorrect?", options: { A: "A rectangle circumscribing a circle is a square.", B: "A right-angled triangle can always be inscribed in a circle, if the hypotenuse of the triangle is the diameter of the circle.", C: "The centroid of an equilateral triangle inscribed in a circle coincides with the center of the circle.", D: "All of the above" }, bonus: true },
                { id: "q61", text: "Which statement is false with regard to street art?", options: { A: "It is a form of visual art.", B: "It is displayed in public spaces.", C: "It is found in both city and village areas.", D: "Artists do their work for a reason." }, answer: "C" },
                { id: "q62", text: "Which purpose of the street artist is not right?", options: { A: "To earn name and fame and money for himself", B: "To beautify urban landscapes", C: "To create awareness about environmental issues", D: "To convey a social or political message" }, answer: "A" },
                { id: "q63", text: "Which technique is not used for street art?", options: { A: "Spray painting", B: "Finger painting", C: "Stencilling", D: "Stickering" }, answer: "B" },
                { id: "q64", text: "Why did street art start out very secretly?", options: { A: "Because it provoked discussion and reaction", B: "Because it disfigured neighbourhood identity", C: "Because it hardly reflected the cultural heritage of a site", D: "Because it was illegal to use public and private property without permission" }, answer: "D" },
                { id: "q65", text: "Which is the synonym of ‘Optimism’?", options: { A: "Cynicism", B: "Hopefulness", C: "Scepticism", D: "Pessimism" }, answer: "B" },
                { id: "q66", text: "Which is the antonym of ‘hazardous’?", options: { A: "Terrible", B: "Jealous", C: "Safe", D: "Dangerous" }, answer: "C" },
                { id: "q67", text: "A person who does not believe in existence of God is called:", options: { A: "Philanthropist", B: "Misogynist", C: "Atheist", D: "Theist" }, answer: "C" },
                { id: "q68", text: "I asked the boy _____. Which clause correctly completes the sentence?", options: { A: "how old he was", B: "how old he will be", C: "how old was he", D: "how old he is" }, answer: "A" },
                { id: "q69", text: "She divided the cake ______ her five children. Identify the correct preposition.", options: { A: "between", B: "in", C: "within", D: "among" }, answer: "D" },
                { id: "q70", text: "Identify the correct sentence:", options: { A: "He made such funny faces that I could not but laughed.", B: "He made such funny faces that I could not but laugh.", C: "He made such funny faces that I could not but laughing.", D: "He made such funny faces that I could not but laughs." }, answer: "B" },
                { id: "q71", text: "Gases are good conductors of electricity at:", options: { A: "High pressure", B: "Low pressure", C: "Low temperature", D: "High temperature" }, answer: ["B", "D"] },
                { id: "q72", text: "The total number of bones in the human body is:", options: { A: "206", B: "260", C: "306", D: "360" }, answer: "A" },
                { id: "q73", text: "The main function of a Constituent Assembly is:", options: { A: "Framing the Constitution", B: "Amending the Constitution", C: "Enforcement of the Constitution", D: "Interpretation of the Constitution" }, answer: "A" },
                { id: "q74", text: "Which of the following is not the organ of a Government?", options: { A: "Executive", B: "Judiciary", C: "Legislature", D: "Political parties" }, answer: "D" },
                { id: "q75", text: "The retirement age of a judge of the Supreme Court is:", options: { A: "65 years", B: "60 years", C: "58 years", D: "55 years" }, answer: "A" },
                { id: "q76", text: "A society which is governed for the good of all, is called:", options: { A: "Capitalist society", B: "Socialist society", C: "Anarchy", D: "Dictatorship" }, answer: "B" },
                { id: "q77", text: "The National Open School was set up by the Government of India in the year:", options: { A: "1989", B: "1988", C: "1987", D: "1985" }, answer: "A" },
                { id: "q78", text: "Name of the Educational Policy which was immediately followed by Programme of Action to implement the policy declaration:", options: { A: "National Policy on Education – 1968", B: "National Policy for Persons with Disabilities – 2006", C: "National Policy on Education – 1986", D: "National Education Policy – 2020" }, answer: "C" },
                { id: "q79", text: "The Review Committee on the curriculum for Ten Year School, 1977 is also known as:", options: { A: "Dr. Malcolm Adiseshiah Committee", B: "Dr. Shukla Committee", C: "Dr. Jha Committee", D: "Iswarbhai Patel Committee" }, answer: "D" },
                { id: "q80", text: "The District Primary Education Programme was started in the year:", options: { A: "1992", B: "1994", C: "1973", D: "1995" }, answer: "B" },
                { id: "q81", text: "In a row, Sharad is 7th from right and 27th from left, then how many students are there in the row?", options: { A: "31", B: "32", C: "33", D: "34" }, answer: "C" },
                { id: "q82", text: "A, B, C, D and E are five rivers. A is smaller than B but longer than E. C is the longest and D is a little smaller than B and a little longer than A. Which is the smallest river?", options: { A: "A", B: "B", C: "C", D: "E" }, answer: "D" },
                { id: "q83", text: "If A = 1 and AND = 19, then BAT = ?", options: { A: "22", B: "23", C: "21", D: "20" }, answer: "B" },
                { id: "q84", text: "In a certain code language, ‘GIVE’ is written as ‘VIEG’, and ‘OVER’ is written as ‘EVRO’. How will ‘DISK’ be written in the same code?", options: { A: "SIDK", B: "KISD", C: "KDSI", D: "SIKD" }, answer: "D" },
                { id: "q85", text: "A, B, C and D are playing cards. A & C and B & D are partners. D is to the right of C. The face of C is towards West. In which direction is D facing?", options: { A: "West", B: "East", C: "South", D: "North" }, answer: "C" },
                { id: "q86", text: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After six years, Arun's age will be 26 years. What is the age of Deepak at present?", options: { A: "12 years", B: "15 years", C: "19 years", D: "25 years" }, answer: "B" },
                { id: "q87", text: "If every second Saturday and all Sundays are holidays in a 30 day month beginning on Saturday, then how many working days are there in that month?", options: { A: "20", B: "21", C: "22", D: "23" }, answer: "D" },
                { id: "q88", text: "The positions of how many digits in the number 351462987 will remain unchanged after the digits are rearranged in ascending order within the number?", options: { A: "None", B: "One", C: "Two", D: "Three" }, answer: "C" },
                { id: "q89", text: "Arrange the following words in a logical and meaningful order: (1) Country (2) Furniture (3) Forest (4) Wood (5) Trees", options: { A: "1, 3, 5, 4, 2", B: "1, 4, 3, 2, 5", C: "2, 4, 3, 1, 5", D: "5, 2, 3, 1, 4" }, answer: "A" },
                { id: "q90", text: "Find the next two terms of the given series: Z, S, W, O, T, K, Q, G, ?, ?", options: { A: "N, C", B: "N, D", C: "O, C", D: "O, D" }, answer: "A" }
              ]
            },
            {
              title: "PYQ 2025 – Teaching and Education (Questions 91 to 100)",
              questions: [
                { id: "q91", text: "When students in a class are frequently off-task during group activities, the teacher should:", options: { A: "Allow all students to socialize during group work to keep them comfortable", B: "Reduce the number of group activities and focus more on direct instruction", C: "Assign all tasks as individual work to avoid distractions", D: "Use group roles and provide clear instructions to ensure accountability within each group" }, answer: "D" },
                { id: "q92", text: "What is the best way for the teacher to handle a classroom while students are frequently disruptive and preventing others from learning?", options: { A: "Assign extra assignments to students who are disturbing", B: "Allow students to continue disruptive behaviour in order to avoid confrontation", C: "Establish clear-cut rules and expectations, while providing consistent positive reinforcement for exhibiting good behaviour", D: "Use punitive measures such as detention for all disruptive students" }, answer: "C" },
                { id: "q93", text: "Name the classroom management technique that helps students to become self-disciplined and responsible for their own learning:", options: { A: "Frequent punishment", B: "Authoritarian control", C: "External rewards only", D: "Collaborative problem-solving" }, answer: "D" },
                { id: "q94", text: "According to Lev Vygotsky, learning is:", options: { A: "An individual activity", B: "A positive activity", C: "A conditioned activity", D: "A social activity" }, answer: "D" },
                { id: "q95", text: "‘Learning is the modification of behaviour through experience and training.’ This statement was given by:", options: { A: "Morgan", B: "Gates", C: "Cronbach", D: "Skinner" }, answer: "B" },
                { id: "q96", text: "Which of the following is an important social goal of education?", options: { A: "Limiting access to information", B: "Encouraging competition among students", C: "Developing a sense of cooperation and responsibility", D: "Promoting individualism without regard for others" }, answer: "C" },
                { id: "q97", text: "The role of NTA is to:", options: { A: "Oversee curriculum development", B: "Manage teaching training programme", C: "Conduct national-level entrance examination", D: "Develop higher education policies" }, answer: "C" },
                { id: "q98", text: "One of the key challenges in implementing competency-based education is:", options: { A: "Emphasizing student's mastery of skills", B: "Developing personalized learning assessments", C: "Lack of flexibility in learning space", D: "Encouraging real-world application of knowledge" }, answer: "B" },
                { id: "q99", text: "Which of the following is responsible for implementing the Mid-day Meal Scheme?", options: { A: "AICTE", B: "UGC", C: "MoE", D: "ICSSR" }, answer: "C" },
                { id: "q100", text: "One of the major disadvantages of excessive use of technology in education is:", options: { A: "Enhanced critical thinking skills", B: "Reduced accessibility for students from low-income backgrounds", C: "Improved classroom interaction", D: "Increased teacher-student interaction" }, answer: "B" }
              ]
            }
          ]
        },
        { id: "pyq-2024",
          title: "PYQ 2024",
          description: "Practice only. Official answer key is not available. Questions 1 to 100 are added.",
          timeInSeconds: 120 * 60,
          mode: "practice",
          status: "ready",
          sections: [
            {
              title: "PYQ 2024 – Physics (Questions 1 to 10)",
              questions: [
                { id: "q1", text: "A table is at rest on a horizontal floor and a box is at rest on the table. If the floor exerted by the Earth on the box is taken as the action force, the reaction force is:", options: { A: "Force exerted by the table on the box", B: "Force exerted by the box on the table", C: "Force exerted by the table on the horizontal floor", D: "Force exerted by the box on the Earth" } },
                { id: "q2", text: "A body is released from rest at a height H above the ground. The speed with which the body reaches the ground is:", options: { A: "Proportional to H", B: "Proportional to the square root of H", C: "Proportional to H²", D: "Independent of H" } },
                { id: "q3", text: "The sound wave:", options: { A: "Propagates as a longitudinal wave in a material medium", B: "Propagates as a transverse wave in a material medium", C: "Can propagate in a gaseous medium but not in a solid", D: "Can propagate both in vacuum and in gaseous medium" } },
                { id: "q4", text: "A light ray moves from air to glass. Which of the following is correct?", options: { A: "The frequency and wavelength change in glass", B: "The wavelength and the speed of propagation change in glass", C: "The frequency and the speed of propagation change in glass", D: "Neither the frequency nor the wavelength changes in glass. Only the speed of propagation changes" } },
                { id: "q5", text: "A liquid has attained its temperature of boiling point under normal atmospheric pressure. When further heat is supplied to the liquid:", options: { A: "Its temperature increases", B: "Its temperature decreases", C: "Its temperature remains constant and it undergoes phase transition", D: "It starts solidifying immediately" } },
                { id: "q6", text: "A steady electric current passes through a long, straight conductor. The magnetic lines of force due to the current:", options: { A: "Are straight lines parallel to the conductor along the direction of the current", B: "Are straight lines parallel to the conductor and opposite to the direction of the current", C: "Originate from the straight conductor and end there", D: "Concentric circles with centre at the conductor" } },
                { id: "q7", text: "Which of the following devices is based on the principle of Faraday’s law of electromagnetic induction?", options: { A: "Transformer", B: "LED lamp", C: "Incandescent lamp", D: "Magnetic compass" } },
                { id: "q8", text: "The SI unit of magnetic field is:", options: { A: "Gauss", B: "Siemens", C: "Tesla", D: "Weber" } },
                { id: "q9", text: "A particle of charge 1.5 coulomb moves from point A to point B. If the work done on the particle is 30 joule, the electric potential difference between points A and B is:", options: { A: "4.5 volt", B: "0.05 volt", C: "20 volt", D: "45 volt" } },
                { id: "q10", text: "The focal length of a concave mirror is 12 cm. If an object is placed at a distance of 8 cm from the mirror, the image formed in the mirror is:", options: { A: "Virtual, inverted and diminished", B: "Virtual, erect and magnified", C: "Real, erect and magnified", D: "Real, inverted and diminished" } }
              ]
            },
            {
              title: "PYQ 2024 – Chemistry and Biology (Questions 11 to 20)",
              questions: [
                { id: "q11", text: "What is the wave number of radiation whose wavelength is 2.5 μ?", options: { A: "2000 cm⁻¹", B: "4000 cm⁻¹", C: "1000 cm⁻¹", D: "3000 cm⁻¹" } },
                { id: "q12", text: "The number of nodal planes in 3s orbital is:", options: { A: "0", B: "1", C: "2", D: "3" } },
                { id: "q13", text: "1.0 g of CO₂ contains:", options: { A: "6.02 × 10²³ atoms of C", B: "6.02 × 10²³ atoms of O", C: "18.1 × 10²³ molecules of CO₂", D: "3 g-atom of CO₂" } },
                { id: "q14", text: "The number of grams of H₂SO₄ present in 0.25 mole of H₂SO₄ is:", options: { A: "0.245", B: "2.45", C: "24.5", D: "49.0" } },
                { id: "q15", text: "Which one of the following factors is the most important in making fluorine the strongest oxidising agent?", options: { A: "Electron affinity", B: "Ionisation enthalpy", C: "Bond dissociation energy", D: "Hydration enthalpy" } },
                { id: "q16", text: "The weakest acid among the following is:", options: { A: "HI", B: "HBr", C: "HF", D: "HCl" } },
                { id: "q17", text: "Xenon hexafluoride reacts with silica to form a Xenon compound 'X'. The oxidation state of Xenon in 'X' is:", options: { A: "+2", B: "+4", C: "0", D: "+6" } },
                { id: "q18", text: "KMnO₄ is used as:", options: { A: "Reducing agent and disinfectant", B: "Reducing agent and antiseptic", C: "Oxidising agent and disinfectant", D: "Oxidising agent and antiseptic" } },
                { id: "q19", text: "The reaction between barium chloride and sodium sulphate goes to completion because:", options: { A: "Barium sulphate is almost insoluble", B: "The solubility of barium chloride decreases", C: "Lattice energy of barium sulphate is very high", D: "The reaction is irreversible in nature" } },
                { id: "q20", text: "Which one of the following transition metal ions is diamagnetic?", options: { A: "Co²⁺", B: "Zn²⁺", C: "Ni²⁺", D: "Cu²⁺" } }
              ]
            },
            {
              title: "PYQ 2024 – Biology and General Science (Questions 21 to 30)",
              questions: [
                { id: "q21", text: "In a prokaryotic cell, the site of respiratory enzymes is:", options: { A: "Nucleoid", B: "Cytoplasm", C: "Mesosome", D: "Chromatophore" } },
                { id: "q22", text: "Sandwich model of structural organization of cell membrane was proposed by:", options: { A: "Danielli and Davson", B: "Robertson", C: "Porter and Grendel", D: "Singer and Nicolson" } },
                { id: "q23", text: "With reference to Endoplasmic Reticulum, which one is not a type of structure?", options: { A: "Cisternae", B: "Vesicles", C: "Tubules", D: "F-particles" } },
                { id: "q24", text: "Granum is seen in:", options: { A: "Mitochondria", B: "Chloroplast", C: "Nuclear pore complex", D: "Lysosome" } },
                { id: "q25", text: "The plants known as 'Horsetails' belong to:", options: { A: "Bryophytes", B: "Pteridophytes", C: "Gymnosperms", D: "Angiosperms" } },
                { id: "q26", text: "Which are known as 'Amphibians of Plant Kingdom'?", options: { A: "Algae", B: "Fungi", C: "Bryophytes", D: "Pteridophytes" } },
                { id: "q27", text: "Stole is found in which one of the following?", options: { A: "Marchantia", B: "Saccharomyces", C: "Porella", D: "Adiantum" } },
                { id: "q28", text: "Which state of India has the largest forest area?", options: { A: "Madhya Pradesh", B: "Uttar Pradesh", C: "Arunachal Pradesh", D: "Andhra Pradesh" } },
                { id: "q29", text: "Which one is used in energy-generating nuclear reactors?", options: { A: "Uranium–216", B: "Uranium–218", C: "Uranium–235", D: "Uranium–258" } },
                { id: "q30", text: "Who put forward the concept of 'One Sun One World One Grid'?", options: { A: "India", B: "USA", C: "England", D: "Germany" } }
              ]
            },
            {
              title: "PYQ 2024 – Biology and Environment (Questions 31 to 40)",
              questions: [
                { id: "q31", text: "According to food habit, what kind of teeth are present in human beings?", options: { A: "Bunodont", B: "Secodont", C: "Selenodont", D: "Lophodont" } },
                { id: "q32", text: "At which thoracic vertebrae in human does the trachea branch?", options: { A: "Sixth", B: "Fourth", C: "Fifth", D: "Second" } },
                { id: "q33", text: "Which of the following vessels carries blood with minimum urea?", options: { A: "Renal artery", B: "Renal vein", C: "Hepatic vein", D: "Aortic portal vein" } },
                { id: "q34", text: "After ovulation Graafian follicles regress into:", options: { A: "Corpus atresia", B: "Corpus callosum", C: "Corpus luteum", D: "Corpus albicans" } },
                { id: "q35", text: "Identify the odd one from the following.", options: { A: "Fimbriae", B: "Isthmus", C: "Infundibulum", D: "Labaminora" } },
                { id: "q36", text: "The major aerosol pollutant in jet plane emission is:", options: { A: "Sulphur dioxide", B: "Carbon monoxide", C: "Methane", D: "Fluorocarbon" } },
                { id: "q37", text: "The Montreal Protocol (1987) is connected with:", options: { A: "Reduction in CFC", B: "Reduction in emission of greenhouse gases", C: "Reduction in use of energy", D: "Sustainable development of wetlands" } },
                { id: "q38", text: "Mucor and Aspergillus are examples of:", options: { A: "Producers", B: "Primary consumer", C: "Secondary consumer", D: "Decomposer" } },
                { id: "q39", text: "The natural reservoirs of Phosphorus is:", options: { A: "Atmosphere", B: "Rocks", C: "Ocean", D: "Dead organisms" } },
                { id: "q40", text: "How much energy the producer trophic level will have if the amount of energy available at the third trophic level is 10 J?", options: { A: "10³ J", B: "100 J", C: "1000 J", D: "10000 J" } }
              ]
            },
            {
              title: "PYQ 2024 – Mathematics and Relations (Questions 41 to 50)",
              questions: [
                { id: "q41", text: "The digit in the unit place of (2018)^2018 + (2019)^2019 + (2020)^2020 is:", options: { A: "7", B: "4", C: "3", D: "1" } },
                { id: "q42", text: "How many proper subsets of the set {1, 2, 3, 4, 5, 6, 7} contain the numbers 1 and 7?", options: { A: "32", B: "31", C: "30", D: "28" } },
                { id: "q43", text: "The sum of three numbers is 98. If the ratio of the first to second is 2 : 3 and that of the second to the third is 5 : 8, then what is the second number?", options: { A: "58", B: "48", C: "30", D: "25" } },
                { id: "q44", text: "For positive integers x, y, z, if x : (y + z) = 1 : 3 and z : (x + y) = 5 : 7, then y : (x + z) is equal to:", options: { A: "1 : 2", B: "2 : 3", C: "1 : 3", D: "2 : 1" } },
                { id: "q45", text: "If S = {(x, y) ∈ R² : y = x + 1}, then which one of the following statements is correct?", options: { A: "S is an equivalence relation", B: "S is a reflexive, but not symmetric and transitive relation", C: "S is symmetric and transitive, but not a reflexive relation", D: "S is not a reflexive, not a symmetric and not a transitive relation" } },
                { id: "q46", text: "On the sets A = {-1, 1}, B = {0, 1} and C = {-1, 0}, consider the following relations: S₁ = {(x, y) ∈ A × A : x² + y² = 1}, S₂ = {(x, y) ∈ A × B : x² + y² = 1}, S₃ = {(x, y) ∈ A × C : x² + y² = 1}, S₄ = {(x, y) ∈ B × C : x² + y² = 1}. Which option is correct?", options: { A: "Only S₁ is not a function", B: "Only S₁ and S₂ are not functions", C: "Only S₂ and S₃ are not functions", D: "Only S₁, S₃ and S₄ are not functions" } },
                { id: "q47", text: "How many pairs of x, y ∈ R satisfy these two equations: x + |y| = 8 and |x| + y = 6?", options: { A: "4", B: "3", C: "2", D: "1" } },
                { id: "q48", text: "The roots of the quadratic equation 1/(a + b + x) = 1/a + 1/b + 1/x, with a + b ≠ 0 are:", options: { A: "−a and −b", B: "−a and b", C: "a and −b", D: "a and b" } },
                { id: "q49", text: "P takes 6 days less than Q to finish a piece of work. If both P and Q together can finish the work in 4 days, then the time taken by Q to finish the work is:", options: { A: "11½ days", B: "12 days", C: "13 days", D: "15 days" } },
                { id: "q50", text: "If the polynomial p(x) = 6x³ + 13x² + αx + β is divisible by q(x) = 2x² + 7x − 4, then which one of the following is true?", options: { A: "4x − 3 is a factor of p(x)", B: "4x + 3 is a factor of p(x)", C: "3x + 4 is a factor of p(x)", D: "3x − 4 is a factor of p(x)" } }
              ]
            },
            {
              title: "PYQ 2024 – Mathematics and Passage (Questions 51 to 60)",
              questions: [
                { id: "q51", text: "If (25)^7.5 × (5)^2.5 ÷ (125)^1.5 = 5^x, then the value of x is:", options: { A: "17.5", B: "15", C: "13", D: "8.5" } },
                { id: "q52", text: "If log₂(log₃(log₂ x)) = 1, then what is the value of x?", options: { A: "27", B: "64", C: "125", D: "512" } },
                { id: "q53", text: "The value of (0.2)^(log√5(1/4 + 1/8 + 1/16 + ...)) is:", options: { A: "4", B: "2", C: "log(2)", D: "2 log(2)" } },
                { id: "q54", text: "If cos⁻¹(1/√5) = θ, then what is the value of cosec⁻¹(√5)?", options: { A: "−θ", B: "θ + π/2", C: "θ − π/2", D: "π/2" } },
                { id: "q55", text: "What will be the value of (3 cos 80°)(cosec 10°) + (2 cos 59°)(cosec 31°)?", options: { A: "2", B: "3", C: "4", D: "5" } },
                { id: "q56", text: "Which one of the following statements is false?", options: { A: "Any point is zero dimensional", B: "Any straight line is one dimensional", C: "A circle is two dimensional", D: "Any plane is two dimensional" } },
                { id: "q57", text: "If the angles of elevation of the top of a tower from two points lying at distances of 4 meters and 9 meters from the foot are complementary, then what is the height of the tower?", options: { A: "8 meters", B: "6 meters", C: "5.5 meters", D: "5 meters" } },
                { id: "q58", text: "An equilateral △ABC is inscribed in a circle. If D is a point on the minor arc BC and the measure of ∠CBD = 40°, then what is the measure of ∠BCD?", options: { A: "20°", B: "30°", C: "45°", D: "60°" } },
                { id: "q59", text: "How many revolutions per minute a wheel of radius 14 cm of a car will make to maintain a speed of 132 km/hour?", options: { A: "1250", B: "1500", C: "2500", D: "3000" } },
                { id: "q60", text: "A parallelogram circumscribing a circle is a:", options: { A: "Trapezium", B: "Rhombus", C: "Square", D: "Rectangle" } }
              ]
            },
            {
              title: "PYQ 2024 – English Passage and Vocabulary (Questions 61 to 68)",
              passages: [
                {
                  title: "Read the passage and answer Questions 61 to 64.",
                  text: "Man does not live by food alone. Whereas we can do for weeks without food, we cannot live without water longer than a couple of days. Water is vital to human health and fitness. Although it is not a nutrient as are carbohydrates, fats, proteins, vitamins and minerals, it, in fact, is a key nutrient as no life is possible without it. Water approximates 60 percent of the body weight of human adults. It is an excellent solvent—more substances are soluble in water than in any other liquid known so far. This makes it an ideal constituent of the body fluids which sustain life supporting chemical reactions. It dissolves varied products of digestion and transports them to the rest of the body. Similarly, it dissolves diverse metabolic wastes and helps drain them out of the body. Besides, role of water in distributing the body heat efficiently, thereby regulating body's temperature is vital. Water accomplishes this role ideally because it has high thermal conductivity ensuring rapid heat transfer from one part to the other. Drinking a lot of water is an inexpensive way to stay healthy. Even excess of water is harmless. Drinking a litre of water, the first thing that we do in the morning, is kidney-friendly."
                }
              ],
              questions: [
                { id: "q61", text: "Why is water called a key nutrient?", options: { A: "It dissolves different products of digestion", B: "No life is possible without it", C: "It carries products to the rest of the body", D: "It raises temperature of the body" } },
                { id: "q62", text: "Which of the following statements is not true?", options: { A: "Water regulates body temperature", B: "Excess water is not harmful", C: "Excess water is not harmless", D: "Water transports nutrients to the body" } },
                { id: "q63", text: "Water is an ideal constituent of the body fluids because:", options: { A: "It is an excellent solvent", B: "It dissolves metabolic wastes", C: "It drains wastes out of the body", D: "It is kidney-friendly" } },
                { id: "q64", text: "What is the vital role of water in human body?", options: { A: "To sustain life supporting chemical reactions", B: "To dissolve wastes", C: "To regulate body's temperature", D: "To regulate excretion of urine" } },
                { id: "q65", text: "The word which means the same as 'excellent' is:", options: { A: "Terrible", B: "Worthless", C: "Insignificant", D: "Extremely good" } },
                { id: "q66", text: "The word opposite in meaning to natural is:", options: { A: "Innocent", B: "Real", C: "Artificial", D: "Simple" } },
                { id: "q67", text: "Study of the relation between the organism and their environment is:", options: { A: "Demography", B: "Ecology", C: "Entomology", D: "Genetics" } },
                { id: "q68", text: "People ______ live in glass houses should not throw stones at others. Pick out the correct word to complete the sentence.", options: { A: "which", B: "whom", C: "those", D: "who" } }
              ]
            },
            {
              title: "PYQ 2024 – English, GK and Education (Questions 69 to 80)",
              questions: [
                { id: "q69", text: "Which of the following sentences is correct?", options: { A: "Lata sang sweetly in the concert last evening.", B: "Lata sang in the concert last evening sweetly.", C: "Lata sang last evening sweetly in the concert.", D: "Lata sang in the concert sweetly last evening." } },
                { id: "q70", text: "Identify the correct sentence:", options: { A: "Please advise me what shall I do with this money.", B: "Please advise me how shall I pay back your money.", C: "Please tell me when we shall meet again.", D: "Please inform me where can I get the book." } },
                { id: "q71", text: "Which of the following is used in the common TV remote control?", options: { A: "Ultrasonic wave", B: "LASER wave", C: "Radio wave", D: "Infrared wave" } },
                { id: "q72", text: "Which of the following is the largest organ in the human body?", options: { A: "Lungs", B: "Skin", C: "Brain", D: "Large intestine" } },
                { id: "q73", text: "Most significant events in a Political System are caused by:", options: { A: "Institutional factors alone", B: "Individual Politicians", C: "Political Groupings", D: "The interaction of several different factors" } },
                { id: "q74", text: "What is the proposed new name for the Legal Code for India, replacing Indian Penal Code (IPC)?", options: { A: "Bharatiya Nyaya Sanhita", B: "Indian Nyaya Sanhita", C: "Nava Bharat Sanhita", D: "Bharat Penal Code" } },
                { id: "q75", text: "Who is the present Speaker of Lok Sabha?", options: { A: "Om Birla", B: "Kodikunnil Suresh", C: "Bhartruhari Mahtab", D: "Jagdeep Dhankhar" } },
                { id: "q76", text: "Which of the following countries is not a member of ASEAN?", options: { A: "Indonesia", B: "Vietnam", C: "India", D: "Thailand" } },
                { id: "q77", text: "Which of the following Articles of the Indian Constitution makes education a Fundamental Right?", options: { A: "Article 20", B: "Article 21", C: "Article 21A", D: "Article 45" } },
                { id: "q78", text: "'Education and National Development' is the title of the report of:", options: { A: "Indian Education Commission, 1882–83", B: "University Education Commission, 1948–49", C: "Secondary Education Commission, 1952–53", D: "Education Commission, 1964–66" } },
                { id: "q79", text: "R.C.F.C.E Act, 2009 is primarily meant for the children in the age group of:", options: { A: "3–6 years", B: "6–11 years", C: "6–14 years", D: "8–16 years" } },
                { id: "q80", text: "'Operation Blackboard', a programme to equip all primary schools in the country with minimum required facilities, was recommended by:", options: { A: "NPE, 1968", B: "NPE, 1986", C: "NCF, 2005", D: "RTE, 2009" } }
              ]
            },
            {
              title: "PYQ 2024 – Education, Reasoning and Teaching Aptitude (Questions 81 to 90)",
              questions: [
                { id: "q81", text: "How many minutes before 12 noon is it when it is 27 minutes past 10 A.M.?", options: { A: "30", B: "43", C: "49", D: "94" } },
                { id: "q82", text: "People in the South have observed that heavy frosts usually precede by a full moon. They are convinced that the full moon somehow generates the frost. Which of the following, if true, would weaken the people's conviction?", options: { A: "The temperature must fall below 10 degrees Celsius (50 degrees Fahrenheit) for frost to occur.", B: "Absence of a cloud cover cools the ground which causes frost.", C: "People are superstitious.", D: "People are not experts in meteorology." } },
                { id: "q83", text: "If A × B implies A² + B², A/B implies A² − B², AΣB implies (A + B)², A□B implies (A − B)², calculate the value of 373 ⊗ (M 4 3).", options: { A: "1600", B: "900", C: "400", D: "2500" } },
                { id: "q84", text: "Arvind said, 'This girl is the sister of the grandson of my mother.' How is this girl related to Arvind?", options: { A: "Daughter", B: "Niece", C: "Sister", D: "Cousin" } },
                { id: "q85", text: "Which of the following cannot be a number of the series ..., 64, 125, 216, 343, 512, ... ?", options: { A: "8", B: "729", C: "27", D: "999" } },
                { id: "q86", text: "A, B, C, D and E are five different smaller integers. When written in ascending order of values, the difference between any two adjacent integers is 4. 'D' is the greatest and 'A' is the least. B is greater than E but less than C. The sum of the integers is equal to E. What is the positive difference between the lowest and the highest integer?", options: { A: "8", B: "6", C: "16", D: "18" } },
                { id: "q87", text: "At the birthday party of Anil, a baby boy, 40 persons chose to kiss him and 25 chose to shake hands with him. 10 persons chose to both kiss him and shake hands with him. How many persons turned out at the party?", options: { A: "35", B: "70", C: "55", D: "25" } },
                { id: "q88", text: "In 1980, U.P. earned Rs. 17 million in tourist revenue. By 1990, tourist revenue doubled and in 2000, it reached the sum of Rs. 132 million. Each of the following, if true, may explain the trend in tourist revenue except:", options: { A: "The number of tourists has increased from 1940 to 1980.", B: "Average expenditure per tourist has increased.", C: "Average stay per tourist has increased.", D: "The number of total hotel rooms has increased." } },
                { id: "q89", text: "My next door neighbour lies a lot. In fact, he only tells the truth on one day a week. One day he told me, 'I lie on Mondays and on Tuesdays'. The next day he said, 'Today is either Thursday, Saturday or Sunday.' The next day he said, 'I lie on Wednesdays and Fridays.' On which day of a week does my neighbour tell the truth?", options: { A: "Monday", B: "Tuesday", C: "Wednesday", D: "Thursday" } },
                { id: "q90", text: "In a row of children, Bali is seventh from the left and Moti fourth from the right. When Bali and Moti exchange positions, Bali will be fifteenth from the left. What will be Moti's position from the right?", options: { A: "Eighth", B: "Fourth", C: "Eleventh", D: "Twelfth" } }
              ]
            },
            {
              title: "PYQ 2024 – Teaching Aptitude and Education (Questions 91 to 100)",
              questions: [
                { id: "q91", text: "All the teacher education colleges in Odisha are under the administrative control of:", options: { A: "SCERT, Odisha", B: "Directorate of Secondary Education", C: "Directorate of Higher Secondary Education", D: "Department of Higher Education" } },
                { id: "q92", text: "Teaching is best defined as:", options: { A: "Transferring knowledge from teachers to learners.", B: "Controlling learners in the classroom for timely progress and completion of the course.", C: "Facilitating learning.", D: "Lecturing and explaining." } },
                { id: "q93", text: "Who said, 'The destiny of India is being shaped in her classrooms'?", options: { A: "Report of the Education Commission, 1964–66", B: "NPE, 1968", C: "NPE, 1986", D: "NPE, 2020" } },
                { id: "q94", text: "SAMS is an integrated portal which provides a common platform for admission into various courses across Odisha through e-admission and also several e-Services to students. What is the full expansion of SAMS?", options: { A: "Students Admission Management System", B: "Student Academic Management System", C: "Student Academic Monitoring System", D: "Students Admission Monitoring System" } },
                { id: "q95", text: "According to NEP-2020, which of the following age groups corresponds to the foundational stage?", options: { A: "3–8 years", B: "8–11 years", C: "11–14 years", D: "14–18 years" } },
                { id: "q96", text: "Which of the following is not a function of educational aims?", options: { A: "Providing direction to learning activities.", B: "Provide adequate resources to schools.", C: "Setting standards for evaluation of learning outcomes.", D: "Creating and sustaining learners' motivation." } },
                { id: "q97", text: "Which of the following is the highest level of teaching?", options: { A: "Memory level", B: "Reflective level", C: "Understanding level", D: "None of the above" } },
                { id: "q98", text: "Bloom's taxonomy of educational objectives is:", options: { A: "A collection of teaching strategies.", B: "A classification of teaching skills.", C: "A classification of learning skills.", D: "A collection of hierarchical classification of educational objectives." } },
                { id: "q99", text: "________ is defined as relatively permanent change in behaviour.", options: { A: "Creativity", B: "Psychology", C: "Learning", D: "Attention" } },
                { id: "q100", text: "What is the expansion of CABE?", options: { A: "Central Academic Body for Education.", B: "Constitutional Amendment for Broader Education.", C: "Central Authority for Betterment of Education.", D: "Central Advisory Board of Education." } }
              ]
            }
          ] },
        {
          id: "pyq-2023",
          title: "PYQ 2023",
          description: "Official 2023 PYQ data added. Questions 1 to 100 are now complete.",
          timeInSeconds: 120 * 60,
          mode: "scored",
          status: "ready",
          sections: [
            {
              title: "PYQ 2023 – Physics (Questions 1 to 10)",
              questions: [
                { id: "q1", text: "The quantitative definition of force can be obtained from which of Newton's laws of motion?", options: { A: "1st law", B: "2nd law", C: "3rd law", D: "None of the laws" }, answer: "B" },
                { id: "q2", text: "A body of mass 5 kg moving with a velocity 2 m/s comes to rest within a distance of 6 m. The work done during the process is:", options: { A: "10 J", B: "15 J", C: "20 erg", D: "30 erg" }, answer: "A" },
                { id: "q3", text: "A Venturimeter works on the principle of:", options: { A: "Newton's law", B: "Joule's law", C: "Pascal's law", D: "Bernoulli's law" }, answer: "D" },
                { id: "q4", text: "In a dynamo the transformation of energy is:", options: { A: "From mechanical to electrical", B: "From electrical to mechanical", C: "From chemical to electrical", D: "From electrical to thermal" }, answer: "A" },
                { id: "q5", text: "Ohm's law is applicable to a:", options: { A: "Semiconductor", B: "Superconductor", C: "Metallic conductor", D: "Junction diode" }, answer: "C" },
                { id: "q6", text: "A body of mass 2 kg and electrical charge 5 C is moved through a potential difference of 6 V. The energy gained by the body is:", options: { A: "60 J", B: "30 J", C: "300 erg", D: "600 erg" }, answer: "B" },
                { id: "q7", text: "Lenz's law of electromagnetic induction is consistent with the conservation of:", options: { A: "Mass", B: "Charge", C: "Momentum", D: "Energy" }, answer: "D" },
                { id: "q8", text: "The velocity of sound in air at STP is nearly:", options: { A: "100 m/s", B: "300 m/s", C: "500 m/s", D: "800 m/s" }, answer: "B" },
                { id: "q9", text: "A particle of charge 1.5 Coulomb moves from a point A to a point B. If the work done on the particle is 30 Joule, the electric potential difference between points A and B is:", options: { A: "4.5 Volt", B: "20 Volt", C: "0.05 Volt", D: "45 Volt" }, answer: "B" },
                { id: "q10", text: "The focal length of a concave mirror is 12 cm. If an object is placed at a distance of 8 cm from the mirror, the image formed in the mirror is:", options: { A: "Virtual, inverted and diminished", B: "Virtual, erect and magnified", C: "Real, erect and magnified", D: "Real, inverted and diminished" }, answer: "D" }
              ]
            },
            {
              title: "PYQ 2023 – Chemistry and Biology (Questions 11 to 20)",
              questions: [
                { id: "q11", text: "What is the wave number of radiation whose wavelength is 2.5 μ?", options: { A: "2000 cm⁻¹", B: "4000 cm⁻¹", C: "1000 cm⁻¹", D: "3000 cm⁻¹" }, answer: "B" },
                { id: "q12", text: "The number of nodal planes in 3s orbital is:", options: { A: "0", B: "1", C: "2", D: "3" }, answer: "A" },
                { id: "q13", text: "1.0 g of CO₂ contains:", options: { A: "6.02 × 10²³ atoms of C", B: "6.02 × 10²³ atoms of O", C: "18.1 × 10²³ molecules of CO₂", D: "3 g-atom of CO₂" }, answer: "B" },
                { id: "q14", text: "The number of grams of H₂SO₄ present in 0.25 mole of H₂SO₄ is:", options: { A: "0.245", B: "2.45", C: "24.5", D: "49.0" }, answer: "D" },
                { id: "q15", text: "Which one of the following factors is the most important in making fluorine the strongest oxidising agent?", options: { A: "Electron affinity", B: "Ionisation enthalpy", C: "Bond dissociation energy", D: "Hydration enthalpy" }, answer: "A" },
                { id: "q16", text: "The weakest acid among the following is:", options: { A: "HI", B: "HBr", C: "HF", D: "HCl" }, answer: "A" },
                { id: "q17", text: "When xenon hexafluoride reacts with silica to form a Xenon compound 'X', the oxidation state of Xenon in 'X' is:", options: { A: "+2", B: "+4", C: "0", D: "+6" }, answer: "B" },
                { id: "q18", text: "KMnO₄ is used as:", options: { A: "Reducing agent and disinfectant", B: "Reducing agent and antiseptic", C: "Oxidising agent and disinfectant", D: "Oxidising agent and antiseptic" }, answer: "C" },
                { id: "q19", text: "The reaction between barium chloride and sodium sulphate goes to completion because:", options: { A: "Barium sulphate is almost insoluble", B: "The solubility of barium chloride decreases", C: "Lattice energy of barium sulphate is very high", D: "The reaction is irreversible in nature" }, answer: "C" },
                { id: "q20", text: "Which one of the following transition metal ions is diamagnetic?", options: { A: "Co²⁺", B: "Zn²⁺", C: "Ni²⁺", D: "Cu²⁺" }, answer: "C" }
              ]
            },
            {
              title: "PYQ 2023 – Biology and General Science (Questions 21 to 30)",
              questions: [
                { id: "q21", text: "Which of the following is responsible for modifying and packaging of proteins and lipids?", options: { A: "Mitochondria", B: "Golgi complex", C: "Endoplasmic reticulum", D: "Peroxisome" }, answer: "B" },
                { id: "q22", text: "Which of the following vitamins is not obtained from plants?", options: { A: "Thiamine", B: "Pyridoxin", C: "Cyanocobalamine", D: "Riboflavin" }, answer: "C" },
                { id: "q23", text: "In Pteridophytes, development of sporophyte from gametophytic tissue without involving gametic fusion is known as:", options: { A: "Apospory", B: "Parthenocarpy", C: "Heterospory", D: "Apogamy" }, answer: "D" },
                { id: "q24", text: "The fungus commonly known as Baker's Yeast is:", options: { A: "Saccharomyces octosporus", B: "Saccharomyces cerevisiae", C: "Saccharomyces ludwigii", D: "All of the above" }, answer: "B" },
                { id: "q25", text: "The plant commonly known as horse tail is:", options: { A: "Equisetum", B: "Marsilea", C: "Selaginella", D: "Pteris" }, answer: "A" },
                { id: "q26", text: "Which of the following is not an inexhaustible resource?", options: { A: "Sunlight", B: "Wind", C: "Tidal energy", D: "Coal" }, answer: "D" },
                { id: "q27", text: "Normally the endosperm in angiosperm is:", options: { A: "Diploid", B: "Haploid", C: "Triploid", D: "Hexaploid" }, answer: "C" },
                { id: "q28", text: "Which of the following is an essential fatty acid?", options: { A: "Palmitic acid", B: "Linoleic acid", C: "Acetic acid", D: "Citric acid" }, answer: "B" },
                { id: "q29", text: "The type of energy obtained from hot springs is:", options: { A: "Geothermal energy", B: "Solar energy", C: "Tidal energy", D: "Hydro energy" }, answer: "A" },
                { id: "q30", text: "Which of the following is not a viral disease?", options: { A: "Measles", B: "Hepatitis", C: "Rubella", D: "Leprosy" }, answer: "D" }
              ]
            },
            {
              title: "PYQ 2023 – Biology and General Science (Questions 31 to 40)",
              questions: [
                { id: "q31", text: "Zooplanktons are:", options: { A: "Producers", B: "Primary consumers", C: "Secondary consumers", D: "Decomposers" }, answer: "B" },
                { id: "q32", text: "Which of the following is a non-symbiotic nitrogen fixing aerobic bacteria?", options: { A: "Clostridium", B: "Frankia", C: "Azotobacter", D: "Rhizobium" }, answer: "C" },
                { id: "q33", text: "Minamata disease was caused in Japan due to the poisoning of:", options: { A: "Arsenic", B: "Nickel", C: "Lead", D: "Mercury" }, answer: "D" },
                { id: "q34", text: "How many teeth grow only once in the life of a human being?", options: { A: "8", B: "12", C: "20", D: "32" }, answer: "B" },
                { id: "q35", text: "Which is not a part of alimentary canal?", options: { A: "Jejunum", B: "Ilium", C: "Gizzard", D: "Crop" }, answer: "B" },
                { id: "q36", text: "Deficiency of which hormone causes diuresis?", options: { A: "Oxytocin", B: "Relaxin", C: "Renin", D: "Vasopressin" }, answer: "D" },
                { id: "q37", text: "The clinical term for severe frequent cramping during menstruation is:", options: { A: "Amenorrhea", B: "Menorrhagia", C: "Oligomenorrhea", D: "Dysmenorrhea" }, answer: "D" },
                { id: "q38", text: "The coating of fine hairs on the body of human foetus is called:", options: { A: "Lanugo", B: "Fur", C: "Scutes", D: "Vernix" }, answer: "A" },
                { id: "q39", text: "During inspiration in mammals, the diaphragm:", options: { A: "Expands", B: "Contracts", C: "Relaxes", D: "Shows no change" }, answer: "B" },
                { id: "q40", text: "The statement 'Eating on the same table' is true for:", options: { A: "Amensalism", B: "Mutualism", C: "Parasitism", D: "Commensalism" }, answer: "D" }
              ]
            },
            {
              title: "PYQ 2023 – Mathematics and Reasoning (Questions 41 to 50)",
              questions: [
                { id: "q41", text: "A rational number p/q (q ≠ 0) can be expressed as a terminating decimal if the prime factorization of q is of the form:", options: { A: "2^m 3^n (m and n are non-negative integers)", B: "2^m 5^n (m and n are non-negative integers)", C: "3^m 5^n (m and n are non-negative integers)", D: "5^m 7^n (m and n are non-negative integers)" }, answer: "B" },
                { id: "q42", text: "The sum of two numbers is 1365. On dividing the larger number by the smaller, we get 4 as quotient and 15 as the remainder. Which one of the following is the smaller number?", options: { A: "360", B: "295", C: "270", D: "240" }, answer: "C" },
                { id: "q43", text: "What is the number of proper subsets of the set P ∪ Q, where P = {1, 2, 5, 7} and Q = {2, 4, 6}?", options: { A: "31", B: "63", C: "64", D: "127" }, answer: "B" },
                { id: "q44", text: "If set P contains 5 elements and set Q contains 6 elements, then what is the number of one-one onto functions from P to Q?", options: { A: "720", B: "120", C: "30", D: "0" }, answer: "D" },
                { id: "q45", text: "How many equivalence relations can be defined on the set S = {1, 2, 3}?", options: { A: "3", B: "5", C: "7", D: "8" }, answer: "B" },
                { id: "q46", text: "Akash, Dinesh and Ramesh became partners in a business by investing money in the ratio 3 : 6 : 8. If their investments are increased by 5%, 15% and 20% respectively, then what will be the ratio of their profits in one year?", options: { A: "7 : 46 : 64", B: "19 : 46 : 64", C: "21 : 46 : 64", D: "35 : 46 : 64" }, answer: "C" },
                { id: "q47", text: "In a bag there are coins of 5 paise, 10 paise and 25 paise in the ratio 3 : 2 : 1. If all the coins in the bag amount to Rs. 60, then how many 5 paise coins are there?", options: { A: "100", B: "200", C: "300", D: "400" }, answer: "C" },
                { id: "q48", text: "If logₓ y = 100 and log₂ x = 10, then what is the value of y?", options: { A: "2", B: "2^10", C: "2^100", D: "2^1000" }, answer: "D" },
                { id: "q49", text: "What is the value of (256)^0.16 × (256)^0.09 ?", options: { A: "256.25", B: "64", C: "16", D: "4" }, answer: "D" },
                { id: "q50", text: "If tan θ = 3/4 for some θ (0 < θ < 90°), then what is the value of sin θ?", options: { A: "1/5", B: "2/5", C: "3/5", D: "4/5" }, answer: "C" }
              ]
            },
            {
              title: "PYQ 2023 – Mathematics and Passage (Questions 51 to 60)",
              questions: [
                { id: "q51", text: "If log₃(x⁴ − x³) − log₃(x − 1) = 3, then what is the value of x?", options: { A: "9", B: "6", C: "3", D: "1" }, answer: "C" },
                { id: "q52", text: "What is the value of the expression sin²(1°) + sin²(11°) + sin²(21°) + sin²(31°) + sin²(41°) + sin²(45°) + sin²(49°) + sin²(59°) + sin²(69°) + sin²(79°) + sin²(89°)?", options: { A: "4", B: "4½", C: "5", D: "5½" }, answer: "D" },
                { id: "q53", text: "If S is the set of all distinct numbers of the form p/q, where p, q ∈ {1, 2, 3, 4, 5, 6}, then what is the total number of elements in S?", options: { A: "21", B: "23", C: "32", D: "36" }, answer: "B" },
                { id: "q54", text: "The angle of elevation of a ladder leaning against a wall is 60°. If the foot of the ladder is 4.6 m away from the wall, then what is the length of the ladder?", options: { A: "2.3 m", B: "4.7 m", C: "7.8 m", D: "9.2 m" }, answer: "D" },
                { id: "q55", text: "If one of the roots of the equation 3x² + px + 3 = 0 (p > 0) is the square of the other root, then what is the value of p?", options: { A: "3", B: "1", C: "2/3", D: "1/3" }, answer: "A" },
                { id: "q56", text: "What is the remainder when the polynomial x²⁰⁰ + 1 is divided by x² + 1?", options: { A: "x² − 1", B: "2x + 1", C: "2", D: "−1" }, answer: "C" },
                { id: "q57", text: "If the system of linear equations 5x + my = 10 and 4x + ny = 8 (m, n are positive integers) have infinitely many solutions, then the minimum possible value of (m + n) is:", options: { A: "11", B: "9", C: "7", D: "5" }, answer: "B" },
                { id: "q58", text: "A wire is bent to form a square of side 22 cm. If the wire is rebent to form a circle, then its radius will be ?", options: { A: "22 cm", B: "14 cm", C: "11 cm", D: "7 cm" }, answer: "B" },
                { id: "q59", text: "Which one of the following is an obtuse angle?", options: { A: "11/21 of a right angle", B: "8/20 of a complete rotation", C: "11/21 of a complete rotation", D: "8/20 of a right angle" }, answer: "B" },
                { id: "q60", text: "PQR is a right angled triangle right angled at Q with PQ = 6 cm and QR = 8 cm. What is the radius of the circle with center at O inscribed inside the triangle PQR?", options: { A: "4 cm", B: "3 cm", C: "2 cm", D: "1 cm" }, answer: "C" }
              ]
            },
            {
              title: "PYQ 2023 – English Passage and Vocabulary (Questions 61 to 70)",
              passages: [
                {
                  title: "Read the passage and answer Questions 61 to 64.",
                  text: "These days our world seems to be in the grip of speed. Everyone is in a great hurry to reach somewhere; God knows where. Out on the roads, fast moving vehicles are driven faster; pedestrians also appear to be running instead of walking. People queue up no more; they push their way through the crowd, injuring or hurting women, old people or even small children. Doctors, lawyers, and even shopkeepers are in such a hurry that they have no time to listen to anyone patiently. People have no time even to have their food peacefully at home and so 'superfast' food joints have sprung up. No surprise that not so many suffer from hypertension or heart diseases. Even nature seems to have joined this race. Years, months, weeks and days seem simply to fly away as if to take mankind faster to the new Century promising a brighter and happier era."
                }
              ],
              questions: [
                { id: "q61", text: "Who don't care for others while walking through the crowd?", options: { A: "Small children", B: "Old men", C: "Young women", D: "Hasty people" }, answer: "D" },
                { id: "q62", text: "How do pedestrians look like on the road?", options: { A: "Walking", B: "Jogging", C: "Running", D: "Gliding" }, answer: "C" },
                { id: "q63", text: "Why have 'superfast' foods become popular?", options: { A: "People have no time to have their food peacefully at home", B: "People have no time to cook food", C: "People don't want to cook food", D: "People don't like food cooked at home" }, answer: "A" },
                { id: "q64", text: "What, according to the author, does the new Century seem to promise?", options: { A: 'A life of comfort', B: 'An era of hypertension or heart diseases', C: 'A brighter and happier time', D: 'Long and noble life' }, answer: "C" },
                { id: "q65", text: "The word which means the same as peaceful is:", options: { A: "Noisy", B: "Wild", C: "Restless", D: "Calm" }, answer: "D" },
                { id: "q66", text: "The word opposite in meaning to 'Bold' is:", options: { A: "Brave", B: "Daring", C: "Timid", D: "Fatal" }, answer: "C" },
                { id: "q67", text: "One who cannot read and write is:", options: { A: "Illegible", B: "Illiterate", C: "Illegal", D: "Illicit" }, answer: "B" },
                { id: "q68", text: "One should do ______ duty sincerely. Pick out the correct word to complete the sentence:", options: { A: "his", B: "her", C: "their", D: "one's" }, answer: "D" },
                { id: "q69", text: "As soon as the siren blew, the firemen dashed towards their vehicle. This sentence can be rewritten using 'No sooner' as:", options: { A: "No sooner the siren blew, the firemen dashed towards their vehicle.", B: "No sooner the siren blew than the firemen dashed towards their vehicle.", C: "No sooner did the siren blow than the firemen dashed towards their vehicle.", D: "No sooner than the siren blew, the firemen dashed towards their vehicle." }, answer: "C" },
                { id: "q70", text: "The workers are not to be blamed for the loss. The supervisor is also not to be blamed for the loss. Combining these two sentences using 'Neither ... nor' we get:", options: { A: "Neither the workers nor the supervisor is blamed for the loss.", B: "Neither the workers nor the supervisor is to be blamed for the loss.", C: "Neither the workers nor the supervisor are to be blamed for the loss.", D: "Neither the workers and nor the supervisor are blamed for the loss." }, answer: "B" }
              ]
            },
            {
              title: "PYQ 2023 – GK and Education (Questions 71 to 80)",
              questions: [
                { id: "q71", text: "The 'Origin of Life' book was written by:", options: { A: "Charles Darwin", B: "A. I. Oparin", C: "G. J. Mendel", D: "Louis Pasteur" }, answer: "B" },
                { id: "q72", text: "World Malaria Day is observed on:", options: { A: "25th January", B: "25th March", C: "25th April", D: "1st December" }, answer: "C" },
                { id: "q73", text: "In terms of event and year of occurrence identify the wrong pair:", options: { A: "Foundation of C.S.I.R. : 1942", B: "Demonetisation of Indian currency notes : 2015", C: "Implementation of G.S.T. : 2017", D: "Removal of Article 370 : 2019" }, answer: "B" },
                { id: "q74", text: "Name the Union Minister for Science and Technology is:", options: { A: "Aswini Vaishnaw", B: "Nitin Gadkari", C: "Jitendra Singh", D: "Piyush Goyal" }, answer: "C" },
                { id: "q75", text: "On which day the Constituent Assembly commenced its functioning?", options: { A: "9th December, 1946", B: "26th January, 1947", C: "15th August, 1947", D: "9th December, 1947" }, answer: "A" },
                { id: "q76", text: "Which country is not a part of Troika of G-20 Summit to be held in 2023?", options: { A: "Brazil", B: "Indonesia", C: "India", D: "Italy" }, answer: "D" },
                { id: "q77", text: "In which of the following cities is NAAC situated?", options: { A: "New Delhi", B: "Bangalore", C: "Mumbai", D: "Kolkata" }, answer: "B" },
                { id: "q78", text: "Who was associated with laying down minimum levels of learning at elementary stage?", options: { A: "Prof. R. H. Dave", B: "Prof. Yashpal", C: "Prof. Ved Prakash", D: "Acharya Ramamurthy" }, answer: "A" },
                { id: "q79", text: "Which of the following Commissions recommended for establishment of U.G.C. in India?", options: { A: "Indian University Commission (1902)", B: "Calcutta University Commission (1917)", C: "University Education Commission (1948-49)", D: "Mudaliar Commission (1952-53)" }, answer: "C" },
                { id: "q80", text: "The middle stage of education as per N.E.P. 2020 covers which age group of students?", options: { A: "Ages 8 to 10", B: "Ages 9 to 11", C: "Ages 10 to 12", D: "Ages 11 to 14" }, answer: "D" }
              ]
            },
            {
              title: "PYQ 2023 – Reasoning and Arithmetic (Questions 81 to 90)",
              questions: [
                { id: "q81", text: "If the sequence of the letters in English alphabet is reversed, which letter would be the 10th letter after the 5th letter from right?", options: { A: "M", B: "L", C: "K", D: "N" }, answer: "B" },
                { id: "q82", text: "If 'CAT' and 'BOAT' are written as 'XZG' and 'YLZG' respectively in a code language, how is 'EGG' to be written in the same language?", options: { A: "VSS", B: "URR", C: "VTT", D: "UFF" }, answer: "C" },
                { id: "q83", text: "Statement: 'Nudity be shown in Indian films.' Arguments: (a) It is being shown all over the world. (b) It will damage the moral fibre of Indian society. Choose the correct answer.", options: { A: "Only argument (a) is strong", B: "Only argument (b) is strong", C: "Neither argument (a) nor (b) is strong", D: "Both arguments (a) and (b) are strong" }, answer: "B" },
                { id: "q84", text: "Naga is taller than Puspa, but not as tall as Manu. Rama is taller than Nita, but not as tall as Puspa. Who among them is tallest?", options: { A: "Manu", B: "Puspa", C: "Naga", D: "Rama" }, answer: "A" },
                { id: "q85", text: "Indra is 7th from the left and Jaya is 5th from the right. When they interchange their positions, Jaya becomes 19th from the right. What is Indra’s position from left?", options: { A: "21st", B: "19th", C: "20th", D: "23rd" }, answer: "C" },
                { id: "q86", text: "If 'BAT' is coded as 283, 'CAT' is coded as 383, 'ARE' is coded as 801, then the code for 'BETTER' is:", options: { A: "2133101", B: "213301", C: "012334", D: "123301" }, answer: "A" },
                { id: "q87", text: "If selling price is doubled, the profit triples. Find the profit percent.", options: { A: "66.6", B: "100", C: "105.3", D: "120" }, answer: "B" },
                { id: "q88", text: "If the 7th day of a month is 3 days earlier than Friday, what day will it be on the 19th day of the month?", options: { A: "Sunday", B: "Monday", C: "Wednesday", D: "Friday" }, answer: "A" },
                { id: "q89", text: "In how many ways can you post 3 letters in 4 letter boxes?", options: { A: "64", B: "68", C: "81", D: "12" }, answer: "B" },
                { id: "q90", text: "What least number must be added to 1056 so that the sum is completely divisible by 2, 3 and 5?", options: { A: "24", B: "18", C: "48", D: "56" }, answer: "A" }
              ]
            },
            {
              title: "PYQ 2023 – Teaching Aptitude and Education (Questions 91 to 100)",
              questions: [
                { id: "q91", text: "Development of which of the following abilities in human beings is facilitated by brainstorming?", options: { A: "Positive thinking", B: "Divergent thinking", C: "Convergent thinking", D: "Active thinking" }, answer: "B" },
                { id: "q92", text: "An explanation involves giving:", options: { A: "Antecedents to a subsequent", B: "Consequences to an antecedent", C: "Antecedents to a consequence", D: "Consequences to a subsequent" }, answer: "C" },
                { id: "q93", text: "A student is solving a problem in Mathematics. What is he/she contributing to?", options: { A: "Affective learning", B: "Cognitive learning", C: "Conative learning", D: "Psychomotor learning" }, answer: "B" },
                { id: "q94", text: "Which of the following is not a characteristic of teaching profession?", options: { A: "Social service", B: "Skills", C: "Authority", D: "Organization" }, answer: "C" },
                { id: "q95", text: "Which strategy is best applicable for teaching 'skill of asking questions to students'?", options: { A: "Personalized system of instruction", B: "Programmed instruction", C: "Simulation", D: "Microteaching" }, answer: "D" },
                { id: "q96", text: "Student-centric classroom is meant for:", options: { A: "Addressing individual differences", B: "Engaging the students of the entire class", C: "Helping students to recall their previous knowledge", D: "Reducing the teacher-oriented lectures" }, answer: "A" },
                { id: "q97", text: "During presentation in a classroom, a teacher gives a lot of positive and negative examples. This is related to which level of learning?", options: { A: "Reflective level", B: "Understanding level", C: "Memory level", D: "Autonomous development level" }, answer: "B" },
                { id: "q98", text: "Suppose you are teaching a topic in the class and a student asks a question unrelated to the topic. What will you do?", options: { A: "You will encourage him to ask such questions to develop fearlessness in the student", B: "You will disallow him to ask such questions so as to save time for discussion on topic related questions", C: "You will consider it as a case of indiscipline and report it to his/her parents", D: "You will answer the question after the class" }, answer: "D" },
                { id: "q99", text: "'Spare the rod and spoil the child' gives the message that:", options: { A: "Undesirable behaviour should be punished", B: "The teacher is friendly to the students", C: "It is an activity-centred class", D: "There is more freedom and flexibility in classroom teaching" }, answer: "A" },
                { id: "q100", text: "C.I.E.T. stands for:", options: { A: "Centre for Integrated Education and Technology", B: "Central Institute of Engineering and Technology", C: "Central Institute of Educational Technology", D: "Centre for Integrated Evaluation Techniques" }, answer: "C" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-practice",
      title: "Section-wise Practice",
      description: "English, reasoning, science subjects, teaching aptitude and more.",
      items: [
        { id: "english-practice", title: "English Practice", description: "Add section-wise English questions later.", timeInSeconds: 0, mode: "practice", status: "coming_soon", sections: [] },
        { id: "reasoning-practice", title: "Reasoning Practice", description: "Add section-wise reasoning questions later.", timeInSeconds: 0, mode: "practice", status: "coming_soon", sections: [] },
        { id: "science-practice", title: "Science Practice", description: "Add Physics, Chemistry, Biology and Math sets later.", timeInSeconds: 0, mode: "practice", status: "coming_soon", sections: [] }
      ]
    },
    {
      id: "formula-recap",
      title: "Formula Recap",
      description: "Quick revision section for formulas and short facts.",
      items: [
        { id: "formula-physics", title: "Physics Formula Recap", description: "Add your quick formula sheet later.", timeInSeconds: 0, mode: "practice", status: "coming_soon", sections: [] },
        { id: "formula-math", title: "Math Formula Recap", description: "Add your quick formula sheet later.", timeInSeconds: 0, mode: "practice", status: "coming_soon", sections: [] }
      ]
    }
  ]
};
