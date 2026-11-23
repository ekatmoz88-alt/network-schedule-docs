---
layout: default
title: Network Schedule
description: Evidence-based documentation of a network scheduling application, its topology, time-slot scheduling and physical test-bench context.
permalink: /
---
<section id="overview">
  <div class="eyebrow">Network model · Packet transfer · Scheduling</div>
  <h1>Network Schedule <span>&</span><br>Technical Documentation</h1>
  <p class="lead">
    Техническая документация сетевого планировщика и доказательная реконструкция
    доступной модели: узлы, коммутаторы, дуплексные линии, параметры каналов,
    потоки данных, временные слоты и отдельный контекст физического испытательного стенда.
  </p>
  <div class="hero-meta" aria-label="Project topics">
    <span class="chip">Network topology</span>
    <span class="chip">Duplex links</span>
    <span class="chip">Wormhole routing</span>
    <span class="chip">SpaceWire</span>
    <span class="chip">Time slots</span>
    <span class="chip">Test bench</span>
  </div>
  <div class="hero-actions">
    <a class="button" href="{{ '/docs/overview/' | relative_url }}">Обзор проекта →</a>
    <a class="button secondary" href="{{ '/docs/evidence/' | relative_url }}">Доказательная база</a>
  </div>
  <div class="note">
    <strong>Границы реконструкции.</strong> Доступные материалы не подтверждают полное воспроизведение
    оригинального приложения, алгоритма планирования или аппаратной конфигурации. Неподтверждённые
    детали не достраиваются предположениями.
  </div>
</section>

<section class="section" id="architecture">
  <div class="section-heading"><span class="section-index">01</span><h2>Модель и архитектура сети</h2></div>
  <p class="section-intro">Структура программной модели описывается отдельно от физической схемы испытательного стенда.</p>
  <div class="cards">
    <article class="card">
      <div class="card-top"><span class="card-icon">SYS</span><span class="card-type">Project overview</span></div>
      <h3>Обзор проекта</h3>
      <p>Назначение планировщика, исходные данные, область документации и ограничения реконструкции.</p>
      <div class="card-links"><a href="{{ '/docs/overview/' | relative_url }}">Открыть обзор →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">NET</span><span class="card-type">Network model</span></div>
      <h3>Топология, узлы и коммутаторы</h3>
      <p>Элементы модели сети и подтверждённые сведения о соединениях между ними.</p>
      <div class="card-links">
        <a href="{{ '/docs/architecture/topology/' | relative_url }}">Топология →</a>
        <a href="{{ '/docs/architecture/nodes-and-switches/' | relative_url }}">Узлы и коммутаторы →</a>
      </div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">LINK</span><span class="card-type">Connections</span></div>
      <h3>Каналы и линии</h3>
      <p>Дуплексность, скорость и длина соединений — без предположений о неподтверждённых физических параметрах.</p>
      <div class="card-links"><a href="{{ '/docs/architecture/links/' | relative_url }}">Параметры каналов →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">LAB</span><span class="card-type">Physical context</span></div>
      <h3>Физический испытательный стенд</h3>
      <p>Оборудование и физические соединения рассматриваются как отдельный слой исходных материалов.</p>
      <div class="card-links"><a href="{{ '/docs/architecture/test-bench/' | relative_url }}">Открыть описание стенда →</a></div>
    </article>
  </div>
</section>

<section class="section" id="networking">
  <div class="section-heading"><span class="section-index">02</span><h2>Передача данных и сетевые технологии</h2></div>
  <p class="section-intro">Документация фиксирует термины и ограничения интерпретации, не приписывая приложению неподтверждённые механизмы.</p>
  <div class="cards">
    <article class="card">
      <div class="card-top"><span class="card-icon">PKT</span><span class="card-type">Data transfer</span></div>
      <h3>Передача пакетов</h3>
      <p>Объёмы данных между парами устройств, параметры каналов и осторожная интерпретация временных оценок.</p>
      <div class="card-links"><a href="{{ '/docs/networking/packet-transfer/' | relative_url }}">Открыть раздел →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">WH</span><span class="card-type">Routing concept</span></div>
      <h3>Wormhole routing</h3>
      <p>Понятие wormhole forwarding и границы выводов о конвейерной передаче, буферизации и задержках.</p>
      <div class="card-links"><a href="{{ '/docs/networking/wormhole-routing/' | relative_url }}">Открыть раздел →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">SPW</span><span class="card-type">Protocols</span></div>
      <h3>SpaceWire и Ethernet</h3>
      <p>Различия технологий и запрет на механическое перенесение сетевых предположений между ними.</p>
      <div class="card-links"><a href="{{ '/docs/networking/spacewire-ethernet/' | relative_url }}">Сравнение технологий →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">DL</span><span class="card-type">Network analysis</span></div>
      <h3>Deadlock</h3>
      <p>Терминология и условия, которые нельзя подтвердить без полной топологии и правил управления передачей.</p>
      <div class="card-links"><a href="{{ '/docs/networking/deadlock/' | relative_url }}">Открыть раздел →</a></div>
    </article>
  </div>
</section>

<section class="section" id="scheduling">
  <div class="section-heading"><span class="section-index">03</span><h2>Расписание и временные слоты</h2></div>
  <p class="section-intro">Доступное описание подтверждает формирование расписания передачи по временным слотам, но не раскрывает точный алгоритм планирования.</p>
  <div class="cards">
    <article class="card">
      <div class="card-top"><span class="card-icon">SCH</span><span class="card-type">Scheduling model</span></div>
      <h3>Обзор планирования</h3>
      <p>Входные параметры, результат планирования и известные ограничения исходного описания.</p>
      <div class="card-links"><a href="{{ '/docs/scheduling/overview/' | relative_url }}">Открыть обзор →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">TS</span><span class="card-type">Time slots</span></div>
      <h3>Временные слоты</h3>
      <p>Термины и временные оценки с явным отделением подтверждённых сведений от учебных расчётов.</p>
      <div class="card-links"><a href="{{ '/docs/scheduling/timeslots/' | relative_url }}">Открыть раздел →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">CF</span><span class="card-type">Constraints</span></div>
      <h3>Конфликты и ограничения</h3>
      <p>Что можно и чего нельзя заключить о конфликтах использования каналов и ресурсов.</p>
      <div class="card-links"><a href="{{ '/docs/scheduling/conflict-detection/' | relative_url }}">Открыть раздел →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">EX</span><span class="card-type">Educational example</span></div>
      <h3>Учебный расчёт</h3>
      <p>Иллюстративный пример с условными значениями, не выдаваемыми за параметры исходной системы.</p>
      <div class="card-links"><a href="{{ '/docs/scheduling/worked-example/' | relative_url }}">Открыть пример →</a></div>
    </article>
  </div>
</section>

<section class="section" id="network-input">
  <div class="section-heading"><span class="section-index">04</span><h2>Интерактивный ввод данных</h2></div>
  <p class="section-intro">Локальная форма для ввода, проверки и сохранения параметров модели сети в браузере. Она не выполняет расчёт расписания.</p>
  <div class="cards">
    <article class="card">
      <div class="card-top"><span class="card-icon">IN</span><span class="card-type">Browser tool</span></div>
      <h3>Параметры сетевой модели</h3>
      <p>Количество узлов и линий, объём данных, скорость линии и длительность временного слота.</p>
      <div class="card-links"><a href="{{ '/tools/network-input/' | relative_url }}">Открыть форму ввода →</a></div>
    </article>
  </div>
</section>

<section class="section" id="evidence">
  <div class="section-heading"><span class="section-index">05</span><h2>Источники, проверка и достоверность</h2></div>
  <p class="section-intro">Каждое техническое утверждение должно иметь понятный статус: источник, реконструкция, учебный пример или вопрос на проверку.</p>
  <div class="cards">
    <article class="card">
      <div class="card-top"><span class="card-icon">SRC</span><span class="card-type">Evidence register</span></div>
      <h3>Доказательная база</h3>
      <p>Что подтверждено доступным техническим описанием, а какие сведения остаются открытыми.</p>
      <div class="card-links"><a href="{{ '/docs/evidence/' | relative_url }}">Открыть реестр →</a></div>
    </article>
    <article class="card">
      <div class="card-top"><span class="card-icon">CHK</span><span class="card-type">Verification</span></div>
      <h3>Проверка и открытые вопросы</h3>
      <p>Контрольный список для сверки топологии, параметров каналов, временной модели и физических соединений.</p>
      <div class="card-links"><a href="{{ '/docs/verification/' | relative_url }}">Открыть чек-лист →</a></div>
    </article>
  </div>
  <ul class="feature-list">
    <li><strong>[РТО]</strong> — прямо указано в техническом описании</li>
    <li><strong>[Реконструкция]</strong> — инженерная интерпретация неполных данных</li>
    <li><strong>[Учебный пример]</strong> — условные данные для объяснения</li>
    <li><strong>[Требует проверки]</strong> — пока нет достаточного подтверждения</li>
  </ul>
  <div class="note">Программная модель сети и физическая схема стенда документируются раздельно. Пересечение линий на рисунке само по себе не считается соединением; неполные схемы не достраиваются без источника.</div>
</section>

<section class="section" id="stack">
  <div class="section-heading"><span class="section-index">06</span><h2>Технологический контекст</h2></div>
  <div class="tech-groups">
    <div class="tech-row"><strong>Network model</strong><span>Узлы, коммутаторы, дуплексные линии, объёмы данных между парами устройств</span></div>
    <div class="tech-row"><strong>Scheduling</strong><span>Расписание передачи по временным слотам; точный алгоритм не подтверждён</span></div>
    <div class="tech-row"><strong>Routing context</strong><span>Wormhole routing — термин из исходного описания, внутренние механизмы требуют проверки</span></div>
    <div class="tech-row"><strong>Technology references</strong><span>SpaceWire, C++, Qt, Qt Creator — упоминания исходного технического описания</span></div>
    <div class="tech-row"><strong>Documentation</strong><span>Markdown, Git, GitHub Actions, Jekyll, GitHub Pages</span></div>
  </div>
</section>
