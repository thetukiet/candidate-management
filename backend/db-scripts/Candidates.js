/*
 Navicat Premium Data Transfer

 Source Server         : LocalBrandManagementDB
 Source Server Type    : MongoDB
 Source Server Version : 60006 (6.0.6)
 Source Host           : localhost:50100
 Source Schema         : managementplatformbrands

 Target Server Type    : MongoDB
 Target Server Version : 60006 (6.0.6)
 File Encoding         : 65001

 Date: 29/02/2024 14:44:19
*/


// ----------------------------
// Collection structure for Candidates
// ----------------------------
db.getCollection("Candidates").drop();
db.createCollection("Candidates");

// ----------------------------
// Documents of Candidates
// ----------------------------
db.getCollection("Candidates").insert([ {
    _id: ObjectId("65dfba29ef2a0bd5d8ce900f"),
    firstName: "Tuan",
    lastName: "Nguyen",
    gender: "male",
    email: "tuan@gmail.com",
    phoneNumber: "1234",
    currentStage: "HIRED",
    position: "BE Dev",
    subInfo: null
} ]);
db.getCollection("Candidates").insert([ {
    _id: ObjectId("65dfe4a31d16d1ecc670bf5b"),
    firstName: "Hanh",
    lastName: "Nguyen",
    gender: "Female",
    email: "hanh@gmail.com",
    phoneNumber: "09123456",
    currentStage: "OFFERED",
    position: "QC",
    subInfo: null
} ]);
db.getCollection("Candidates").insert([ {
    _id: ObjectId("65dff4861d16d1ecc670bf5c"),
    firstName: "Khoa",
    lastName: "Ngo",
    gender: "male",
    email: "khoa@mail.com",
    phoneNumber: "099999999",
    currentStage: "OFFERED",
    position: "BE",
    subInfo: null
} ]);
db.getCollection("Candidates").insert([ {
    _id: ObjectId("65e0105e1d16d1ecc670bf68"),
    firstName: "Ngoc",
    lastName: "Le My",
    gender: "male",
    email: "ngoc@abc.com",
    phoneNumber: "111-2222",
    currentStage: "APPLIED",
    position: "Designer",
    subInfo: null
} ]);
db.getCollection("Candidates").insert([ {
    _id: ObjectId("65e01e501d16d1ecc670bf6b"),
    firstName: "Test",
    lastName: "First",
    gender: "male",
    email: "www@sss.sss",
    phoneNumber: "111",
    currentStage: "APPLIED",
    position: "1111",
    subInfo: null
} ]);
