package model

type Todo struct {
	ID     int    `json:"id"`
	Text   string `json:"text"`
	Done   bool   `json:"done"`
	UserId int    `json:"userId"`
	User   User   `json:"user"`
}

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type UserID struct {
	UserId int `json:"userId"`
}

type NewTodo struct {
	Text   string `json:"text"`
	UserId int    `json:"userId"`
}
