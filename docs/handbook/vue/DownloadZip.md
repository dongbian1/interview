---
title: 批量下载图片
author: 陈佳鑫
date: '2023-03-31'
---

使用`jszip`压缩图片打包成ZIP，通过`file-saver`进行浏览器下载

```npm
npm install jszip
npm install file-saver
```

### 代码块 ###
```ts
import JSZip from 'jszip'
import FileSaver from 'file-saver'

//转换图片为base64格式
const getImageBase64 = (image: HTMLImageElement) => {
  // 创建一个画布
  const canvas = document.createElement('canvas')
  // 让画布的宽高等于图片的宽高
  canvas.width = image.width
  canvas.height = image.height
  // 然后在画布上进行画画
  const ctx = canvas.getContext('2d')
  // 开始画图片，1.绘制的对象2.绘制的位置，3绘制的宽高
  ctx?.drawImage(image, 0, 0, image.width, image.height)
  return canvas.toDataURL()
}

/**
 * 批量下载图片
 * @param sourceList 需要下载图片对象
 * @param zipName 压缩包名称
 */
export const downloadZip = async (sourceList: Array<{ imgUrl: string; name: string }>, zipName: string) => {
  return new Promise((resolve, reject) => {
    //创建一个压缩对象
    const zip = new JSZip()
    // 创建 zipName 文件夹
    const fileFolder = zip.folder(zipName)
    const fileList: Array<{ name: string; img: string }> = []
    for (let i = 0; i < sourceList.length; i++) {
      //压缩后的每张图片对应名
      const name = sourceList[i].name
      //创建图片对象 设置图片基本信息
      const image = new Image()
      // 设置 crossOrigin 属性，解决图片跨域报错
      image.setAttribute('crossOrigin', 'Anonymous')
      //设置图片地址----稍后进行base64转换
      image.src = sourceList[i].imgUrl
      //图片下载
      image.onload = async () => {
        //路径base64转换
        const url = await getImageBase64(image)
        fileList.push({
          //压缩名
          name: name,
          //去掉base64文件标识，img是文件形式
          img: url.substring(22),
        })
        //确保每个数据都遍历完
        if (fileList.length === sourceList.length) {
          //确保数据不为空
          if (fileList.length) {
            for (let k = 0; k < fileList.length; k++) {
              fileFolder?.file(`${fileList[k].name}.png`, fileList[k].img, {
                base64: true,
                // STORE：默认不压缩 DEFLATE：需要压缩
                compression: 'DEFLATE',
                // 压缩等级1~9    1压缩速度最快，9最优压缩方式
                compressionOptions: {
                  level: 9,
                },
              })
            }
            // 压缩的结果为blob类型（二进制流）,可用作文件上传
            zip.generateAsync({ type: 'blob' }).then(content => {
              // 直接在浏览器打成zipName.zip包并下载，saveAs依赖的js是FileSaver.js
              FileSaver.saveAs(content, `${zipName}.zip`)
              resolve("打包完成")
            })
          }
        }
      }
    }
  })
}
```