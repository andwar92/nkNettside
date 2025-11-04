function updateTagStyle() {
  const select = document.getElementById("assignmentTagSelect");
  if (!select) return; // nothing to do
  const tagValue = select.value;
  const textBox = select; // <— farg denne (bruker samme select-element)

  // Reset inline styles
  textBox.style.backgroundColor = "";
  textBox.style.color = "";

  // Normalize key so we can match values like "growth-mindset" or "growthMindset"
  const normalize = s => (s || "").toString().replace(/[^a-z0-9]/gi, "").toLowerCase();
  const key = normalize(tagValue);

  // Tag -> color + subtags mapping
  const tagConfig = {
    growthmindset: {
      bg: "#fff4ac",
      color: "#c0ad36",
      subtags: ["Feiling", "Fixed vs Growth Mindset "]
    },
    psykologisktrygghet: {
      bg: "#a0f0a0",
      color: "#1ca71c",
      subtags: ["Bli kjent", "Signaturstyrker", "Lytting", "Morramøte", "Kommunikasjon"]
    },
    learning: {
      bg: "#6591ff",
      color: "#174496",
      subtags: ["Pomodoro", "Focused/diffused learning", "Logg", "Læringsteknikker"]
    },
    locusofcontrol: {
      bg: "#f4cccc",
      color: "#d21600",
      subtags: ["Stress", "Be proactive", "Metakognisjon","Locus of Control","Blindsoner"]
    },
    grit: {
      bg: "#c68dff",
      color: "#8d3ffb",
      subtags: ["Vaner", "Mål",]
    }
  };

  const cfg = tagConfig[key];
  if (cfg) {
    textBox.style.backgroundColor = cfg.bg;
    textBox.style.color = cfg.color;
  }

  // Update subtags <select>. Accept either `assignmentSubtagSelect` (older code)
  // or the view's `subtagSelect`. If neither exists, create a small select after
  // the main select so the UI still works without HTML changes.
  let subSelect = document.getElementById("assignmentSubtagSelect") || document.getElementById("subtagSelect");
  if (!subSelect) {
    // create a fallback subtag select and insert it after the main select
    subSelect = document.createElement('select');
    subSelect.id = 'subtagSelect';
    subSelect.disabled = true;
    subSelect.className = 'select-style';
    if (select && select.parentNode) {
      // try to insert into the same container as the main select
      if (select.nextElementSibling) select.parentNode.insertBefore(subSelect, select.nextElementSibling);
      else select.parentNode.appendChild(subSelect);
    } else {
      document.body.appendChild(subSelect);
    }
  }

  // Clear existing options
  subSelect.innerHTML = "";

  const subtags = (cfg && cfg.subtags) ? cfg.subtags : [];
  if (subtags.length === 0) {
    const opt = document.createElement('option');
    opt.value = "";
    opt.text = "Ingen undertagger";
    subSelect.add(opt);
    subSelect.disabled = true;
    // reset subselect colours when there are no subtags
    subSelect.style.backgroundColor = "";
    subSelect.style.color = "";
    subSelect.style.borderColor = "";
  } else {
    // add a placeholder
    const placeholder = document.createElement('option');
    placeholder.value = "";
    placeholder.text = "Velg undertagg";
    placeholder.disabled = true;
    placeholder.selected = true;
    subSelect.add(placeholder);

    subtags.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.text = s;
      subSelect.add(opt);
    });
    subSelect.disabled = false;
    // apply the same color scheme to the subtag select so they match
    if (cfg) {
      subSelect.style.backgroundColor = cfg.bg;
      subSelect.style.color = cfg.color;
      // subtle border to match
      subSelect.style.borderColor = '';
    } else {
      subSelect.style.backgroundColor = "";
      subSelect.style.color = "";
      subSelect.style.borderColor = "";
    }
  }
}

// Create and publish an assignment: collects fields, writes to model and navigates to dashboard
function createAssignment() {
  const titleEl = document.getElementById('titleInput');
  const bodyEl = document.getElementById('bodyInput');
  const tagEl = document.getElementById('assignmentTagSelect');
  const subtagEl = document.getElementById('assignmentSubtagSelect') || document.getElementById('subtagSelect');

  const title = titleEl ? titleEl.value.trim() : '';
  const description = bodyEl ? bodyEl.value.trim() : '';
  const tag = tagEl ? tagEl.value : '';
  const subtag = subtagEl ? subtagEl.value : '';

  if (!title || !description) {
    alert('Vennligst fyll inn både tittel og oppgaveinnhold før du publiserer.');
    return;
  }

  const newId = Date.now();
  const dateStr = new Date().toLocaleString();

  model.data = model.data || {};
  model.data.assignmentPage = {
    assignmentID: newId,
    title: title,
    description: description,
    subject: tag,
    tag: subtag ? `${tag} — ${subtag}` : tag,
    groupID: [],
    date: dateStr,
    attachment: null
  };

  // Re-render dashboard (setPage will update view)
  setPage('dashboardView');
}