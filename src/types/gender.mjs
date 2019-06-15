import config from '@ekino/config'

const choices = [
    'female',
    'male',
    'non_binary',
    'prefer_not_to_say',
].map(gender => ({
    ref: gender,
    label: config.get(`wording.gender.${gender}`)
}))

const template = ({ id }) => ({
    type: 'multiple_choice',
    ref: id,
    title: config.get('wording.gender.title'),
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
    type: 'gender',
    template,
}
