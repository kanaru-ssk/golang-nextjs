package main

import (
	"backend/graph"
	"database/sql"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"

	_ "github.com/lib/pq"
)

func main() {
	port, dbName, dbPass, dbPort := getEnvs()

	db, err := sql.Open("postgres", "postgres://postgres:"+dbPass+"@db:"+dbPort+"/"+dbName+"?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		DB: db,
	}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func getEnvs() (string, string, string, string) {
	port := os.Getenv("BACKEND_PORT")
	dbName := os.Getenv("POSTGRES_DB")
	dbPass := os.Getenv("POSTGRES_PASSWORD")
	dbPort := os.Getenv("DB_PORT")
	if port == "" || dbName == "" || dbPass == "" || dbPort == "" {
		log.Fatal("environment variable not found")
	}

	return port, dbName, dbPass, dbPort
}
