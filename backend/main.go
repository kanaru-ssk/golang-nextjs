package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

type User struct {
	Id    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Age   int    `json:"age"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		db, err := sql.Open("postgres", "postgres://postgres:pass@db:5432/users?sslmode=disable")
		if err != nil {
			log.Fatal(err)
		}
		defer db.Close()

		rows, err := db.Query("SELECT * FROM users")
		if err != nil {
			log.Fatal(err)
		}

		var users []User
		for rows.Next() {
			m := User{}
			rows.Scan(&m.Id, &m.Name, &m.Email, &m.Age)
			users = append(users, m)
		}

		json.NewEncoder(w).Encode(users)
	})

	http.ListenAndServe(":8080", nil)
}
