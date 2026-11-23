---
title: Network input parameters
permalink: /tools/network-input/
---

# Параметры сетевой модели

Интерактивная форма для ввода и локального хранения исходных параметров. Значения сохраняются в браузере на этом устройстве и не отправляются на сервер.

<div class="note">
  <strong>Важно.</strong> Форма собирает параметры модели, но не запускает алгоритм планирования. Алгоритм, правила маршрутизации и ограничения исходного приложения пока не подтверждены.
</div>

<form id="network-parameters-form" class="input-form" novalidate>
  <div class="input-grid">
    <div class="field field-wide">
      <label for="network-name">Название модели</label>
      <input id="network-name" name="networkName" type="text" maxlength="80" required placeholder="Например, Demo network">
      <small>Необязательная метка для различения наборов параметров.</small>
    </div>
    <div class="field">
      <label for="node-count">Количество узлов</label>
      <input id="node-count" name="nodeCount" type="number" min="1" max="1000" step="1" required value="5">
      <small>Целое число от 1 до 1000.</small>
    </div>
    <div class="field">
      <label for="link-count">Количество линий</label>
      <input id="link-count" name="linkCount" type="number" min="0" max="5000" step="1" required value="6">
      <small>Целое число от 0 до 5000.</small>
    </div>
    <div class="field">
      <label for="data-volume">Объём данных (MB)</label>
      <input id="data-volume" name="dataVolumeMb" type="number" min="0" max="1000000000" step="any" required value="10">
      <small>Неотрицательное число.</small>
    </div>
    <div class="field">
      <label for="link-rate">Скорость линии (Mbps)</label>
      <input id="link-rate" name="linkRateMbps" type="number" min="0.000001" max="1000000000" step="any" required value="100">
      <small>Должна быть больше нуля.</small>
    </div>
    <div class="field">
      <label for="slot-duration">Длительность слота (ms)</label>
      <input id="slot-duration" name="slotDurationMs" type="number" min="0.000001" max="1000000000" step="any" required value="10">
      <small>Должна быть больше нуля.</small>
    </div>
  </div>
  <div class="form-actions">
    <button class="button" type="submit">Сохранить параметры</button>
    <button class="button secondary" type="button" id="reset-network-parameters">Сбросить значения</button>
  </div>
  <p id="network-form-status" class="form-status" role="status" aria-live="polite">Заполните поля и сохраните параметры.</p>
</form>

## Сохранённый набор

<dl id="network-saved-summary" class="saved-summary">
  <div><dt>Состояние</dt><dd>Пока нет сохранённых параметров</dd></div>
</dl>

<button class="button secondary" type="button" id="export-network-parameters">Экспортировать JSON</button>

## Правила валидации

- Количество узлов: целое число от 1 до 1000.
- Количество линий: целое число от 0 до 5000.
- Объём данных: число не меньше нуля.
- Скорость линии и длительность временного слота: положительные числа.
- Проверка не предполагает конкретную топологию, тип дуплексности или алгоритм планирования.

<noscript>
  <p class="notice">Для работы формы необходимо включить JavaScript в браузере.</p>
</noscript>
