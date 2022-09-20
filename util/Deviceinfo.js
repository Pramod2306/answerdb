const userModel=require("../model/UserDetail")
const DeviceDetector = require('node-device-detector');


const userDeviceInfo=async(req,res,next)=>{
  let ips = (
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress || ''
).split(',');
   
    console.log(req.headers);
    
    const detector = new DeviceDetector({
        clientIndexes: true,
        deviceIndexes: true,
        deviceAliasCode: false,
      });
      const userAgent =req.get('User-Agent');
      const result = detector.detect(userAgent);
      // await userModel.create({
      //   ip:req.socket.localAddress,
      //   device:result.device,
      //   client:result.client,
      //   os:result.os
      // })
      // console.log(result)
      next();
}

module.exports=userDeviceInfo;