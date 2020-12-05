package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func handlerFunc(rep http.ResponseWriter, req *http.Request) {
	var tmp = []byte("j'en ai marre")

	json, _ := json.Marshal(tmp)
	ioutil.WriteFile("todo_list.json", json, 0777)
}

func main() {
	fileServer := http.FileServer(http.Dir("./todo_list"))

	http.Handle("/", fileServer)
	http.HandleFunc("/add", handlerFunc)

	fmt.Printf("Starting server at port 8080\n")

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
