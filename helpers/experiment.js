const { promisify } = require('util')
const fs = require('fs')
const path = require('path')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const access = promisify(fs.access)

const format = require('date-fns/format')
const compareDesc = require('date-fns/compare_desc')

const experimentsPath = 'experiments/'

function sortExperiments(experiments) {
  return experiments.sort((experiment1, experiment2) => compareDesc(new Date(experiment1.date), new Date(experiment2.date)))
}

exports.getExperimentsList = async function getExperimentsList() {
  const experiments = (await readdir(experimentsPath))
  const experimentsData = experiments.map(experiment => {
    const data = require(path.resolve(experimentsPath, experiment, 'data.json'))

    return {
      ...data,
      dateFormatted: format(data.date, 'DD MMM YYYY')
    }
  })

  return sortExperiments(experimentsData)
}
