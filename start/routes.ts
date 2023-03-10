/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import ArticlesController from 'App/Controllers/Http/ArticlesController'
import RecipesController from 'App/Controllers/Http/RecipesController'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/login', async ({ view }) => {
  return view.render('login')
})

Route.get('/about', async ({ view }) => {
  return view.render('about')
})

Route.get('/article', async ({ view }) => {
  return view.render('article', new ArticlesController().index())
})

Route.get('/recipes', async ({ view }) => {
  return view.render('recipes', new RecipesController().index())
})