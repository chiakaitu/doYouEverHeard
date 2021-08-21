// 從資料庫中隨機抓10題
var aq = [];
for (var i = 20; i <= questionBank.length; i++) {
    aq.push(questionBank[i]);
}
aq.sort(function () {
    return Math.random() - 0.5;
})
aq.length = 10;
console.log(aq)

// 宣告題號 & 得分
var now = 0;
var score = 0;

$(function () {

    // 定義 function
    function updatePage() {

        //抓音源 
        $('audio').prop('src', `${aq[now].audio}`);
        

        // 1.2秒後放音樂
        setTimeout(function () {
            document.getElementById('audio').volume = 0.3;
            document.getElementById('audio').play();
        }, 1000);

        // 重播鈕
        $('#divReplay').on("click", function () {
            document.getElementById('audio').play();
        })

        $('#hintAQ').text(aq[now].hint);

        // 送出
        var temp = '';
        $('#submit').on('click', function () {
            temp = inputAQ.value;
            // console.log(temp);           

            // 答錯時要可以顯示出正確答案
            $('#correctAns').text(`${aq[now].answer}`);

            
            if (temp == aq[now].answer || temp == aq[now].substituteAnswer1 || temp == aq[now].substituteAnswer2) {
                // 成功畫面
                // console.log('success');
                $('#correct, #nextPage').fadeIn();
            } else {
                // 失敗畫面
                // console.log('fail');
                $('#wrong, #nextPage').fadeIn();
            }
        })
    }
    
    // 剛開始先執行一次
    updatePage();
    $('#now').text(`${now}`);

    
    // 換下一題
    $('#nextPage').on('click', function () {
        now += 1;
        $('#now').text(`${now + 1}`);
        // console.log(now);
        
        // 清空input
        $('#inputAQ').val('');
        
        // 如果正確就加分
        if ($('#correct').css('display') == 'block') {
            score += 1;
        }

        // 把結果畫面預設 hide()
        $('#correct, #wrong, #nextPage').hide();

        if (now >= 10) {
            // 成績結算畫面
            console.log('作答完畢');
            $('#score').text(score);
            $('#scorePage').show();
        } else {
            // 重新執行一次 function
            updatePage();
        }
    })
})
