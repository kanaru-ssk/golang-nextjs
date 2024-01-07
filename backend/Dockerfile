FROM golang:1.21-alpine

WORKDIR /backend

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY *.go .
RUN go build

EXPOSE 9090
CMD ["./backend"]