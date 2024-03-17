document.querySelector('h1').textContent = '要素ノードの変更';
document.querySelectorAll('h1').textContent = '要素ノードの変更';

// // // // // // // // // // // // //
// フォームの送信ボタンを取得
const submitButton = document.querySelector('#post-form input[type="submit"]');


// // // // // // // // // // // // //
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

// // // // // // // // // // // // //
// フォームの送信ボタン要素を取得
const submitButton = document.querySelector('#post-form input[type="submit"]');

// 送信ボタンにクリックイベントリスナーを追加
submitButton.addEventListener('click', function(event) {
  // フォームの送信をキャンセル
  event.preventDefault();

  // タイトルと本文の入力値を取得
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  // #postsのdiv要素を取得
  const postsDiv = document.querySelector('#posts');

  // 入力されたタイトルと本文を#posts内に表示
  postsDiv.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
}

// // // // // // // // // // // // //
    // フォームの送信ボタン要素を取得
const submitButton = document.querySelector('#post-form input[type="submit"]');

// 送信ボタンにクリックイベントリスナーを追加
submitButton.addEventListener('click', function(event) {
  // フォームの送信をキャンセル
  event.preventDefault();

  // フォームの中身を空にする
  document.querySelector('#title').value = '';
  document.querySelector('#content').value = '';
}
// // // // // // // // // // // // //
const postForm = document.querySelector('#post-form');

// マウスがフォーム上に乗ったときのイベントリスナー
postForm.addEventListener('mouseenter', () =>
  postForm.style.backgroundColor = 'yellow';
);

// マウスがフォームから離れたときのイベントリスナー
postForm.addEventListener('mouseleave', () =>
  postForm.style.backgroundColor = 'white';
);

// // // // // // // // // // // // //
const postForm = document.querySelector('#post-form');
const postsDiv = document.querySelector('#posts');
let postCount = 0;

postForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;

  postsDiv.prepend(post);

  postCount++;
  if (postCount > 3) {
    const oldPost = postsDiv.lastElementChild;
    postsDiv.removeChild(oldPost);
    postCount--;
  }

  document.querySelector('#title').value = '';
  document.querySelector('#content').value = '';
});
