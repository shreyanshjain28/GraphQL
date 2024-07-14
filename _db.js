let games = [
    {id: '1' , title: 'red dead', platform: ['Steam','PS']},
    {id: '2' , title: 'Spiderman 2', platform: ['Steam','PS','X-BOX']},
]

let authors = [
    {id: '1' , name: 'mario', verified: true},
    {id: '1' , name: 'alex', verified: false},
]

let reviews = [
    {id:'1', rating:9, content: 'XYZ', author_id: '1', game_id: '2'},
    {id:'2', rating:10, content: 'XYZ', author_id: '2', game_id: '1'},
    {id:'3', rating:7, content: 'XYZ', author_id: '1', game_id: '1'},
    {id:'4', rating:8, content: 'XYZ', author_id: '2', game_id: '2'},
]

export default {games, authors, reviews}