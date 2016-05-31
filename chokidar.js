var chokidar = require('chokidar')
var watcher = chokidar.watch('./JS/', {	//watch対象ディレクトリorファイル
	ignored: /[\/\\]\./,	//無視する対象
	persistent:true	//監視を継続するかどうか
	})
 
 
watcher.on('ready', function() { console.log("監視開始"); })
	.on('add', function(path) { console.log("追加ファイル-> " + path); })
	.on('addDir', function(path) { console.log("追加ディレクトリ-> " + path); })
	.on('unlink', function(path) { console.log("削除されました-> " + path); })
	.on('unlinkDir', function(path) { console.log("削除されました-> " + path); })
	.on('change', function(path) { console.log("修正されました-> " + path); })
	.on('error', function(error) { console.log("エラーです-> " + error); })
