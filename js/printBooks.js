function printBooks(books) {
  for (const book of books) {
      console.log(`『${book.title}』${book.author}`);
  }
}

// サンプルデータ
const books = [
  { title: 'JavaScript入門', author: '山田太郎' },
  { title: 'JavaScriptの絵本', author: '山田次郎' }
];

// 関数の呼び出し
printBooks(books);
