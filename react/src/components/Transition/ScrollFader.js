/**
 * [機能説明]
 * スクロールに応じてフェードイン、フェードアウトするコンポーネント
 */
// TODO:後でディレクトリ構成見直す。。。

import React from "react";
import UseScroll from '../Utility/UseScroll';
import MyHeading from "../MyHeading";

function scrollFader(props) {
    // スクロール位置取得
    const scrollPosition = UseScroll();
    console.log(scrollPosition);

    // TODO:スクロールの画面のyの閾値表示を定義
    const threshold = '300';
    console.log(window.innerHeight);

    return (
        <>
        {scrollPosition > threshold ? <MyHeading>{props.children}</MyHeading>: ''}
        </>
    )
}

export default scrollFader;

