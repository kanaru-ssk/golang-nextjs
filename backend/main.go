package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"os"

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
		db, err := sql.Open("postgres", "postgres://postgres:"+os.Getenv("POSTGRES_PASSWORD")+"@db:5432/"+os.Getenv("POSTGRES_DB")+"?sslmode=disable")
		log.Print("POSTGRES_PASSWORD", os.Getenv("POSTGRES_PASSWORD"))
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
