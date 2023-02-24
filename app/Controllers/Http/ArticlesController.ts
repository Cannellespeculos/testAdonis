// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArticlesController {
    public getUser() {
        return { prenom: "Bob", isAdmin: true, hobbies: ["sport", "codage", "danse", "jouer au jeux vidéo"] }
    }

    public index() {
        return {
            articles: [{ title: "le premier titre", content: "le premier contenu"},
             { title: "le deuxième titre", content: "le deuxième contenu"},
             { title: "le troisième titre", content: "le troisième contenu"}]
        }
    }
}
