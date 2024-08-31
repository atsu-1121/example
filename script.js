//$("main").fadeIn(1000);
$("main").slideDown(500);

//1.Save クリックイベント
$("#save").on("click",function () {
    const value = $("#text_area").val();
    localStorage.setItem("memo", value);
    alert("保存しました");
});

//2.clear クリックイベント
$("#clear").on("click",function () {
    localStorage.removeItem("memo");
    alert("削除しました");
    $("#text_area").val("");
});

//3.ページ読み込み：保存データ取得表示
if (localStorage.getItem("memo")) {
    const value = localStorage.getItem("memo");
    $("#text_area").val(value);
}