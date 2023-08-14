package main

import (
	"encoding/json"
	"net/http"
)

type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		user := User{
			Name: "Kanaru Sasaki",
			Age:  23,
		}

		json.NewEncoder(w).Encode(user)
	})

	http.ListenAndServe(":9090", nil)
}
