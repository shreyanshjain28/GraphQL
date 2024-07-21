export const typeDefs = `#graphql

    type Game{
        id: ID!                     
        title: String!
        Platform : [String!]!
        reviews: [Review!]
         
    }

    type Review{
        id: ID
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    
    type Query{
        reviews: [Review]
        review(id: ID!) : Review
        game(id: ID!) : Game
        games: [Game]
        authors: [Author]
    }

    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): [Game]
        updateGame(id: ID!, edits: editsGameInput! ): Game
    }


    input AddGameInput {
        title: String!,
        Platform: [String!]!
       
    }

    input editsGameInput {
        title: String,
        Platform: [String!]
       
    }
    
`
//query - important - to define entry point and return type ( if one - means single entry point and then they can explore more from there )   


//input - we create a special input type to accept arguments as parameters. which can be used in mutation as single parameters

//! - required ,not null 
// data types - int/ float / string / boolean / ID
//[String!] - array should not be empty
