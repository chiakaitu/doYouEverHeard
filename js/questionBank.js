var questionBank = [
    // 這邊是選擇題
    { //Q1
        audio: "./audio/20thcentury.mp3",
        A: "迪士尼",
        B: "20世紀影業",
        C: "華納兄弟",
        D: "環球影業",
        answer: "B",
        // wrong: "#A, #C, #D"
    },
    { //Q2
        audio: "./audio/BMW.mp3",
        A: "星際大戰",
        B: "英雄聯盟",
        C: "BMW",
        D: "微星科技",
        answer: "C",
        // wrong: "#A, #B, #D"
    },
    { //Q3
        audio: "./audio/baodaoyenjing.mp3",
        A: "中華電信",
        B: "奧迪",
        C: "寶島眼鏡",
        D: "專科",
        answer: "C",
    },
    { //Q4
        audio: "./audio/buluochongtu.mp3",
        A: "部落衝突",
        B: "王室戰爭",
        C: "貓咪大戰爭",
        D: "貓狗大戰",
        answer: "A",
    },
    { //Q5
        audio: "./audio/gaotie.mp3",
        A: "仙劍奇俠傳",
        B: "台灣高鐵",
        C: "台中捷運",
        D: "大潤發",
        answer: "B",
    },
    { //Q6
        audio: "./audio/haoshilianbuowang.mp3",
        A: "中廣流行網",
        B: "警察廣播電臺",
        C: "文茜的異想世界",
        D: "好事聯播網",
        answer: "D",
    },
    { //Q7
        audio: "./audio/huanqiu.mp3",
        A: "迪士尼",
        B: "20世紀影業",
        C: "華納兄弟",
        D: "環球影業",
        answer: "D",
    },
    { //Q8
        audio: "./audio/intel.mp3",
        A: "中華電信",
        B: "intel",
        C: "Windows",
        D: "APPLE",
        answer: "B",
    },
    { //Q9
        audio: "./audio/jialefu.mp3",
        A: "大潤發",
        B: "愛買",
        C: "家樂福",
        D: "全聯",
        answer: "C",
    },
    { //Q10
        audio: "./audio/KFC.mp3",
        A: "肯德基",
        B: "頂呱呱",
        C: "拿坡里",
        D: "麥當勞",
        answer: "A",
    },
    { //Q11
        audio: "./audio/line.mp3",
        A: "Messenger",
        B: "line",
        C: "Discord",
        D: "iPhone",
        answer: "B",
    },
    { //Q12
        audio: "./audio/NOKIA.mp3",
        A: "Sony Ericsson",
        B: "Motorola",
        C: "LG",
        D: "Nokia",
        answer: "D",
    },
    { //Q13
        audio: "./audio/shenmozhita.mp3",
        A: "薩爾達傳說",
        B: "楓之谷",
        C: "神魔之塔",
        D: "超級瑪利歐",
        answer: "C",
    },
    { //Q14
        audio: "./audio/sisibaogan.mp3",
        A: "斯斯保肝",
        B: "若元錠",
        C: "合力他命",
        D: "咳精",
        answer: "A",
    },
    { //Q15
        audio: "./audio/taishin.mp3",
        A: "台新銀行",
        B: "三菱電機",
        C: "日立家電",
        D: "聲寶",
        answer: "A",
    },
    { //Q16
        audio: "./audio/weifubu.mp3",
        A: "三星鬧鈴",
        B: "星際大戰",
        C: "iphone鬧鈴",
        D: "衛福部",
        answer: "D",
    },
    { //Q17
        audio: "./audio/wii.mp3",
        A: "阿滴英文",
        B: "料理東西軍",
        C: "Wii",
        D: "動物森友會",
        answer: "C",
    },
    { //Q18
        audio: "./audio/xueiyin.mp3",
        A: "金幼兒樂",
        B: "雪印",
        C: "雀巢能恩",
        D: "美強生",
        answer: "B",
    },
    { //Q19
        audio: "./audio/zhongguang.mp3",
        A: "Hit FM 聯播網",
        B: "927 魅力亞洲",
        C: "飛碟聯播網",
        D: "中廣流行網",
        answer: "D",
    },
    { //Q20
        audio: "./audio/zhongguoxintuo.mp3",
        A: "全家便利商店",
        B: "玩命關頭",
        C: "中國信託",
        D: "玉山銀行",
        answer: "C",
    },

    // 這邊是問答題
    { //Q1
        audio: "./audio/netflix.mp3",
        answer: "netflix",
        substituteAnswer1: "Netflix",
        substituteAnswer2: "網飛",
        hint: "中英文皆可，就是你想的那個沒錯"
    },
    { //Q2
        audio: "./audio/shopee.mp3",
        answer: "蝦皮APP，寫蝦皮就算對",
        substituteAnswer1: "shopee",
        substituteAnswer2: "蝦皮",
        hint: "請寫出中文名稱 2 字，或英文名稱"
    },
    { //Q3
        audio: "./audio/coinmaster.mp3",
        answer: "coin master，你剛剛攻擊我的村莊?",
        substituteAnswer1: "coin master",
        substituteAnswer2: null,
        hint: "全英文小寫，中間請用空格隔開"
    },
    { //Q4
        audio: "./audio/pornhub.mp3",
        answer: "pornhub",
        substituteAnswer1: "Pornhub",
        substituteAnswer2: null,
        hint: "知之為知之，不知為不知"
    },
    { //Q5
        audio: "./audio/mcdonalds.mp3",
        answer: "麥當勞報報",
        substituteAnswer1: null,
        substituteAnswer2: null,
        hint: "請寫出APP中文名稱，五個字"
    },
    { //Q6
        audio: "./audio/fongzhigu.mp3",
        answer: "楓之谷登入畫面的BGM",
        substituteAnswer1: "maple story",
        substituteAnswer2: "楓之谷",
        hint: "請寫出在哪聽到的，答英文也可，全小寫記得用空格隔開"
    },
    { //Q7
        audio: "./audio/disney.mp3",
        answer: "迪士尼",
        substituteAnswer1: "disney",
        substituteAnswer2: "Disney",
        hint: "沒什麼就答出是哪家公司的Intro，中英文不限"
    },
    { //Q8
        audio: "./audio/quanjia.mp3",
        answer: "全家",
        substituteAnswer1: null,
        substituteAnswer2: null,
        hint: "兩個字的中文，不難吧XD"
    },
    { //Q9
        audio: "./audio/zhonghuadianxin.mp3",
        answer: "中華電信",
        substituteAnswer1: null,
        substituteAnswer2: null,
        hint: "沒什麼能說的，答案是中文，慢慢想吧"
    },
    { //Q10
        audio: "./audio/taitie.mp3",
        answer: "台鐵",
        substituteAnswer1: "台灣鐵路",
        substituteAnswer2: null,
        hint: "回答是哪間公司的就好，兩個字"
    },
    { //Q11
        audio: "./audio/weishibi.mp3",
        answer: "威士比，是咱的兄弟",
        substituteAnswer1: "威士比",
        substituteAnswer2: null,
        hint: "這我不能給提示了"
    },
    { //Q12
        audio: "./audio/weishow.mp3",
        answer: "威秀放電影前的開頭",
        substituteAnswer1: "威秀影城",
        substituteAnswer2: "威秀",
        hint: "答案是中文，就想想在那裡有聽到他吧"
    },
    { //Q13
        audio: "./audio/jiankongcao.mp3",
        answer: "健康操",
        substituteAnswer1: null,
        substituteAnswer2: null,
        hint: "這個總會了吧"
    },
    { //Q14
        audio: "./audio/pokemon.mp3",
        answer: "神奇寶貝",
        substituteAnswer1: "pokemon",
        substituteAnswer2: null,
        hint: "指定要舊的稱呼"
    },
    { //Q15
        audio: "./audio/wakamoto.mp3",
        answer: "Wakamoto 阿哩嘎多",
        substituteAnswer1: "若元錠",
        substituteAnswer2: "wakamoto",
        hint: "中英文皆可，英文全小寫"
    },
    { //Q16
        audio: "./audio/messenger.mp3",
        answer: "Messenger",
        substituteAnswer1: "messenger",
        substituteAnswer2: null,
        hint: "請寫出應用程式名稱，英文(應該也只有英文吧"
    },
    { //Q17
        audio: "./audio/lol.mp3",
        answer: "英雄聯盟",
        substituteAnswer1: "LOL",
        substituteAnswer2: "lol",
        hint: "答出遊戲名稱就好"
    },
    { //Q18
        audio: "./audio/windowson.mp3",
        answer: "Windows 開機的聲音",
        substituteAnswer1: "微軟",
        substituteAnswer2: "windows",
        hint: "答出公司名稱就好英文的話全小寫"
    },
    { //Q19
        audio: "./audio/facetime.mp3",
        answer: "FaceTime語音掛電話的聲音",
        substituteAnswer1: "facetime",
        substituteAnswer2: null,
        hint: "請寫出應用程式名稱就好，英文全小寫"
    },
    { //Q20
        audio: "./audio/BTS.mp3",
        answer: "BIGHIT",
        substituteAnswer1: "BIGHIT MUSIC",
        substituteAnswer2: "BIG HIT",
        hint: "英文全大寫，這我也沒有頭緒，我盡量把可能的答案都列上去"
    },
    { //Q21
        audio: "./audio/steveanddave.mp3",
        answer: "伊偷摟",
        substituteAnswer1: "eToro",
        substituteAnswer2: "etoro",
        hint: "揪竟史蒂夫和戴夫都使用甚麼在進行投資呢"
    },
    { //Q22
        audio: "./audio/audi.mp3",
        answer: "Audi廣告的結尾",
        substituteAnswer1: "奧迪",
        substituteAnswer2: "audi",
        hint: "中文或英文小寫，我很常在電視上聽到，知道算你厲害"
    }
];