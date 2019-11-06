# upload-demo

## 1、四个文件上传小demo

- Form-upload
- jax-upload
- Clipboard-upload
- Drag-upload

## 2、后台:nodeJS

使用以下npm模块

- multer 文件上传
- express 服务

## 3、启动方式

```shell
// 进入根目录
npm install && node src/indexjs

// 访问http://localhost:8080
```

## 4、知识点总结:

1. formData.append(name, file);的name要和multer的upload.single(name)对应
2. 上传进度事件是xhr.upload.onprogress而不是xhr.onprogress
3. post FormData时不需要自己手动设置requestHeader
4. e.clipboardData.items是个伪数组,直接e.clipboardData.items[0]可以获取粘贴的对象

`items`是一个`DataTransferItemList`对象，自然里面都是`DataTransferItem`类型

DataTransferItem的属性、方法

### 属性

items`的`DataTransferItem`有两个属性`kind`和`type
| 属性 | 说明                                                         |
| :--- | :----------------------------------------------------------- |
| kind | 一般为`string`或者`file`                                     |
| type | 具体的数据类型，例如具体是哪种类型字符串或者哪种类型的文件，即`MIME-Type` |

### 方法

| 方法        | 参数     | 说明                                                         |
| :---------- | :------- | :----------------------------------------------------------- |
| getAsFile   | 空       | 如果`kind`是`file`，可以用该方法获取到文件                   |
| getAsString | 回调函数 | 如果`kind`是`string`，可以用该方法获取到字符串，字符串需要用回调函数得到，回调函数的第一个参数就是剪切板中的字符串 |
