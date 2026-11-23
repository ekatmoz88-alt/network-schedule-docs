(() => {
  "use strict";

  const STORAGE_KEY = "network-schedule:network-parameters:v1";
  const form = document.getElementById("network-parameters-form");
  if (!form) return;

  const fields = {
    networkName: document.getElementById("network-name"),
    nodeCount: document.getElementById("node-count"),
    linkCount: document.getElementById("link-count"),
    dataVolumeMb: document.getElementById("data-volume"),
    linkRateMbps: document.getElementById("link-rate"),
    slotDurationMs: document.getElementById("slot-duration")
  };
  const status = document.getElementById("network-form-status");
  const summary = document.getElementById("network-saved-summary");
  const resetButton = document.getElementById("reset-network-parameters");
  const exportButton = document.getElementById("export-network-parameters");

  const numericRules = {
    nodeCount: { min: 1, max: 1000, integer: true, label: "Количество узлов" },
    linkCount: { min: 0, max: 5000, integer: true, label: "Количество линий" },
    dataVolumeMb: { min: 0, max: 1000000000, label: "Объём данных" },
    linkRateMbps: { min: Number.MIN_VALUE, max: 1000000000, label: "Скорость линии" },
    slotDurationMs: { min: Number.MIN_VALUE, max: 1000000000, label: "Длительность слота" }
  };

  function readValues() {
    const values = {};
    for (const [key, input] of Object.entries(fields)) {
      values[key] = key === "networkName" ? input.value.trim() : Number(input.value);
    }
    return values;
  }

  function validate(values) {
    const errors = [];
    for (const [key, rule] of Object.entries(numericRules)) {
      const value = values[key];
      if (!Number.isFinite(value)) {
        errors.push(rule.label + ": укажите корректное число.");
      } else if (value < rule.min || value > rule.max) {
        errors.push(rule.label + ": допустимый диапазон " + rule.min + "–" + rule.max + ".");
      } else if (rule.integer && !Number.isInteger(value)) {
        errors.push(rule.label + ": требуется целое число.");
      }
    }
    return errors;
  }

  function renderSummary(values, savedAt) {
    const rows = [
      ["Название", values.networkName || "Без названия"],
      ["Узлы", String(values.nodeCount)],
      ["Линии", String(values.linkCount)],
      ["Объём данных", values.dataVolumeMb + " MB"],
      ["Скорость линии", values.linkRateMbps + " Mbps"],
      ["Длительность слота", values.slotDurationMs + " ms"],
      ["Сохранено", new Date(savedAt).toLocaleString()]
    ];
    summary.replaceChildren();
    for (const [label, value] of rows) {
      const wrapper = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      wrapper.append(dt, dd);
      summary.append(wrapper);
    }
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.dataset.state = type || "info";
  }

  function applyValues(values) {
    for (const [key, input] of Object.entries(fields)) {
      input.value = values[key] ?? "";
    }
  }

  function loadSaved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const saved = JSON.parse(raw);
      const errors = validate(saved.values || {});
      if (saved.version !== 1 || errors.length) {
        showStatus("Сохранённые данные имеют неподдерживаемый формат. Заполните форму заново.", "error");
        return false;
      }
      applyValues(saved.values);
      renderSummary(saved.values, saved.savedAt);
      showStatus("Последний сохранённый набор восстановлен из памяти браузера.", "success");
      return true;
    } catch (error) {
      showStatus("Не удалось прочитать локальное хранилище браузера.", "error");
      return false;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    for (const input of Object.values(fields)) input.setCustomValidity("");
    if (!form.reportValidity()) {
      showStatus("Проверьте обязательные поля и допустимые значения.", "error");
      return;
    }

    const values = readValues();
    const errors = validate(values);
    if (errors.length) {
      showStatus(errors.join(" "), "error");
      return;
    }

    const record = { version: 1, savedAt: new Date().toISOString(), values };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      renderSummary(values, record.savedAt);
      showStatus("Параметры сохранены в этом браузере.", "success");
    } catch (error) {
      showStatus("Браузер не разрешил сохранить данные. Проверьте настройки хранилища.", "error");
    }
  });

  resetButton.addEventListener("click", () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      form.reset();
      summary.replaceChildren();
      const wrapper = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = "Состояние";
      dd.textContent = "Сохранённые параметры удалены";
      wrapper.append(dt, dd);
      summary.append(wrapper);
      showStatus("Локально сохранённые параметры удалены. В форме восстановлены начальные значения.", "success");
    } catch (error) {
      showStatus("Не удалось очистить локальное хранилище браузера.", "error");
    }
  });

  exportButton.addEventListener("click", () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      showStatus("Сначала сохраните параметры.", "error");
      return;
    }
    const blob = new Blob([raw], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "network-parameters.json";
    link.click();
    URL.revokeObjectURL(url);
    showStatus("JSON-файл подготовлен для экспорта.", "success");
  });

  loadSaved();
})();
