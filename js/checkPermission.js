function checkPermission(username, permission) {
  // ユーザーを検索
  const user = users.find(user => user.username === username);

  // ユーザーが見つかった場合、指定されたパーミッションが許可されているかどうかを返す
  if (user) {
    if (permission in user.permissions) {
      return user.permissions[permission];
    } else {
      return false;
    }
  } else {
      // ユーザーが見つからなかった場合は、パーミッションが許可されていないとみなす
      return false;
  }
}

// ユーザーデータ
let users = [
  {
      username: '山田',
      permissions: {
          canRead: true,
          canWrite: true,
          canDelete: false
      }
  },
  {
      username: '佐藤',
      permissions: {
          canRead: false,
          canWrite: true,
          canDelete: false
      }
  },
  // 他のユーザーを追加
];

// サンプル呼び出し
console.log(checkPermission('山田', 'canWrite'));
