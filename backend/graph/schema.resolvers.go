package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.44

import (
	"backend/graph/model"
	"context"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input model.CreateUserInput) (*model.User, error) {
	var user model.User
	err := r.DB.
		QueryRow("INSERT INTO users (name) VALUES ($1) RETURNING id,name;", input.Name).
		Scan(&user.ID, &user.Name)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// UpdateUserName is the resolver for the updateUserName field.
func (r *mutationResolver) UpdateUserName(ctx context.Context, input model.UpdateUserNameInput) (*model.User, error) {
	var user model.User
	err := r.DB.
		QueryRow("UPDATE users SET name=$1 WHERE id=$2 RETURNING id,name;", input.Name, input.ID).
		Scan(&user.ID, &user.Name)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// DeleteUser is the resolver for the deleteUser field.
func (r *mutationResolver) DeleteUser(ctx context.Context, input model.DeleteUserInput) (int, error) {
	_, err := r.DB.Exec("DELETE FROM users WHERE id=$1;", input.ID)
	if err != nil {
		return 0, err
	}
	return input.ID, nil
}

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.CreateTodoInput) (*model.Todo, error) {
	var todo model.Todo
	err := r.DB.
		QueryRow("INSERT INTO todos (text,user_id) VALUES ($1,$2) RETURNING id,text,done,user_id;", input.Text, input.UserID).
		Scan(&todo.ID, &todo.Text, &todo.Done, &todo.UserID)
	if err != nil {
		return nil, err
	}
	return &todo, nil
}

// UpdateTodoText is the resolver for the updateTodoText field.
func (r *mutationResolver) UpdateTodoText(ctx context.Context, input model.UpdateTodoTextInput) (*model.Todo, error) {
	var todo model.Todo
	err := r.DB.
		QueryRow("UPDATE todos SET text=$1 WHERE id=$2 RETURNING id,text,done,user_id;", input.Text, input.ID).
		Scan(&todo.ID, &todo.Text, &todo.Done, &todo.UserID)
	if err != nil {
		return nil, err
	}
	return &todo, nil
}

// UpdateTodoDone is the resolver for the updateTodoDone field.
func (r *mutationResolver) UpdateTodoDone(ctx context.Context, input model.UpdateTodoDoneInput) (*model.Todo, error) {
	var todo model.Todo
	err := r.DB.
		QueryRow("UPDATE todos SET done=$1 WHERE id=$2 RETURNING id,text,done,user_id;", input.Done, input.ID).
		Scan(&todo.ID, &todo.Text, &todo.Done, &todo.UserID)
	if err != nil {
		return nil, err
	}
	return &todo, nil
}

// DeleteTodo is the resolver for the deleteTodo field.
func (r *mutationResolver) DeleteTodo(ctx context.Context, input model.DeleteTodoInput) (int, error) {
	_, err := r.DB.Exec("DELETE FROM todos WHERE id=$1;", input.ID)
	if err != nil {
		return 0, err
	}
	return input.ID, nil
}

// User is the resolver for the user field.
func (r *queryResolver) User(ctx context.Context, input model.UserInput) (*model.User, error) {
	var user model.User
	err := r.DB.
		QueryRow("SELECT id,name FROM users WHERE id = $1 LIMIT 1;", input.ID).
		Scan(&user.ID, &user.Name)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	rows, err := r.DB.Query("SELECT id,name FROM users;")
	if err != nil {
		return nil, err
	}
	var users []*model.User
	for rows.Next() {
		var user model.User
		err := rows.Scan(&user.ID, &user.Name)
		if err != nil {
			return users, err
		}
		users = append(users, &user)
	}
	return users, nil
}

// Todos is the resolver for the todos field.
func (r *queryResolver) Todos(ctx context.Context, input model.TodosInput) ([]*model.Todo, error) {
	rows, err := r.DB.Query("SELECT id,text,done,user_id FROM todos WHERE user_id = $1;", input.UserID)
	if err != nil {
		return nil, err
	}
	var todos []*model.Todo
	for rows.Next() {
		var todo model.Todo
		err := rows.Scan(&todo.ID, &todo.Text, &todo.Done, &todo.UserID)
		if err != nil {
			return todos, err
		}
		todos = append(todos, &todo)
	}
	return todos, nil
}

// User is the resolver for the user field.
func (r *todoResolver) User(ctx context.Context, obj *model.Todo) (*model.User, error) {
	var user model.User
	err := r.DB.
		QueryRow("SELECT id,name FROM users WHERE id = $1 LIMIT 1;", obj.UserID).
		Scan(&user.ID, &user.Name)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// Todo returns TodoResolver implementation.
func (r *Resolver) Todo() TodoResolver { return &todoResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type todoResolver struct{ *Resolver }
