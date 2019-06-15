import { generateFields } from './index.mjs'

const template = ({ id, title, description, items }) => ({
    type: 'group',
    ref: id,
    title,
    properties: {
        description,
        fields: generateFields(items)
    }
})

export default {
    type: 'group',
    template
}