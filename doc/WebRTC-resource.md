### 学习资料

### RTC

- video
  
[RTC技术简介](https://www.bilibili.com/video/BV1jX4y137KM?spm_id_from=333.337.search-card.all.click&vd_source=3c71e3397ca331aa190dd5e2f3a7c122)


***
### WebRTC
- video 

[WebRTC手写实现腾讯QQ实时音视频通话技术](https://www.bilibili.com/video/BV1VK4y1N7EN/?p=2&spm_id_from=pageDriver&vd_source=3c71e3397ca331aa190dd5e2f3a7c122)

[WebRTC对等连接方式](https://www.bilibili.com/video/BV1Dr4y1S7Xx/?spm_id_from=333.788&vd_source=3c71e3397ca331aa190dd5e2f3a7c122)

[WebRTC通信工作流程](https://www.bilibili.com/video/BV1Qq4y1q77m/?spm_id_from=333.788&vd_source=3c71e3397ca331aa190dd5e2f3a7c122)



- doc  

[WebRtc C++ API 开发学习记录](https://github.com/HATTER-LONG/NoteBook_WebRtcLearning)

[WebRTC 源码学习](https://github.com/elesos/webrtc)

[WebRTC-Architecture](https://webrtc.github.io/webrtc-org/architecture/)

[google webrtc source code](https://chromium.googlesource.com/external/webrtc)

[Windows平台WebRTC编译](https://blog.jianchihu.net/windows-webrtc-build.html)

[WebRTC 1.0: Real-Time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)

[WebRTC浅析与实战](https://davidchen93.blog.csdn.net/article/details/120067269?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-120067269-blog-6947101.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-120067269-blog-6947101.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=3)

- open code

[开源STUN和TURN服务器](http://webrtcbook.com/turnserver/)

***

### RTC

- 标准RTC建联过程
![rtc-connect](./img/rtc-connect.png)
1. SDP交互
   协商通信双方的媒体信息，如双方采用什么编码格式
2. ICE探测
   借助STUN、TURN探测双方是否可以P2P直连
3. DTLS
   交互RTP加密的密钥信息
4. SRTP对RTP进行加密

- 标准RTC交互时序图
![RTC_Interaction_Sequence](./img/RTC_Interaction_Sequence.png)
1. sdp:媒体协商
2. stun:探测媒体地址
3. dtls:交互密钥
4. srtp:流加密
   

### WebRTC
- 简要
WebRTC是浏览器支持的协议，使用户可以跳过服务器，直接进行点对点的传输而不需要一个服务器的转发。
WebRTC使用STUN服务器将NAT地址转化为公网路径，用户间再使用TURN服务器进行中继。
WebRTC基于UDP，因而有低延迟但会丢包的特点，特别适合网络视频，丢掉某一帧并不会对视频有太大影响

- sdp
```
会话元：v o t
网络描述：c candidate
流描述：m
安全描述：a
服务质量：
```

```
1. 媒体协商
2. 连通性收集与处理
3. 传输
```

- 信令的作用
```
1. 协商媒体功能和设置
2. 标识和验证会话参与者的身份
3. 控制媒体会话、指示进度、更改会话和终止会话
4. 当会话双方同时尝试建立或更改会话时，实施双专用分解（Glare Resolution）
```

***

- WebRTC通信流程
![WebRTC-connect-process-zh](./img/WebRTC-connect-process-zh.png)

- WebRTC通信流程
![WebRTC-connect-process-en](./img/WebRTC-connect-process-en.png)

- WebRTC通信流程
![WebRTC-connect-stun-turn](./img/WebRTC-connect-stun-turn.png)

***

- 专业名词解释
- ICE
```
interactive connectivity establishment
交互式连接建立技术
```
- NAT
```
network address translation
网络地址转换
```
