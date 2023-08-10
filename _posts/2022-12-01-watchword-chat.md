---
layout: post
title:  "Watchword Chat"
date:   2016-04-06
excerpt: "Web/Android Online Chat Application"
project: true
tags: [JavaScript, Java, Android, Web Application]
comments: false
---
In Watchword Chat, a user can chat with other users who choose the same passcode (that is, "watchword") as they do. The program uses multithread web server to handle HTTP and/or WebSocket requests. The server records the client's actions (namely, creating/joining existing watchwords, leaving the chat, and sending messages), parses the information in JSON, and sends back to appropriate clients.

{% capture images %}
    https://raw.githubusercontent.com/jinyizh/WatchwordChat/main/images/webpage.png
    https://raw.githubusercontent.com/jinyizh/WatchwordChat/main/images/android_chat.png
{% endcapture %}
{% include gallery images=images caption="Preview of the chat application on both webpage and Android ends" cols=2 %}