# upload-download-nodejs

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/myifeng/upload-download-nodejs/CodeQL)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/myifeng/upload-download-nodejs)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/myifeng/upload-download-nodejs/koa)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/myifeng/upload-download-nodejs/@koa/router)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/myifeng/upload-download-nodejs/multer)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/myifeng/upload-download-nodejs/@koa/multer)
![license](https://img.shields.io/github/license/myifeng/upload-download-nodejs)

*[English](README.md)  ∙ [简体中文](README.zh-CN.md)*

**A file upload and download module for nodejs.**

**It is out of business and returns a collection of file paths that you can decide how to use and where to use。**

## Usage

- ### Upload
``` http request
POST /appendix/test
Content-Type: multipart/form-data; boundary=WebAppBoundary

--WebAppBoundary
# File upload
Content-Disposition: form-data; name="file"; filename="demo.tar.gz"
Content-Type: application/x-gzip

# Here you specify file to upload
< ../../tar/demo.tar.gz
--WebAppBoundary--

# return a collection of file paths
["\\appendix\\test\\daad5d07-2be6-44fa-978c-1581931a63a2\\demo.tar.gz"] (Windows)
["/appendix/test/daad5d07-2be6-44fa-978c-1581931a63a2/demo.tar.gz"] (Linux/MAC OS)
```

- ### Download

```http request
GET /appendix/test/daad5d07-2be6-44fa-978c-1581931a63a2/demo.tar.gz
```
## Related Efforts

- [upload-download-java](https://github.com/myifeng/upload-download-Java) - A file upload and download module for Java.

## Maintainers

[@myifeng](https://github.com/myifeng).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/myifeng/upload-download-nodejs/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[MIT](LICENSE) © myifeng

