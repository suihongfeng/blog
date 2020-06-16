# 加载指定sb3文件
> <font color="#666">通过sb3文件地址，读取文件数据</font>

```js
function handleUploadFiles (url) {
    if (url !== null && url !== undefined) {
        fetch(url, {
            method: 'GET'
    	})
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader()
            reader.onload = () => {
                vm.start();
                vm.setCompatibilityMode(true);
                vm.setTurboMode(false);
                vm.loadProject(reader.result)
                    .then(() => {
                        // 可以选择性执行
                        // vm.greenFlag();
                    });
            }
            reader.readAsArrayBuffer(blob)
        })
        .catch(error => {
            alert(`sb3文件加载失败 ${error}`)
        })
    }
}
```