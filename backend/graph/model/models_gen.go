// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type CreateTodoInput struct {
	Text   string `json:"text"`
	UserID int    `json:"userId"`
}

type CreateUserInput struct {
	Name string `json:"name"`
}

type DeleteTodoInput struct {
	ID int `json:"id"`
}

type DeleteUserInput struct {
	ID int `json:"id"`
}

type Mutation struct {
}

type Query struct {
}

type Todo struct {
	ID     int    `json:"id"`
	Text   string `json:"text"`
	Done   bool   `json:"done"`
	UserID int    `json:"userId"`
	User   *User  `json:"user"`
}

type TodosInput struct {
	UserID int `json:"userId"`
}

type UpdateTodoDoneInput struct {
	ID   int  `json:"id"`
	Done bool `json:"done"`
}

type UpdateTodoTextInput struct {
	ID   int    `json:"id"`
	Text string `json:"text"`
}

type UpdateUserNameInput struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type UserInput struct {
	ID int `json:"id"`
}
