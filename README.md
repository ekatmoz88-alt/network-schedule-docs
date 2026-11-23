# Network Schedule Documentation

Documentation and technical analysis of a network scheduling simulator and its network test-bench context.

> **Project status:** documentation project in progress. This repository describes the available source materials; it does not claim to reproduce the original application, its complete algorithm, or a verified hardware configuration.

## Purpose

The repository organizes technical information about a simulator that models a network topology and produces a time-slot schedule for packet transfers. The documentation is intended to make the available requirements, terminology, configuration model, and known limitations understandable and traceable.

## Scope

The planned documentation covers:

- network topology: nodes, switches, and links;
- link parameters, including speed and length, where specified by the source material;
- packet-transfer inputs and timing concepts;
- time-slot schedules and their interpretation;
- wormhole routing as a forwarding model;
- SpaceWire and Ethernet context;
- deadlock concepts and the limits of what can be inferred;
- the physical test-bench scheme and the mapping between diagram symbols and devices, based on the supplied bench documentation.

The physical test-bench scheme is treated as configuration and device-mapping evidence. It is **not** presented as a software architecture diagram.

## Evidence and confidence labels

The documentation distinguishes source facts from interpretation:

| Label | Meaning |
| --- | --- |
| **[РТО]** | Information stated in the technical description / requirements document. |
| **[Реконструкция]** | An interpretation assembled from incomplete or indirect evidence. |
| **[Учебный пример]** | Illustrative data used to explain a concept; not a claim about the original simulator. |
| **[Требует проверки]** | A detail that cannot yet be confirmed from the available materials. |

Where a statement depends on incomplete evidence, the relevant label should appear next to the statement rather than being hidden in a general disclaimer.

## Technical context recorded in the source description

The available technical description identifies the application as a network modelling/simulation tool. It describes nodes and switches connected by duplex links, configurable link speed and length, packet-size inputs for device pairs, and a resulting time-slot schedule.

The source description also names wormhole routing (with SpaceWire as an example), C++, Qt, and Qt Creator. These are recorded as source-described technologies and context; they do not independently establish the exact implementation details of the scheduling algorithm.

## Important interpretation limits

- A time-slot schedule is a separate system-level mechanism; it is not an inherent requirement of SpaceWire.
- Wormhole forwarding can pipeline packet transfer. End-to-end transfer time must not automatically be calculated as the simple sum of every link's full packet-transmission time.
- Deadlock means cyclic resource waiting. A visual crossing of links, or the absence of an obvious link conflict, is not by itself proof of deadlock or deadlock freedom.
- Do not infer buffer sizes, flow-control rules, arbitration policy, conflict detection, schedule export to hardware, or schedule-loading behaviour unless a source explicitly confirms them.
- The currently available topology sketch is incomplete. Only the clearly supported connections should be drawn as confirmed; uncertain node-to-switch connections must remain marked as requiring verification.
- SpaceWire and Ethernet are not interchangeable technologies. Ethernet behaviour depends on the relevant medium and operating mode; CSMA/CD should not be generalized to modern switched full-duplex Ethernet.

## Repository structure

The documentation structure will be expanded as source materials are reviewed. A typical organization may include:

- README.md — project overview, scope, and evidence conventions;
- docs/ — requirements, concepts, topology, schedule interpretation, and test-bench mapping;
- assets/ — diagrams and supporting visual materials, where redistribution is permitted.

Only files that actually exist in the repository should be treated as published documentation.

## Documentation site

The intended output is a static GitHub Pages site built from Markdown and static HTML/CSS/JavaScript. Interactive elements must have working behaviour; decorative controls without an action are out of scope.

No backend, database, API server, or server-side dynamic processing is required for the documentation site.

## Source and confidentiality

The documentation is based on the available technical description, diagrams, and other supplied project materials. Personal contact details and other unnecessary personal data are excluded from the public portfolio.

Before publishing any source document, screenshot, or diagram, verify that it may be redistributed publicly. Do not publish confidential source code, credentials, personal data, or proprietary material without authorization.

## Status

This README establishes the repository purpose and documentation conventions. It does not imply that all planned pages, diagrams, tests, or GitHub Pages deployment are already complete.
