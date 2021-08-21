$(function() {
    var firstPage = document.getElementById('firstPage');
    var secondPage = document.getElementById('secondPage');
    var nextPage = document.getElementById('nextPage');

    // 點開遊戲方法
    containerOfRule.onclick = function () {
        explanation.style.display = "flex";
    }
    
    // 換一頁說明頁
    nextPage.onclick = function () {
        firstPage.style.display = "none";
        secondPage.style.display = "flex";
        nextPage.style.display = "none";
    }
    
    // 叉叉關掉說明頁，並把說明頁回到預設值
    closePage.onclick = function () {
        explanation.style.display = "none";
        firstPage.style.display = "flex";
        secondPage.style.display = "none";
        nextPage.style.display = "flex";
    }

    $('#AQ').on('click', function() {
        window.location.href = './gameAQ.html';
    })
})
