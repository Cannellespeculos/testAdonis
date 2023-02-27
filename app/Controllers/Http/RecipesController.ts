// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RecipesController {
    public index() {
        return {recipes : [{titre : "first recipe", description : "first description" },
                            {titre : "second recipe", description : "second description"}]}
    }
}
