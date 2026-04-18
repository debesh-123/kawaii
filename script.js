const categorySelection = document.getElementById("categorySelection");
const categoryGrid = document.getElementById("categoryGrid");
const setSelection = document.getElementById("setSelection");
const setSelectionTitle = document.getElementById("setSelectionTitle");
const setSelectionNote = document.getElementById("setSelectionNote");
const setGrid = document.getElementById("setGrid");
const quizScreen = document.getElementById("quizScreen");
const quizForm = document.getElementById("quizForm");
const submitArea = document.getElementById("submitArea");
const resultBox = document.getElementById("result");
const timerDisplay = document.getElementById("timer");
const currentSetTitle = document.getElementById("currentSetTitle");
const currentSetDescription = document.getElementById("currentSetDescription");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const backBtn = document.getElementById("backBtn");
const backToCategoriesBtn = document.getElementById("backToCategoriesBtn");
const paletteWrapper = document.getElementById("paletteWrapper");
const questionPalette = document.getElementById("questionPalette");
const sectionNav = document.getElementById("sectionNav");

let activeCategoryId = null;
let activeSet = null;
let timerInterval = null;
let totalTime = 0;
let timeLeft = 0;
let testStarted = false;
let visitedQuestions = new Set();
let currentQuestionId = null;


function updateAppMode(mode) {
  document.body.classList.remove("menu-mode", "exam-mode");
  document.body.classList.add(mode === "exam" ? "exam-mode" : "menu-mode");
}

function getCategoryById(categoryId) {
  return QUIZ_LIBRARY.categories.find((category) => category.id === categoryId) || null;
}

function getSetById(categoryId, setId) {
  const category = getCategoryById(categoryId);
  return category ? category.items.find((item) => item.id === setId) || null : null;
}

function getAllQuestions(setData) {
  return (setData.sections || []).flatMap((section) => section.questions || []);
}

function formatDuration(seconds) {
  if (!seconds) return "No timer";
  const minutes = Math.floor(seconds / 60);
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
  return `${minutes} min`;
}

function renderCategoryCards() {
  categoryGrid.innerHTML = "";

  QUIZ_LIBRARY.categories.forEach((category) => {
    const card = document.createElement("div");
    card.className = "category-card";

    const totalCount = category.items.length;
    const readyCount = category.items.filter((item) => item.status === "ready").length;

    card.innerHTML = `
      <h3>${category.title}</h3>
      <p>${category.description}</p>
      <div class="card-tag-row">
        <span class="card-tag">${totalCount} item${totalCount === 1 ? "" : "s"}</span>
        <span class="card-tag muted-tag">${readyCount} ready</span>
      </div>
      <button type="button">Open ${category.title}</button>
    `;

    card.querySelector("button").addEventListener("click", () => openCategory(category.id));
    categoryGrid.appendChild(card);
  });
}

function openCategory(categoryId) {
  const category = getCategoryById(categoryId);
  if (!category) return;

  activeCategoryId = categoryId;
  setSelectionTitle.textContent = category.title;
  setSelectionNote.textContent = category.description;
  renderSetCards(category);

  categorySelection.classList.add("hidden");
  quizScreen.classList.add("hidden");
  setSelection.classList.remove("hidden");
  updateAppMode("menu");
}

function renderSetCards(category) {
  setGrid.innerHTML = "";

  category.items.forEach((setData) => {
    const card = document.createElement("div");
    card.className = "set-card";

    const totalQuestions = getAllQuestions(setData).length;
    const modeLabel = setData.mode === "practice" ? "Practice Only" : "Scored Test";
    const statusLabel = setData.status === "ready" ? "Ready" : "Coming Soon";

    card.innerHTML = `
      <h3>${setData.title}</h3>
      <p>${setData.description}</p>
      <div class="card-tag-row">
        <span class="card-tag">${modeLabel}</span>
        <span class="card-tag muted-tag">${statusLabel}</span>
      </div>
      <p><strong>Questions:</strong> ${totalQuestions || "Not added yet"}</p>
      <p><strong>Timer:</strong> ${formatDuration(setData.timeInSeconds)}</p>
      <button type="button">${setData.status === "ready" ? "Open Test" : "Open Info"}</button>
    `;

    const button = card.querySelector("button");
    if (setData.status === "ready") {
      button.addEventListener("click", () => openSet(activeCategoryId, setData.id));
    } else {
      button.addEventListener("click", () => showInfoScreen(setData));
    }

    setGrid.appendChild(card);
  });
}

function showInfoScreen(setData) {
  activeSet = null;
  testStarted = false;
  clearInterval(timerInterval);

  currentSetTitle.textContent = setData.title;
  currentSetDescription.textContent = setData.description;
  timerDisplay.textContent = setData.timeInSeconds ? formatTime(setData.timeInSeconds) : "--:--";

  quizForm.classList.add("hidden");
  submitArea.classList.add("hidden");
  paletteWrapper.classList.add("hidden");
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <div class="info-box">
      <h2>${setData.title}</h2>
      <p>This section is visible now, but the actual question data has not been entered yet.</p>
      <p><strong>Mode:</strong> ${setData.mode === "practice" ? "Practice only" : "Scored test"}</p>
      <p><strong>Next step:</strong> send the questions for this part and it can be added without changing the full site again.</p>
    </div>
  `;

  startBtn.disabled = true;
  submitBtn.disabled = true;
  resetBtn.disabled = true;

  setSelection.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  updateAppMode("exam");
}

function openSet(categoryId, setId) {
  activeSet = getSetById(categoryId, setId);
  if (!activeSet) return;

  totalTime = activeSet.timeInSeconds || 0;
  timeLeft = totalTime;
  testStarted = false;
  visitedQuestions = new Set();
  currentQuestionId = null;

  currentSetTitle.textContent = activeSet.title;
  currentSetDescription.textContent = activeSet.description;
  submitBtn.textContent = activeSet.mode === "practice" ? "Finish Practice" : "Submit Test";

  renderQuiz(activeSet);
  renderPalette(activeSet);
  renderSectionNav(activeSet);
  attachAnswerListeners();
  resetQuizStateOnly();

  setSelection.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  updateAppMode("exam");
}

function renderQuiz(setData) {
  quizForm.innerHTML = "";

  setData.sections.forEach((section) => {
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = section.title;
    sectionTitle.dataset.sectionId = makeSectionId(section.title);
    quizForm.appendChild(sectionTitle);

    (section.passages || []).forEach((passage) => {
      const passageBox = document.createElement("div");
      passageBox.className = "passage-box";
      passageBox.innerHTML = `<h3>${passage.title}</h3><p>${passage.text}</p>`;
      quizForm.appendChild(passageBox);
    });

    (section.questions || []).forEach((question) => {
      const questionBlock = document.createElement("div");
      questionBlock.className = "question-block";
      questionBlock.dataset.questionId = question.id;

      const optionsHtml = Object.entries(question.options)
        .map(([key, value]) => `
          <label class="option">
            <input type="radio" name="${question.id}" value="${key}" />
            ${key}. ${value}
          </label>
        `)
        .join("");

      questionBlock.innerHTML = `
        <p class="question">${question.id.replace("q", "")}. ${question.text}</p>
        ${optionsHtml}
      `;
      quizForm.appendChild(questionBlock);
    });
  });
}

function renderPalette(setData) {
  questionPalette.innerHTML = "";

  setData.sections.forEach((section) => {
    const group = document.createElement("div");
    group.className = "palette-section-group";

    const heading = document.createElement("div");
    heading.className = "palette-section-heading";
    heading.textContent = section.title;

    const grid = document.createElement("div");
    grid.className = "question-palette-grid";

    (section.questions || []).forEach((question) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "palette-btn not-visited";
      btn.textContent = question.id.replace("q", "");
      btn.dataset.questionId = question.id;
      grid.appendChild(btn);
    });

    group.appendChild(heading);
    group.appendChild(grid);
    questionPalette.appendChild(group);
  });

  updatePaletteStates();
}

function renderSectionNav(setData) {
  sectionNav.innerHTML = "";

  setData.sections.forEach((section) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "section-nav-btn";
    btn.textContent = section.title;
    btn.dataset.sectionId = makeSectionId(section.title);
    sectionNav.appendChild(btn);
  });
}

function makeSectionId(sectionTitle) {
  return `section-${sectionTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function getQuestionBlock(questionId) {
  return document.querySelector(`.question-block[data-question-id="${questionId}"]`);
}

function getSectionBlock(sectionId) {
  return document.querySelector(`.section-title[data-section-id="${sectionId}"]`);
}

function jumpToQuestion(questionId) {
  const block = getQuestionBlock(questionId);
  if (!block) return;
  highlightActiveQuestion(questionId);
  const top = block.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top: top > 0 ? top : 0, behavior: "smooth" });
}

function jumpToSection(sectionId) {
  const block = getSectionBlock(sectionId);
  if (!block) return;
  setActiveSectionButton(sectionId);
  const top = block.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top: top > 0 ? top : 0, behavior: "smooth" });
}

questionPalette.addEventListener("click", (event) => {
  const btn = event.target.closest(".palette-btn");
  if (!btn || !testStarted) return;
  const questionId = btn.dataset.questionId;
  visitedQuestions.add(questionId);
  currentQuestionId = questionId;
  updatePaletteStates();
  jumpToQuestion(questionId);
});

sectionNav.addEventListener("click", (event) => {
  const btn = event.target.closest(".section-nav-btn");
  if (!btn || !testStarted) return;
  const sectionId = btn.dataset.sectionId;
  jumpToSection(sectionId);
});

function attachAnswerListeners() {
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", () => {
      visitedQuestions.add(input.name);
      currentQuestionId = input.name;
      updatePaletteStates();
      highlightActiveQuestion(input.name);
    });
  });
}

function updatePaletteStates() {
  document.querySelectorAll(".palette-btn").forEach((btn) => {
    const questionId = btn.dataset.questionId;
    const answered = document.querySelector(`input[name="${questionId}"]:checked`);

    btn.classList.remove("current", "answered", "visited", "not-visited");
    if (questionId === currentQuestionId) {
      btn.classList.add("current");
    } else if (answered) {
      btn.classList.add("answered");
    } else if (visitedQuestions.has(questionId)) {
      btn.classList.add("visited");
    } else {
      btn.classList.add("not-visited");
    }
  });
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = totalTime ? formatTime(timeLeft) : "--:--";
}

function startTimer() {
  if (!totalTime) return;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz(true);
    }
  }, 1000);
}

function submitQuiz(autoSubmitted = false) {
  if (!activeSet) return;

  const allQuestions = getAllQuestions(activeSet);
  let score = 0;
  let attempted = 0;
  let wrong = 0;
  let reviewHtml = "";

  allQuestions.forEach((question) => {
    const selected = document.querySelector(`input[name="${question.id}"]:checked`);
    const options = document.querySelectorAll(`input[name="${question.id}"]`);
    const userAnswer = selected ? selected.value : null;
    const correctAnswers = Array.isArray(question.answer) ? question.answer : (question.answer ? [question.answer] : []);
    const hasOfficialAnswer = correctAnswers.length > 0 || Boolean(question.bonus);
    const isBonusQuestion = Boolean(question.bonus);
    const isCorrect = isBonusQuestion ? true : (userAnswer ? correctAnswers.includes(userAnswer) : false);

    if (userAnswer) attempted += 1;

    options.forEach((opt) => {
      const label = opt.parentElement;
      if (isBonusQuestion) {
        label.style.background = "var(--soft-blue)";
        label.style.border = "1px solid var(--soft-blue-border)";
      } else if (correctAnswers.includes(opt.value)) {
        label.style.background = "var(--success-bg)";
        label.style.border = "1px solid var(--success-border)";
      }
      if (hasOfficialAnswer && !isBonusQuestion && opt.checked && !correctAnswers.includes(opt.value)) {
        label.style.background = "var(--danger-bg)";
        label.style.border = "1px solid var(--danger-border)";
      }
      opt.disabled = true;
    });

    if (isCorrect) {
      score += 1;
    } else if (userAnswer === null) {
      const block = getQuestionBlock(question.id);
      if (block) {
        block.style.background = "var(--warning-bg)";
        block.style.border = "1px solid var(--warning-border)";
      }
    } else {
      wrong += 1;
    }

    if (isBonusQuestion) {
      reviewHtml += `
        <div class="review-item">
          <p><strong>${question.text}</strong></p>
          <p class="correct-answer">Official status: Full marks awarded to all candidates for this question.</p>
        </div>
      `;
    } else if (correctAnswers.length && !isCorrect) {
      const correctAnswerText = correctAnswers.map((ans) => `${ans}. ${question.options[ans]}`).join(" or ");
      reviewHtml += `
        <div class="review-item">
          <p><strong>${question.text}</strong></p>
          <p class="wrong-answer">Your answer: ${userAnswer ? `${userAnswer}. ${question.options[userAnswer]}` : "Not answered"}</p>
          <p class="correct-answer">Correct answer: ${correctAnswerText}</p>
        </div>
      `;
    }
  });

  clearInterval(timerInterval);
  resultBox.classList.remove("hidden");

  if (activeSet.mode === "practice") {
    resultBox.innerHTML = `
      <h2>Practice Completed</h2>
      <p><strong>Attempted:</strong> ${attempted} / ${allQuestions.length}</p>
      <p><strong>Unanswered:</strong> ${allQuestions.length - attempted}</p>
      ${reviewHtml || "<p class='correct-answer'>Done.</p>"}
    `;
  } else {
    resultBox.innerHTML = `
      <h2>Your Score: ${score} / ${allQuestions.length}</h2>
      <p><strong>Attempted:</strong> ${attempted} / ${allQuestions.length}</p>
      <p><strong>Correct:</strong> ${score}</p>
      <p><strong>Wrong:</strong> ${wrong}</p>
      <p><strong>Unanswered:</strong> ${allQuestions.length - attempted}</p>
      ${autoSubmitted ? "<p class='wrong-answer'>Time is up. Auto submitted.</p>" : ""}
      ${reviewHtml || "<p class='correct-answer'>Excellent! All answers are correct.</p>"}
    `;
  }

  submitBtn.disabled = true;
  startBtn.disabled = true;
  resetBtn.disabled = false;
}

function resetQuizStateOnly() {
  clearInterval(timerInterval);
  timeLeft = totalTime;
  updateTimerDisplay();

  visitedQuestions = new Set();
  currentQuestionId = null;
  quizForm.reset();
  quizForm.classList.add("hidden");
  submitArea.classList.add("hidden");
  paletteWrapper.classList.add("hidden");
  resultBox.classList.add("hidden");
  resultBox.innerHTML = "";

  startBtn.disabled = false;
  submitBtn.disabled = false;
  resetBtn.disabled = false;
  startBtn.textContent = "Start Test";
  setActiveSectionButton('');
  highlightActiveQuestion('');

  document.querySelectorAll(".question-block").forEach((block) => {
    block.style.background = "";
    block.style.border = "1px solid var(--border)";
  });

  document.querySelectorAll(".option").forEach((label) => {
    label.style.background = "var(--soft)";
    label.style.border = "1px solid var(--border)";
  });

  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.disabled = false;
    input.checked = false;
  });

  updatePaletteStates();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function goBackToSets() {
  clearInterval(timerInterval);
  testStarted = false;
  resetQuizStateOnly();
  quizScreen.classList.add("hidden");
  setSelection.classList.remove("hidden");
  updateAppMode("menu");
}

function goBackToCategories() {
  clearInterval(timerInterval);
  testStarted = false;
  quizScreen.classList.add("hidden");
  setSelection.classList.add("hidden");
  categorySelection.classList.remove("hidden");
  updateAppMode("menu");
}

startBtn.addEventListener("click", () => {
  if (!activeSet || testStarted) return;
  testStarted = true;
  quizForm.classList.remove("hidden");
  submitArea.classList.remove("hidden");
  paletteWrapper.classList.remove("hidden");
  startBtn.textContent = "Test Started";
  startBtn.disabled = true;

  const allQuestions = getAllQuestions(activeSet);
  if (allQuestions.length > 0) {
    currentQuestionId = allQuestions[0].id;
    visitedQuestions.add(allQuestions[0].id);
    updatePaletteStates();
    highlightActiveQuestion(allQuestions[0].id);
  }

  const firstSection = activeSet.sections?.[0];
  if (firstSection) {
    setActiveSectionButton(makeSectionId(firstSection.title));
  }

  startTimer();
  window.scrollTo({ top: 0, behavior: "auto" });
});

submitBtn.addEventListener("click", () => {
  if (!testStarted) return;
  submitQuiz(false);
});

resetBtn.addEventListener("click", () => {
  testStarted = false;
  resetQuizStateOnly();
});

backBtn.addEventListener("click", goBackToSets);
backToCategoriesBtn.addEventListener("click", goBackToCategories);

renderCategoryCards();
updateAppMode("menu");


function setActiveSectionButton(sectionId) {
  document.querySelectorAll('.section-nav-btn').forEach((btn) => {
    btn.classList.toggle('active-section', btn.dataset.sectionId === sectionId);
  });
}

function highlightActiveQuestion(questionId) {
  document.querySelectorAll('.question-block').forEach((block) => {
    block.classList.toggle('active-question', block.dataset.questionId === questionId);
  });
}

function addButtonRipple(event) {
  const button = event.target.closest('button');
  if (!button || button.disabled) return;

  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'button-ripple';
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
}

document.addEventListener('click', (event) => {
  if (event.target.closest('button')) addButtonRipple(event);
});
