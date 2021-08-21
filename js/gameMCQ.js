// 產生新問題 - 無法自動撥放歌曲 play() failed because the user didn't interact with the document first.
// 從開始頁進來就沒問題，是 chrome 禁止 autoplay 的關係

// 從資料庫中隨機抓10題
var mcq = [];
for (var i = 0; i <= 19; i++) {
    mcq.push(questionBank[i]);
}
mcq.sort(function () {
    return Math.random() - 0.5;
})
mcq.length = 10;
// console.log(mcq)

// 宣告題號 & 得分
var now = 0;
var score = 0;

$(function () {

    // 定義 function
    function updatePage() {

        //抓音源 
        $('audio').prop('src', `${mcq[now].audio}`);
        

        // 1.2秒後放音樂
        setTimeout(function () {
            document.getElementById('audio').volume = 0.3;
            document.getElementById('audio').play();
        }, 1000);

        // 填入選項
        $('#answerA').text(`${mcq[now].A}`);
        $('#answerB').text(`${mcq[now].B}`);
        $('#answerC').text(`${mcq[now].C}`);
        $('#answerD').text(`${mcq[now].D}`);

        // 延遲後顯示選項
        setTimeout(function () {
            $('#answerA').fadeIn();
        }, 0);
        setTimeout(function () {
            $('#answerB').fadeIn();
        }, 500);
        setTimeout(function () {
            $('#answerC').fadeIn();
        }, 1000);
        setTimeout(function () {
            $('#answerD').fadeIn();
        }, 1500);


        // 重播鈕
        $('#divReplay').on("click", function () {
            document.getElementById('audio').play();
        })

        // 改版 成功！
        // 想辦法讓 if 判斷可以拉出來做（成果是把 onclick 拉出來）
        var temp = '';
        $('#A, #B, #C, #D').on('click', function (e) {
            temp = $(this).prop('id');
            // console.log(temp);           

            // 答錯時要可以顯示出正確答案
            $('#correctAns').text(`${mcq[now][mcq[now].answer]}`);

            // 屏蔽選項以再次啟用淡入效果
            $('#answerA, #answerB, #answerC, #answerD').hide();

            if (temp == mcq[now].answer) {
                // 成功畫面
                // console.log('success');
                $('#correct, #nextPage').fadeIn();
            } else {
                // 失敗畫面
                // console.log('fail');
                $('#wrong, #nextPage').fadeIn();
            }
            // 為甚麼作答第一題時有 1 個 onclick 事件，作答第二題時會有 2 個 onclick 事件...
            // console.log(e);
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


// // No.1 版（資料庫需要建立錯誤答案區）
// // 選取成功與失敗
// $(`#${mcq[now].answer}`).on('click', function () {
//     // 這裡要製作成功的畫面

//     // 要加分
// })

// $(`${mcq[now].wrong}`).on('click', function () {
//     // 這裡要製作失敗畫面

//     // 要告知正解
// })

// No.2版
// if (answer.clicked == true) 失敗

// No.3版

// 靈感 - 每個按鈕都做onclick，然後各自判斷

// // 成功 但要重複的 code 四次
// var temp = '';
// $('#A').on('click', function () {
//     temp = $(this).prop('id');
//     console.log(temp);

//     if (temp == mcq[now].answer) {
//         // 成功畫面
//         console.log('success');
//     } else {
//         // 失敗畫面
//         console.log('fail');
//     }
// })
// $('#B').on('click', function () {
//     temp = $(this).prop('id');
//     console.log(temp);

//     if (temp == mcq[now].answer) {
//         // 成功畫面
//         console.log('success');
//     } else {
//         // 失敗畫面
//         console.log('fail');
//     }
// })
// $('#C').on('click', function () {
//     temp = $(this).prop('id');
//     console.log(temp);

//     if (temp == mcq[now].answer) {
//         // 成功畫面
//         console.log('success');
//     } else {
//         // 失敗畫面
//         console.log('fail');
//     }
// })
// $('#D').on('click', function () {
//     temp = $(this).prop('id');
//     console.log(temp);

//     if (temp == mcq[now].answer) {
//         // 成功畫面
//         console.log('success');
//     } else {
//         // 失敗畫面
//         console.log('fail');
//     }
// })
// 靈感 - 每個按鈕都做onclick，然後return A - D
// 沒做 （上面的方法足矣）
