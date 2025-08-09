function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

const FEATURE_DEFAULTS = {
  qCount: 50,
  showTimer: true,
  darkMode: false
};

let state = {
  step: "menu",
  qIdx: 0,
  answers: [],
  marked: new Set(),
  incorrect: new Set(),
  timeLeft: 9000,
  timerActive: false,
  timerId: null,
  results: [],
  streaks: { count: 0, lastDate: null },
  achievements: [],
  activeQuestions: [],
  ...FEATURE_DEFAULTS
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem('aboTestState') || '{}');
    state = { ...state, ...saved, marked: new Set(saved.marked || []), incorrect: new Set(saved.incorrect || []) };
  } catch (e) {
    console.error("Failed to load state:", e);
    state = { ...state, step: "menu", qIdx: 0, answers: [], marked: new Set(), incorrect: new Set() };
    alert("Starting fresh due to load issue.");
  }
}

function saveProgress() {
  localStorage.setItem('aboTestState', JSON.stringify({
    ...state,
    marked: Array.from(state.marked),
    incorrect: Array.from(state.incorrect)
  }));
}

function startTest(qCount) {
  state.activeQuestions = shuffleArray([...QUESTIONS]).slice(0, qCount);
  state.step = "test";
  state.qIdx = 0;
  state.answers = new Array(qCount).fill(null);
  state.marked.clear();
  state.incorrect.clear();
  state.timeLeft = 9000; // 2.5 hours in seconds
  state.timerActive = true;
  saveProgress();
  render();
}

function selectAnswer(idx) {
  state.answers[state.qIdx] = idx;
  if (idx === QUESTIONS[state.qIdx].a) {
    state.incorrect.delete(state.qIdx);
  } else {
    state.incorrect.add(state.qIdx);
  }
  saveProgress();
  nextQuestion();
}

function nextQuestion() {
  if (state.qIdx < state.activeQuestions.length - 1) {
    state.qIdx++;
  } else if (state.step === "test") {
    state.step = "results";
    saveResults();
  }
  render();
}

function saveResults() {
  state.results = state.activeQuestions.map((q, i) => ({
    question: q.q,
    selected: q.o[state.answers[i]],
    correct: q.o[q.a],
    marked: state.marked.has(i),
    incorrect: state.incorrect.has(i)
  }));
  saveProgress();
}