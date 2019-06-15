const template = ({ id, title }) => ({
    type: 'long_text',
    ref: id,
    title,
    validations: {
        required: false
    },
})

export default {
    type: 'other',
    template,
}
