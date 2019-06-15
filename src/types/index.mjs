import agreement from './agreement.mjs'
import company_size from './company_size.mjs'
import country from './country.mjs'
import gender from './gender.mjs'
import group from './group.mjs'
import like_dislike from './like_dislike.mjs'
import other from './other.mjs'
import salary_range from './salary_range.mjs'
import statement from './statement.mjs'
import tool from './tool.mjs'
import tools from './tools.mjs'

export const types = {
    agreement,
    company_size,
    country,
    gender,
    group,
    like_dislike,
    other,
    salary_range,
    statement,
    tool,
    tools,
}

export const generateFields = items => items.flatMap(item => {
    if (types[item.type] === undefined) {
        throw new Error(`unrecognized type: '${item.type}'`)
    }

    return types[item.type].template(item)
})
