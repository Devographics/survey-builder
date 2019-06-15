import config from '@ekino/config'

const choices = [
    'none',
    '0_10',
    '10_30',
    '30_50',
    '50_100',
    '100_200',
    '200_more',
].map(choice => ({
    ref: choice,
    label: config.get(`wording.salary_range.${choice}`)
}))

const template = ({ id }) => ({
    type: 'multiple_choice',
    ref: id,
    title: config.get('wording.salary_range.title'),
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

export default {
    type: 'salary_range',
    template,
}