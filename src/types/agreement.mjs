import config from '@ekino/config'

const labels = {
    left: config.get('wording.agreement.strongly_disagree'),
    center: config.get('wording.agreement.neutral'),
    right: config.get('wording.agreement.strongly_agree'),
}

const template = ({ id, title }) => ({
    type: 'opinion_scale',
    ref: id,
    title,
    validations: {
        required: false
    },
    properties: {
        steps: 5,
        start_at_one: false,
        labels
    }
})

export default {
    type: 'agreement',
    template,
}
