package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

func main() {
	env := getEnv()

	db, err := sql.Open("postgres", "postgres://postgres:"+env.postgresPassword+"@db:"+env.dbPort+"/"+env.postgresDb+"?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	s := server{db: db}

	http.HandleFunc("/", s.handler)
	http.ListenAndServe(":"+env.backendPort, nil)
}

type user struct {
	Id    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Age   int    `json:"age"`
}

type server struct {
	db *sql.DB
}

func (s *server) handler(w http.ResponseWriter, r *http.Request) {
	var users []user
	rows, err := s.db.Query("SELECT * FROM users")
	if err != nil {
		log.Fatal(err)
	}
	for rows.Next() {
		m := user{}
		rows.Scan(&m.Id, &m.Name, &m.Email, &m.Age)
		users = append(users, m)
	}

	json.NewEncoder(w).Encode(users)
}

type env struct {
	postgresDb       string
	postgresPassword string
	dbPort           string
	backendPort      string
}

func getEnv() env {
	postgresDb := os.Getenv("POSTGRES_DB")
	postgresPassword := os.Getenv("POSTGRES_PASSWORD")
	dbPort := os.Getenv("DB_PORT")
	backendPort := os.Getenv("BACKEND_PORT")

	if len(postgresDb) == 0 || len(postgresPassword) == 0 || len(dbPort) == 0 || len(backendPort) == 0 {
		panic("appEnvironment not setting.")
	}

	return env{
		postgresDb,
		postgresPassword,
		dbPort,
		backendPort,
	}
}
