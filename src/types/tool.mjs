import config from '@ekino/config'
import like_dislike from './like_dislike.mjs'

const choices = [
    'never_heard',
    'not_interested',
    'interested',
    'would_use',
    'would_not_use',
].map(choice => ({
    ref: choice,
    label: config.get(`wording.tool_usage.${choice}`)
}))

const template = ({ id, label }) => [
    {
        type: 'multiple_choice',
        ref: `${id}_usage`,
        title: label,
        validations: {
            required: false,
        },
        properties: {
          randomize: false,
          allow_multiple_selection: false,
          allow_other_choice: false,
          vertical_alignment: true,
          choices,
        }
    },
    ...like_dislike.template({ id, label }),
]

export default {
    type: 'tool',
    template,
}
