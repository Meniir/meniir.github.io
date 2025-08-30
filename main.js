let current = 0;
let answers = []; // stores 0 or 1
let currentLang = 'id'; // default language

function byId(id){ return document.getElementById(id); }

function setLanguage(lang) {
  currentLang = lang;
  
  // Update UI language elements
  byId('quiz-title').textContent = uiStrings[lang].title;
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  byId(lang + '-lang').classList.add('active');
  
  // Re-render current view
  if (current < questions.length) {
    renderQuestion();
  } else {
    renderResults();
  }
}

function renderQuestion() {
  const q = questions[current];
  let html = `<h2>${currentLang === 'id' ? 'Pertanyaan' : 'Question'} ${current + 1} ${currentLang === 'id' ? 'dari' : 'of'} ${questions.length}</h2>`;
  html += `<p>${q.text[currentLang]}</p>`;

  q.options[currentLang].forEach((opt, i) => {
    const selected = answers[current] === i ? "selected" : "";
    html += `<div class="option ${selected}" onclick="selectOption(${i})">${opt}</div>`;
  });

  html += `<button onclick="nextQuestion()" id="nextBtn" ${answers[current]===undefined?"disabled":""}>${uiStrings[currentLang].nextButton}</button>`;
  if (current > 0) {
    html += `<div class="back-link" onclick="prevQuestion()">${uiStrings[currentLang].backButton}</div>`;
  }

  byId("quiz").innerHTML = html;
}

function selectOption(index) {
  answers[current] = index;
  // re-enable next
  const btn = document.getElementById("nextBtn");
  if (btn) btn.removeAttribute("disabled");
  // visual
  renderQuestion();
}

function nextQuestion() {
  if (answers[current] === undefined) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    renderResults();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function determineIdeology(countA, countB) {
  const ratio = countA / (countA + countB);

  if (ratio >= 0.7) return {
    title: { id: "Nasionalis Pembangunan", en: "Development Nationalist" },
    description: {
      id: "Anda cenderung menekankan stabilitas, pembangunan ekonomi, dan kedaulatan nasional. Anda mungkin melihat perlunya negara kuat dan kebijakan yang bertahap.",
      en: "You tend to emphasize stability, economic development, and national sovereignty. You likely see the need for a strong state and gradual policies."
    }
  };

  if (ratio >= 0.6) return {
    title: { id: "Nasionalis Moderat", en: "Moderate Nationalist" },
    description: {
      id: "Anda menghargai stabilitas nasional tetapi juga terbuka terhadap reformasi yang diperlukan. Pendekatan Anda seimbang antara pembangunan dan demokrasi.",
      en: "You value national stability but are also open to necessary reforms. Your approach is balanced between development and democracy."
    }
  };

  if (ratio >= 0.4) return {
    title: { id: "Moderat Tengah", en: "Center Moderate" },
    description: {
      id: "Pandangan Anda seimbang antara tradisi dan perubahan. Anda cenderung pragmatis dan mempertimbangkan berbagai sudut pandang dalam menilai sejarah Indonesia.",
      en: "Your views are balanced between tradition and change. You tend to be pragmatic and consider various perspectives when assessing Indonesian history."
    }
  };

  if (ratio >= 0.3) return {
    title: { id: "Reformis Moderat", en: "Moderate Reformer" },
    description: {
      id: "Anda mendukung perubahan dan reformasi tetapi dengan pendekatan bertahap. Anda menghargai stabilitas tetapi juga mengakui pentingnya perbaikan sistem.",
      en: "You support change and reform but with a gradual approach. You value stability but also acknowledge the importance of system improvements."
    }
  };

  return {
    title: { id: "Reformis Progresif", en: "Progressive Reformer" },
    description: {
      id: "Anda cenderung menekankan pentingnya perubahan, keadilan sosial, dan transparansi. Anda mungkin kritis terhadap kebijakan masa lalu dan mendorong reformasi substantif.",
      en: "You tend to emphasize the importance of change, social justice, and transparency. You might be critical of past policies and push for substantive reforms."
    }
  };
}

function renderResults() {
  const countA = answers.filter(a => a === 0).length;
  const countB = answers.filter(a => a === 1).length;
  const total = answers.length || 1;
  
  const ideology = determineIdeology(countA, countB);

  let html = `<h2>${uiStrings[currentLang].resultsTitle}</h2>`;
  html += `<p>${uiStrings[currentLang].resultsSummary.replace('{total}', total)}</p>`;

  html += `
    <div class="ideology-result">
      <h3 class="ideology-title">${currentLang === 'id' ? 'Anda adalah' : 'You are a'}: ${ideology.title[currentLang]}</h3>
      <p>${ideology.description[currentLang]}</p>
    </div>
  `;

  html += `<h3>${uiStrings[currentLang].answersDetail}</h3><ol class="answers-list">`;
  questions.forEach((q, i) => {
    const pick = answers[i];
    const label = pick === 0 ? "A" : "B";
    html += `<li><span class="q-text">${q.text[currentLang]}</span><br><span class="ans-chip">→ ${label}. ${q.options[currentLang][pick]}</span></li>`;
  });
  html += `</ol>`;

  html += `<button onclick="restart()">${uiStrings[currentLang].restartButton}</button>`;

  byId("quiz").innerHTML = html;
}

function restart() {
  current = 0;
  answers = [];
  renderQuestion();
}

// Initialize language toggle
document.getElementById('id-lang').addEventListener('click', () => setLanguage('id'));
document.getElementById('en-lang').addEventListener('click', () => setLanguage('en'));

// Start
renderQuestion();
