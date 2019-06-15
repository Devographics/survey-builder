# StateOf | Survey Builder

This repository provides a CLI to ease the creation of surveys
through yaml config files on typeform.

- [requirements](#requirements)
- [installation](#installation)
- [creating a survey](#creating-a-survey)

## Requirements

- Node.js >= 12.3.1
- yarn
- A TypeForm account (you might need PRO features)

## Installation

- clone this repo
- run `yarn install`
- create an `.env` file and set the `TYPEFORM_TOKEN` environment variable

## Creating a survey

The surveys config files live in the `surveys` directory.
Each survey should have its own directory, then you should
create a directory for each release of this survey,
for example `/surveys/state-of-js/2019/`.


