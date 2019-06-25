const graphql = require('graphql');
const _ = require('lodash');

const Book = require('../models/book');
const Author = require('../models/author');

const {
   GraphQLSchema,
   GraphQLObjectType,
   GraphQLString,
   GraphQLID,
   GraphQLInt,
   GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        //return _.find(authors, { id: parent.authorId });
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        //return _.filter(books, { authorId: parent.id });
      }
    }
  }),
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        //return books;
      }
    },
    book: {
      type: BookType,
      args: { 
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        //return _.find(books, { id: args.id });
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve(parent, args) {
        //return authors;
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        //return _.find(authors, { id: args.id });
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
