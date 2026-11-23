---
layout: page
title: Network Schedule Documentation
permalink: /en/
---

{% include nav.html %}

# Network Schedule Documentation

This repository documents a network scheduling application and its physical test-bench context using an evidence-based approach.

## Scope

The available description identifies a network model with nodes, switches, duplex links, configurable link speed and length, traffic volumes for device pairs, and a resulting time-slot schedule.

The source description mentions wormhole routing, SpaceWire, C++, Qt and Qt Creator. These references do not establish the exact scheduling algorithm or implementation details.

## Documentation

- [Project overview](../docs/overview/)
- [Evidence register](../docs/evidence/)
- [Network topology](../docs/architecture/topology/)
- [Packet transfer](../docs/networking/packet-transfer/)
- [Scheduling overview](../docs/scheduling/overview/)
- [Physical test bench](../docs/architecture/test-bench/)
- [Verification checklist](../docs/verification/)

## Evidence labels

- **[РТО]** — directly stated in the technical description.
- **[Reconstruction]** — interpretation based on incomplete evidence.
- **[Educational example]** — illustrative values, not original project data.
- **[Requires verification]** — not confirmed by the available sources.

The software topology and physical bench wiring are documented separately. No buffer sizes, flow-control rules, arbitration policy, scheduling algorithm, or schedule export format are invented.
