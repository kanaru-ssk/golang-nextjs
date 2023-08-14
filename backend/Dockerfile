FROM golang:1.21-alpine

WORKDIR /backend
COPY . .
RUN go mod download
RUN go build
EXPOSE 9090
CMD ["./backend"]