import { inspect } from 'util'
import path from 'path'
import dotenv from 'dotenv'
import config from '@ekino/config'
import yaml from 'js-yaml'
import fs from 'fs-extra'
import fetch from 'node-fetch'
import chalk from 'chalk'
import { generateFields } from './src/types/index.mjs'

const debug = thing => console.log(inspect(thing, { depth: null, colors: true }))

dotenv.config()
config.set('typeform.token', process.env.TYPEFORM_TOKEN)

const loadYaml = async file => {
    const raw = await fs.readFile(file, 'utf8')
    const parsed = yaml.safeLoad(raw)

    return parsed
}

const SURVEY = 'state-of-react'
const RELEASE = '2019'

const run = async () => {
    console.log(chalk`{dim survey:} {bold ${SURVEY}} {dim release:} {bold ${RELEASE}}`)

    const outlineFile = path.join('surveys', SURVEY, RELEASE, 'outline.yml')
    console.log(chalk`{dim loading outline:} {bold ${outlineFile}}`)
    const outline = await loadYaml(outlineFile)

    console.log(chalk`{dim computing form from config}`)
    const fields = generateFields(outline.structure)
    
    console.log(chalk`{dim creating form via TypeForm API}`)
    const response = await fetch(`${config.get('typeform.api')}/forms`, {
        method: 'POST',
        body: JSON.stringify({
            title: 'State of React',
            fields
        }),
        headers: { authorization: `bearer ${config.get('typeform.token')}` }
    })
    const output = await response.json()

    debug(output)

    const yamlOutput = yaml.safeDump(output)
    const outputFile = path.join('surveys', SURVEY, RELEASE, 'output.yml')
    console.log(chalk`{dim saving output to:} {bold ${outputFile}}`)
    await fs.writeFile(outputFile, yamlOutput, { encoding: 'utf8' })
}

run()