---
sidebar_position: 3
---

# Scribe 

Scribe is the name for a new type of Oracle architecture developed by the team at Chronicle Labs. The design is built around 5 pillars:

- <b>S</b>calability
- <b>T</b>ransparency
- <b>A</b>ccessibility
- <b>R</b>esilience
- <b>S</b>ecurity


Scribe v1 achieves significant progress towards each pillar; however, there are more features planned that will further enhance Scribe’s STARS.


Scribe is an extremely gas-efficient Oracle based on aggregated Schnorr signatures. Providing nearly constant gas costs on Layer 2s and on Layer 1s, Scribe boasts of fixed gas costs, leading to substantial savings—over <b>60%</b> relative to competing Oracles and an impressive <b>80%</b> compared to Chainlink. This approach to gas management significantly boosts the scalability of the Oracle.

Prior to Scribe, architecturally, all blockchain Oracles used a standalone implementation of the elliptic curve digital signature algorithm (ECDSA) to generate public keys to cryptographically authenticate the identity of the signer or validator and, therefore, the integrity of the reported data.


:::tip
The Elliptic Curve Digital Signature Algorithm (ECDSA) signatures typically exhibit a one-to-one relationship between the signature and the signer, implying that more signers result in more signatures for an oracle response. Consequently, this leads to an increase in the volume of data that must be stored on the blockchain, resulting in higher costs due to the larger data size.
:::


Scribe uses a novel application of Schnorr Signature cryptography, a signature, and key aggregation algorithm to create a single ‘super signature’, which is then authenticated via ECDSA.

The Chronicle Scribe Oracle interface is plug-and-play with Chainlink and Maker Oracles, providing a smooth transition for developers used to these platforms.

### Cheap-to-operate Oracle

- <b>Pro:</b> A low cost to update the Oracle (and therefore a low operating cost for the Oracle provider). This is achieved by having less signers attesting to the data.

- <b>Con:</b> Lower security and decentralization of the Oracle protocol.


### Secure and decentralized Oracle

- <b>Pro:</b> Highly secure and decentralized Oracle protocol

- <b>Con:</b> A high cost to update the Oracle



All data delivered by a Chronicle Oracle on mainnet is verifiable via The Chronicle Dashboard.
Scribe Public Repo: https://github.com/chronicleprotocol/scribe


![Example banner](./../../static/img/scribe.png)


### Blog post
"What is Scribe? The novel Oracle by Chronicle" https://chroniclelabs.org/blog/what-is-scribe-the-novel-oracle-by-chronicle