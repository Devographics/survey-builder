import config from '@ekino/config'

const choices = [
    '1',
    '1_5',
    '5_10',
    '10_20',
    '20_50',
    '50_100',
    '100_1000',
    'more_than_1000',
].map(choice => ({
    ref: choice,
    label: config.get(`wording.company_size.${choice}`)
}))

const template = ({ id }) => ({
    type: 'multiple_choice',
    ref: id,
    title: config.get('wording.company_size.title'),
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
    type: 'company_size',
    template,
}