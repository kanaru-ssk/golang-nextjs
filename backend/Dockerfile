FROM golang:1.22-alpine AS base
WORKDIR /backend

FROM base AS dev
RUN go install github.com/cosmtrek/air@v1.51.0
COPY go.mod go.sum .
RUN go mod download
CMD ["air", "-c", ".air.toml"]

FROM base as builder
COPY go.mod go.sum .
RUN go mod download
COPY . .
RUN go build

FROM alpine AS prd
COPY --from=builder ./backend .

CMD ["./backend"]
