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

 Date: 29/02/2024 14:43:28
*/


// ----------------------------
// Collection structure for Users
// ----------------------------
db.getCollection("Users").drop();
db.createCollection("Users");

// ----------------------------
// Documents of Users
// ----------------------------
db.getCollection("Users").insert([ {
    _id: ObjectId("65de25428c30a213b31ffe17"),
    UserName: "dev@gmail.com",
    Password: "gzeNz2hhFwWLkjJxysZ/r2AMUsYtOANDSfazX+81PIU=",
    FirstName: "Dev",
    LastName: "Account",
    IsActive: true,
    LastLoggedIn: [
        NumberLong("638447885524574300"),
        NumberInt("0")
    ],
    SerialNumber: "d3fcf228866d735956a8c96159e5455d",
    Roles: [
        {
            Name: "User"
        }
    ],
    Tokens: [
        {
            AccessTokenHash: "P3LG2ihzFuofE0MQhzQy1+lGNUHgMmNaiK7xc/5HlfM=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447741498342710"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "tcKlVFmS82MEOO9ILo/bpEYXAAnWm9qt5u0Jn7EStgc=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450141498342710"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "mOEmTW9Dw6s+ieqO+Ie42YTj9dddhkwMsfHfv/jnABg=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447745109654240"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "tZq51m2Tg9+oohHM2co/QMoVce6TXYJy+M31PoLtTBs=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450145109654240"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "4oKj+R3keTzWA9hxe8utyjz4UD74uzVfUqYWxcCcf7I=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447745143239200"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "3CEue8URk7fvrZUnWyaVwJcXA/UD8BxxXbhvtDFCpXE=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450145143239200"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "OdZx5qixZZT/MBrldTRi2M6Mx6bnWYmjfr5H6P/4LCY=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447753509168870"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "mXM7RAIiIeyipcn2+2GUVQVDDgTkH9/yI/C1CkQMWoI=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450153509168870"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "jLU88Y/1mUkIvvwvDGfaOONs4y8oU5jqEABZiT9V0SE=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447819227674090"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "WXh0BqEwWsP6AqNlN0qGZKZwlSKnZ4gRCd/WB6tcbug=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450219227674090"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "72q/qQUp/CtZo34SKA2pM2DWOnErAt7RRaHX8ezHFLM=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447833440616880"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "hYAJ/0USKazipsswc1++zc03y0Etl32cqNZUNHaPFo4=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450233440616880"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "qbwpY9uV8mzejyJsTJ7kVcT3xhURG3RxGsIQ1t32wEQ=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447834227070840"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "XzEqlm+to7+iqpee2gQqiPuDvSVzSMv9fcwcbXdbamo=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450234227070840"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "YUHRzn+2HAGrCUIZRVEZzCytYg6PwLPfq/X8xt++xMw=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447835842578360"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "SHBi1bvZoFX2KH5DLsYMmgNxtuADGN8tdukyBYGdVXw=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450235842578360"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "t6sjxpJNtnb2NHcTvyZQHjm8OIzx4O9Kh5cpSsFnO5o=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447838792849660"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "yeikR2DJ7nc9hduYTKAmz2fq2g1X2dHTwsA5KnRckwY=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450238792849660"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "Kr8Yd27C340FoLb21yEaKieQ7NEdr4abePqSGILGt0I=",
            AccessTokenExpiresDateTime: [
                NumberLong("638447990697224630"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "FCqoCoyQ66B4PKwkdSyFN0FIx5OtAN9Ln5WyoHIYzt0=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450390697224630"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "YvNxqFONkLCJVzoMW8fVjV+x9YNa4eNxFYZvflfmH+k=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448154247183700"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "CKR3vTucgzZVX0Muz87C72U/QfLBe47TcjWM/4AdICg=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450554247183700"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "yXHrsh0mFTGjO80oRIYhx6DQeBFnmqIObvazSDnCmQM=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448157122258840"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "SJ84eKHr4nqYxX4VawgO6ZSlkEjY80DYJUI0z6Lc5oE=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450557122258840"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "/wJedYURWMCjggiZEmn1tnD5w7d+zXebQksM1VMTxT4=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448169940949070"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "mxkFMTWDMUje8WB+0L7I0eM20KGbUNyNPdpu3i6OZbU=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450569940949070"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "ua3y4/SD1LNK3drlCJVXKGgYK+51vwHBQ74tvTgdtRQ=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448175975016770"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "1AZBzxoJmf4ISYUKbR4KNbRwq5dod/X6k6CjbwJgamM=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450575975016770"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "Fn0WL0oLQ2+c+k1o4niCkt04otXLdwTAgpsbHPrZojU=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448187985948510"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "cgbfGszljSxO+Fv4tZpMq+79P5BFsz+RHruoi9xAYfQ=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450587985948510"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "pecOgp4mWJzy9fP/LV+jvTKWzNZo5gi4PsLrk/ExD3Y=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448188003339510"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "4qXfu8C31pM4aYyE8vGNjvAkX1NHFy0Gt3Ozpnck6H8=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450588003339510"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "FU1b6et9m8vgvaosJTAQrj/IMGwb7FiMDcGta0ejQlk=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448206300783860"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "nhbhj0TNIu4ut1F7BaxVlgAF0u2X3wfYsY61IG676L8=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450606300783860"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "hJor03RaO5lNmuO1Z+K2qeLtrHXI5c5vtzSxNUpRf/Y=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448214483905400"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "M6NKHI4Fn6c6A0JLPI2O/2u9u8WiVzFFrunWV4lJqPw=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450614483905400"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "GlPWCE1ALfyj7ErqAvG3f62dtUNCq7AqN92AI8c4M1M=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448298503218460"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "j4PC57NAafN0xkuxi4RvtqjAb0oUfT5Pc0rUImbfwFQ=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450698503218460"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "9fZE5Ohc2+ZUbTDKhTCz+85JaW9AYK+oiq78f10A+Vk=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448320044317000"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "ZTQjLGkY67+uB2TP2/T4BymdVE7/mDdj5+jf7vaZkl8=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450720044317000"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "9Y7/k/l3quE/xEOhUDn35cJlKDaAWsUezlVYLlgMlyw=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448321563278010"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "ksRne9iozoFOJoV/3msvwyh2cz8P1yWDSVIUIhn44jI=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450721563278010"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "RipL/mdTE4CNBdz395MeBnZs3LJ7wone8Lro/qrGfyU=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448321759548670"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "zzjdRtqa08ZkZoVN4RAxMHfPcIlRTvvqUz2t6PKUq6g=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450721759548670"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "1tVj6n0ffYxhLCUhNayvSYVt9fMv1bn11IIgHhFDuME=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448321914182260"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "KfXbI5SnofPliXot6Rr+71HSwTRXRaVewZR/mQZzVFw=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450721914182260"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "wYoLhpoyFHMJe1Uq2xCdq/kLYl3F8VarMSvMfG6sgNM=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448323332642320"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "VfQIMF1VchTbGGK+j+M4VUlNu4UoiWkjP8wN6f1YfwI=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450723332642320"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "3hhYASzUZylqTK3e28L+78T+50cgm6RrtDwVlccqGXY=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448329869625910"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "NqZDbZCVEry4AKz4Vf/LboqRrrEzKZr+QHzRdWlRQSA=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450729869625910"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "/MhV2s5AKsjPdsIWEk3muWzSKH2cNkIM5FoFnct2lC0=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448331401328710"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "JaeptolyD0k6Si7WfT7veIapZqkGwX+PRlbTtvhXkhg=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450731401328710"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "KzKFwwRKmzgFfb+i10ynivGn67LXX4c/YICzKpN+wd0=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448332194376690"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "i0GPo0VHcv842yBp2ejoU5ehlBoKttJOA7AdwKT3MA0=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450732194376690"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "S4QCfA00m6F0tsy43BhXqeb43zKjKFgroNnakYl625s=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448336104015780"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "EouYsZp38ewTCAdMRbu0eUmng43w0LiOHYh5jesPU4Y=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450736104015780"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "INnDL7U874CI+TsJsA8nXh04xQN6v3M9Ptey9sWVFko=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448336971261880"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "u7FIqLeFW50UR5TsiRMrgnQc+NCH9eOfvoZkgqEVIJQ=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450736971261880"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "iZUcRffC/Y92Gmj6Z+HK8tjh9yw6nC9E5LvyrmNtOpI=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448337451632230"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "hcfu2pWUq7CMCIiujSU9kVUIV74RybGVgSEW+BJhV2Y=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450737451632230"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "O1N+ytfoTAanrVHLf4shM3GKK+ZH74WAZ4s8OX7zHyA=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448339340839450"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "JYP4BIquRYwYegH4ccFkrewoHJOWzAYfJaKhkr0geOU=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450739340839450"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "3nBnYmtVnyz9fMpKEf4DKY/xuV8EkiuSKwq/wmiGS0c=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448339450565520"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "Dmk3nfdrRxpnFBwpVyEEsy2+BoIYwFE/s5ovLAHxC5A=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450739450565520"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "99adrfiEsj1b1fkeOM7wf9riZiXU90o2Iu0Aj8hRMJ8=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448340847968270"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "7MUUiL9JAdfKSwY6A8tU0OvZO14E+1hZ7bVhD8RBL0c=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638450740847968270"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "q4U4cF02M2S/T27fowc3yuwq/WlGQZnTzNRuPCoJie8=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448776155837860"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "z/uVVj0wKzJzqwC5HloQcoHRPzlTF/Hx7WJ9JghuCqI=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638451176155837860"),
                NumberInt("0")
            ]
        },
        {
            AccessTokenHash: "fQfri7228Enp/dkNyTNjRC9W/ZLsuCWl+YmIQmfBbRs=",
            AccessTokenExpiresDateTime: [
                NumberLong("638448903737595760"),
                NumberInt("0")
            ],
            RefreshTokenIdHash: "kTSH4MEEYkWyw9br152lBt6ePAUquZBhdXthO59frTY=",
            RefreshTokenIdHashSource: null,
            RefreshTokenExpiresDateTime: [
                NumberLong("638451303737595760"),
                NumberInt("0")
            ]
        }
    ]
} ]);
