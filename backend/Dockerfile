FROM golang:1.21-alpine aS biulder

WORKDIR /backend

COPY go.mod go.sum .
RUN go mod download && go mod verify

COPY *.go .
RUN go build


FROM alpine

WORKDIR /backend

EXPOSE 8080
CMD ["./backend"]