import config from '@ekino/config'

const choices = config.get('countries').map(country => ({
    label: country
}))

const template = ({ id }) => ({
    type: 'dropdown',
    ref: id,
    title: config.get('wording.country.title'),
    validations: {
        required: false
    },
    properties: {
        alphabetical_order: true,
        choices,
    }
})

export default {
    type: 'country',
    template,
}
