import config from '@ekino/config'

const choices = [
    {
        ref: 'never_heard',
        label: config.get('wording.feature_usage.never_heard'),
    },
    {
        ref: 'heard',
        label: config.get('wording.feature_usage.heard'),
    },
    {
        ref: 'used',
        label: config.get('wording.feature_usage.used'),
    }
]

const featureTemplate = ({ id, label }) => ({
    type: 'multiple_choice',
    ref: id,
    title: label,
    validations: {
        required: false
    },
    properties: {
        randomize: false,
        allow_multiple_selection: false,
        allow_other_choice: false,
        vertical_alignment: true,
        choices,
    }
})

export default ({ id, title, description, features }) => {
    return {
        type: 'group',
        ref: id,
        title,
        properties: {
            description,
            fields: features.map(featureTemplate)
        }
    }
}
