var boolean = false;
if (boolean) {
	console.log("trueの処理");
	console.log(boolean);
} else {
	console.log("falseの処理");
	console.log(boolean);
};
/* elseは　後ろの「: (コロン)」のつけ忘れに注意 */
/*　else文に含まれる処理は、インデントして記述する。処理が複数行ある場合も、全てインデントする。インデントしていない部分はelseに含まれない　*/
/* elseの条件が正しく反映されているか確認する*/
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