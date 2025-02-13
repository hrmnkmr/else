var boolean = false;
if (boolean) {
	console.log("trueの処理");
	console.log(boolean);
} else {
	console.log("falseの処理");
	console.log(boolean);
};
/* 
	① elseを使用する時の注意点
	- elseの前に :（コロン）をつけない
	- else文に含まれる処理は、すべて `{}` で囲み、適切にインデントする
	- elseの後には `{}` を省略せずに書く
*/

/* 
	② JavaScriptで実装した時の確認ポイント
	- elseの条件が正しく反映されているか確認する
	- 想定外の値でも適切に処理されるかテストする
	- console.log() を使って、想定通りの分岐に入るか確認する
*/

var num = 100
if (num === 90) {
	console.log("falseの処理");
	console.log(num);
} else {
	console.log("trueの処理");
	console.log("100");
}
var num = 70;
if (num > 80) {
	console.log("falseの処理");
	console.log("numは80より大きいです。");
} else {
	console.log("trueの処理");
	console.log("numは80以下です。");
}

var fruit = "banana";
if (fruit === "apple") {
	console.log("falseの処理");
	console.log("これはリンゴです。");
} else if (fruit === "orange") {
	console.log("falseの処理");
	console.log("これはオレンジです。");
} else {
	console.log("trueの処理");
	console.log("これはリンゴでもオレンジでもありません。"); // `banana` なので `else` に入る
}
