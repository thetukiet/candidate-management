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

 Date: 29/02/2024 14:43:12
*/


// ----------------------------
// Collection structure for Stages
// ----------------------------
db.getCollection("Stages").drop();
db.createCollection("Stages");

// ----------------------------
// Documents of Stages
// ----------------------------
db.getCollection("Stages").insert([ {
    _id: "65de25428c30a213b31ffe10",
    name: "Applied",
    code: "APPLIED",
    theme: "NORMAL",
    movableStages: [
        "INTERVIEWING",
        "CANCELLED"
    ],
    subInfo: { },
    displayIndex: 0
} ]);
db.getCollection("Stages").insert([ {
    _id: "65de25428c30a213b31ffe22",
    code: "INTERVIEWING",
    displayIndex: 1,
    movableStages: [
        "OFFERED",
        "FAILED",
        "CANCELLED"
    ],
    name: "Interviewing",
    subInfo: { },
    theme: "NORMAL"
} ]);
db.getCollection("Stages").insert([ {
    _id: "aade25428c30a213b31ffe17",
    code: "OFFERED",
    movableStages: [
        "HIRED",
        "CANCELLED"
    ],
    name: "Offered",
    subInfo: { },
    theme: "NORMAL",
    displayIndex: 2
} ]);
db.getCollection("Stages").insert([ {
    _id: "6bde25428c30a213b31ffe17",
    code: "HIRED",
    displayIndex: 3,
    movableStages: [
        "CANCELLED"
    ],
    name: "Hired",
    subInfo: { },
    theme: "SUCCESS"
} ]);
db.getCollection("Stages").insert([ {
    _id: "47de25428c30a213b31ffe17",
    name: "Failed",
    code: "FAILED",
    theme: "FAILED",
    movableStages: [ ],
    subInfo: { },
    displayIndex: 4
} ]);
db.getCollection("Stages").insert([ {
    _id: "18de25428c30a213b31ffe17",
    name: "Cancelled",
    code: "CANCELLED",
    theme: "FAILED",
    movableStages: [ ],
    subInfo: { },
    displayIndex: 5
} ]);
