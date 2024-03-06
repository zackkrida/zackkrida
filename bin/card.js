#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Zack Krida /'),
  handle: chalk.cyan('@zackkrida'),
  work: chalk.white('Fullstack freelance#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Zack Krida /'),
  handle: chalk.cyan('@zackkrida'),
  work: chalk.white('Building Openverse at WordPress'),
  sponsor: chalk.white('Sponsored by Automattic'),
  github: chalk.cyan('https://github.com/zackkrida'),
  npx: chalk.white('npx zackkrida'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelCard: chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
