const AV = require('leancloud-storage');
// 存储服务
const { Query, User } = AV;
AV.init({
  appId: "XHNb2aBz7oPiF6OMh45IpSpW-gzGzoHsz",
  appKey: "lGauc7q47glzITY6hF6tqt1w",
  // serverURLs: "https://xxx.example.com",
});

export default AV
