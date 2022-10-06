package controllers

import (
	"net/http"

	"https://github.com/airsuci/golang-vue/api/responses"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request) {
	responses.JSON(w, http.StatusOK, "API okey")
}
