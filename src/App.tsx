import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // jsのコード

  // const, let等の変数宣言

  // var val1 = "var変数";
  // console.log(val1);

  // // var変数は上書き可能

  // val1 = "var変数の上書き";
  // console.log(val1);

  // // var変数は再宣言可能

  // var val1 = "var変数を再宣言";
  // console.log(val1);

  // let val2 = "let変数";
  // console.log(val2);

  // letは上書き可能
  // val2 = "let変数の上書き";
  // console.log(val2);

  // // letは再宣言不可能(エラー出る)
  // let val2 = "let変数を再宣言";

  // const val3 = "const変数";
  // console.log(val3);

  // // const変数をは上書き不可（エラー出る)
  // // val3 = "const変数を上書き";

  // const val3 = "const変数を再宣言";

  // constで定義したオブジェクトはプロパティの変更が可能

  // const val4 = {
  //   name: "じゃけえ",
  //   age: 28,
  //   address: "Hiroshima"
  // };
  // val4.name = "jak";

  // console.log(val4);

  // constで定義した配列はプロパティの変更が可能
  const val5 = ["dog", "cat"];
  val5[0] = "bird";
  val5.push("monkey");
  console.log(val5);

  return (
    //
    <div></div>
  );
}

export default App;
