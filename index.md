---
layout: page
title: Сетевой планировщик
permalink: /
---
{% include nav.html %}
# Документация сетевого планировщика

Техническая документация и доказательная реконструкция модели сетевого планирования: топология, узлы и коммутаторы, каналы, передача пакетов, временные слоты и физический испытательный стенд.

<div class="notice"><strong>Статус:</strong> документационный проект в процессе. Доступные материалы не подтверждают полное воспроизведение оригинального приложения, алгоритма или аппаратной конфигурации.</div>

## Разделы
<div class="card-grid">
<a class="doc-card" href="{{ '/docs/overview/' | relative_url }}"><strong>Обзор проекта</strong><span>Назначение и границы реконструкции</span></a>
<a class="doc-card" href="{{ '/docs/evidence/' | relative_url }}"><strong>Источники</strong><span>Доказательная база и статусы утверждений</span></a>
<a class="doc-card" href="{{ '/docs/architecture/topology/' | relative_url }}"><strong>Топология</strong><span>Узлы, коммутаторы и каналы</span></a>
<a class="doc-card" href="{{ '/docs/networking/packet-transfer/' | relative_url }}"><strong>Передача пакетов</strong><span>Параметры линий и временные оценки</span></a>
<a class="doc-card" href="{{ '/docs/scheduling/overview/' | relative_url }}"><strong>Расписание</strong><span>Планирование и временные слоты</span></a>
<a class="doc-card" href="{{ '/docs/architecture/test-bench/' | relative_url }}"><strong>Физический стенд</strong><span>Оборудование и соединения</span></a>
<a class="doc-card" href="{{ '/docs/networking/' | relative_url }}"><strong>Сетевая передача</strong><span>Wormhole, SpaceWire, Ethernet и deadlock</span></a>
<a class="doc-card" href="{{ '/docs/scheduling/' | relative_url }}"><strong>Расписание</strong><span>Слоты, ограничения и учебный расчёт</span></a>
<a class="doc-card" href="{{ '/docs/verification/' | relative_url }}"><strong>Проверка</strong><span>Чек-лист и открытые вопросы</span></a>
</div>

## Метки достоверности
- **[РТО]** — прямо указано в техническом описании / РТО.
- **[Реконструкция]** — инженерная интерпретация неполных сведений.
- **[Учебный пример]** — условные данные, не относящиеся к исходной системе.
- **[Требует проверки]** — подтверждающего источника пока нет.

Метки ставятся рядом с конкретными утверждениями. English overview: [EN]({{ '/en/' | relative_url }}).
