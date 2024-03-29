/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      id\n      text\n      done\n    }\n  }\n": types.CreateTodoDocument,
    "\n  query findTodos($input: TodosInput!) {\n    todos(input: $input) {\n      id\n      text\n      done\n    }\n  }\n": types.FindTodosDocument,
    "\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n    }\n  }\n": types.CreateUserDocument,
    "\n  query findUser($input: UserInput!) {\n    user(input: $input) {\n      id\n      name\n    }\n  }\n": types.FindUserDocument,
    "\n  query findUsers {\n    users {\n      id\n      name\n    }\n  }\n": types.FindUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      id\n      text\n      done\n    }\n  }\n"): (typeof documents)["\n  mutation createTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      id\n      text\n      done\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findTodos($input: TodosInput!) {\n    todos(input: $input) {\n      id\n      text\n      done\n    }\n  }\n"): (typeof documents)["\n  query findTodos($input: TodosInput!) {\n    todos(input: $input) {\n      id\n      text\n      done\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findUser($input: UserInput!) {\n    user(input: $input) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query findUser($input: UserInput!) {\n    user(input: $input) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findUsers {\n    users {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query findUsers {\n    users {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;