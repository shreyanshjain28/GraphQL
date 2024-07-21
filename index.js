import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

//db
import db from './_db.js';

//server setup 
//types - description of data types on graph and relationship and Entry Points kind of queries - Schema
//resolver - resolver to handle queries ( respnse of queries ) for diff data types to make available 

const resolvers = {
        Query : {

            //resolver for entry points ----
            games(){
                return db.games
            },

            reviews() {
                return db.reviews
            },

            authors(){
                return db. authors
            },
            review(_, args ){
                return db.reviews.find((review) => review.id === args.id)
            },
            game(_, args ){
                return db.games.find((game) => game.id === args.id)
            }
        },

        // Game object for nested query having a resolver  --- same as type defined 
        //parent -- it is the reference to the  value returend by the previous resolver i.e - game()

        Game: {
            reviews(parent){
                return db.reviews.filter((rev) => rev.game_id === parent.id)
            }
        },

        Mutation: {
            deleteGame(_,args){
                db.games = db.games.filter((game) => game.id !== args.id)

                return db.games
            },

            addGame(_, args){
                let game = {
                    ...args.game,
                    id: Math.floor(Math.random() * 10000).toString()
                }

                db.games.push(game)
                return db.games
            },

            updateGame(i_,args ){
                db.games  = db.games.map((g) => {
                    if(g.id === args.id) {
                        return {...g, ...args.edits}
                    }
                    return g
                })

                return db.games.find((g) => g.id === args.id)
            } 
        }


}

const server = new ApolloServer({
    typeDefs,
    resolvers
    
})



const {url} = await startStandaloneServer(server , {
    listen: {port: 4000}

})

console.log('server ready at port ', 4000)