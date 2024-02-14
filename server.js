const express = require("express");
const path = require("path");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

//cors 미들웨어의 사용
const cors = require("cors");
app.use(cors());

// Express 내장 메서드 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공 (React 앱)
app.use(express.static(path.join(__dirname, "choonsim/build")));

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// 데이터베이스 연결
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// POST API 구현
app.post("/submit-form", (req, res) => {
  // 요청 본문에서 데이터 추출
  const { date, nickname, phone, quantity, price } = req.body;

  // SQL 쿼리 작성
  const query =
    "INSERT INTO form (date, nickname, phone, quantity, price) VALUES (?, ?, ?, ?, ?)";

  // 데이터베이스에 쿼리 실행
  connection.query(
    query,
    [date, nickname, phone, quantity, price],
    (error, results, fields) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send("Form submitted successfully");
      }
    }
  );
});

// 모든 GET 요청 처리(React 앱의 엔트리 포인트로 이동)
app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/build/index.html"));
});

// 서버 시작
app.listen(8080, function () {
  console.log("listening on 8080");
});
