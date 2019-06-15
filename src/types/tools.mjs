import tool from './tool.mjs'

const template = ({ tools }) => tools.flatMap(t => tool.template(t))

export default {
    type: 'tools',
    template,
}
