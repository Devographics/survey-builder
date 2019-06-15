import config from '@ekino/config'

const likeReasons = [
    'elegant_programming_style_patterns',
    'robust_less_error_prone_code',
    'rich_package_ecosystem',
    'fast_performance',
    'well_established_option',
    'easy_learning_curve',
    'powerful_developer_tooling',
    'good_documentation',
    'backed_by_a_great_team_company',
    'simple_lightweight',
    'growing_momentum_popularity',
    'full_featured_powerful',
    'stable_backwards_compatible',
].map(reason => ({
    ref: reason,
    label: config.get(`wording.reasons.${reason}`),
}))

const dislikeReasons = [
    'clumsy_programming_style',
    'buggy_error_prone_code',
    'poor_performance',
    'small_package_ecosystem',
    'new_untested_option',
    'hard_learning_curve',
    'lacking_developer_tooling',
    'bad_documentation',
    'concerns_about_the_team_company',
    'bloated_complex',
    'diminishing_momentum_popularity',
    'limited_lacking_in_features',
    'fast_changing_breaks_often',
].map(reason => ({
    ref: reason,
    label: config.get(`wording.reasons.${reason}`),
}))

const reasonsTemplate = (id, title, reasons) => ({
    type: 'multiple_choice',
    ref: id,
    title,
    validations: {
        required: false,
    },
    properties: {
        randomize: false,
        allow_multiple_selection: true,
        allow_other_choice: true,
        vertical_alignment: true,
        choices: reasons
    }
})

const template = ({ id, label }) => [
    reasonsTemplate(`${id}_like`, `What do you *like* 👍 about *${label}*?`, likeReasons),
    reasonsTemplate(`${id}_dislike`, `What do you *dislike* 👎 about *${label}*?`, dislikeReasons),
]

export default {
    type: 'like_dislike',
    template,
}
