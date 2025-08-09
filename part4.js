function render() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';
  if (state.step === "menu") {
    app.innerHTML = `
      <div class="header">
        <div class="logo-main">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--button-bg)" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="var(--button-bg)"/></svg>
          BoardScope <span>by CW</span>
        </div>
      </div>
      <div class="setup-panel">
        <p>Welcome to BoardScope by CW - Prepare for your ABO exam!</p>
        <label>Questions: <select onchange="state.qCount = parseInt(this.value); saveProgress();">
          ${[10, 25, 50, 100].map(n => `<option value="${n}" ${state.qCount === n ? 'selected' : ''}>${n}</option>`).join('')}
        </select></label>
        <label>Timer: <input type="checkbox" onchange="state.showTimer = this.checked; saveProgress();" ${state.showTimer ? 'checked' : ''}></label>
        <label>Dark Mode: <input type="checkbox" onchange="document.body.classList.toggle('dark', this.checked); state.darkMode = this.checked; saveProgress();" ${state.darkMode ? 'checked' : ''}></label>
        <div class="controls">
          <button onclick="startTest(state.qCount)">Start Test</button>
          <button onclick="renderResults()" class="menu-btn">View Results</button>
        </div>
      </div>
    `;
  } else if (state.step === "test") {
    const q = state.activeQuestions[state.qIdx];
    app.innerHTML = `
      <div class="header">
        <div class="logo-main">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--button-bg)" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="var(--button-bg)"/></svg>
          BoardScope <span>by CW</span>
        </div>
      </div>
      <div class="question ${state.marked.has(state.qIdx) ? 'marked' : ''}">
        <p>${q.q} <button onclick="showHint()">💡</button></p>
        <div class="options">
          ${q.o.map((opt, i) => `<button onclick="selectAnswer(${i})" ${state.answers[state.qIdx] === i ? 'class="correct"' : ''}>${opt}</button>`).join('')}
        </div>
        <div class="controls">
          <button onclick="state.marked.add(state.qIdx); saveProgress(); render();">Mark</button>
          <button onclick="nextQuestion()">Next</button>
        </div>
      </div>
      ${state.showTimer ? `<div class="timer">${formatTime(state.timeLeft)}</div>` : ''}
    `;
    if (state.timerActive && !state.timerId) {
      state.timerId = setInterval(() => {
        if (state.timeLeft > 0 && state.step === "test") {
          state.timeLeft--;
          if (state.showTimer) document.querySelector(".timer").textContent = formatTime(state.timeLeft);
        } else {
          clearInterval(state.timerId);
          state.timerId = null;
          if (state.step === "test") {
            state.step = "results";
            saveResults();
            render();
          }
        }
      }, 1000);
    }
  } else if (state.step === "results") {
    app.innerHTML = `
      <div class="header">
        <div class="logo-main">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--button-bg)" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="var(--button-bg)"/></svg>
          BoardScope <span>by CW</span>
        </div>
      </div>
      <div class="result-card">
        <h3>Results</h3>
        <p>Score: ${state.results.filter(r => r.selected === r.correct).length} / ${state.results.length}</p>
        <table class="category-table">
          <tr><th>Category</th><th>Correct</th><th>Total</th></tr>
          ${[...new Set(state.activeQuestions.map(q => q.c))].map(c => {
            const catQs = state.results.filter(r => state.activeQuestions.find(q => q.q === r.question).c === c);
            return `<tr><td>${c}</td><td>${catQs.filter(r => r.selected === r.correct).length}</td><td>${catQs.length}</td></tr>`;
          }).join('')}
        </table>
        <div class="controls">
          <button onclick="state.step = 'menu'; render();">Back to Menu</button>
          <button onclick="exportPDF()">Export PDF</button>
        </div>
      </div>
    `;
  }
}

function showHint() {
  const q = state.activeQuestions[state.qIdx];
  alert(q.e);
}

function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("BoardScope by CW - Test Results", 10, 10);
  state.results.forEach((r, i) => {
    doc.text(`${i + 1}. ${r.question}`, 10, 20 + i * 10);
    doc.text(`Your Answer: ${r.selected || 'N/A'}`, 10, 25 + i * 10);
    doc.text(`Correct Answer: ${r.correct}`, 10, 30 + i * 10);
  });
  doc.save("abo_test_results.pdf");
}

function toggleCalculator() {
  const calc = document.getElementById('calculatorModal');
  calc.style.display = calc.style.display === 'block' ? 'none' : 'block';
}

function calcInsert(val) {
  const display = document.getElementById('calc-display');
  display.value = display.value === '0' ? val : display.value + val;
}

function calcClear() {
  document.getElementById('calc-display').value = '0';
}

function calcBack() {
  const display = document.getElementById('calc-display');
  display.value = display.value.slice(0, -1) || '0';
}

function calcSquare() {
  const display = document.getElementById('calc-display');
  display.value = math.pow(parseFloat(display.value), 2);
}

function calcSqrt() {
  const display = document.getElementById('calc-display');
  display.value = math.sqrt(parseFloat(display.value));
}

function calcEquals() {
  const display = document.getElementById('calc-display');
  try {
    display.value = math.evaluate(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Drag functionality
let dragElement = document.getElementById('calculatorHeader');
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
dragElement.onmousedown = dragMouseDown;

function dragMouseDown(e) {
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  const calc = document.getElementById('calculatorModal');
  calc.style.top = (calc.offsetTop - pos2) + "px";
  calc.style.left = (calc.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

// Initialize
loadProgress();
render();