document.querySelector('h1').textContent = '要素ノードの変更';
document.querySelectorAll('h1').textContent = '要素ノードの変更';


// フォームの送信ボタンを取得
const submitButton = document.querySelector('#post-form input[type="submit"]');

// 送信ボタンにクリックイベントリスナーを追加
submitButton.addEventListener('click', function(event) {
    // フォームの送信をキャンセル
    event.preventDefault();

    // タイトルと本文の入力値を取得
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // コンソールに出力
    console.log('タイトル:', title);
    console.log('本文:', content);
});