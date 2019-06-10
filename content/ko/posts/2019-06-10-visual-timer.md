---
title: Visual Timer 개발기
author: haruair
type: post
date: "2019-06-10T11:52:00"
lang: ko
slug: postmortem-visual-timer
categories:
  - 개발 이야기
tags:
  - app
  - ios
  - react-native 
  - visual timer
draft: true

---

올해 1월에 [Tiny Tip Calculator](https://edykim.com/ko/post/postmortem-tiny-tip-calculator/)를 공개했다. 그 이후로 리액트 네이티브를 사용해서 앱을 만들어보고 싶었다. 어떤 앱을 만들면 좋을지 앱스토어를 찾아보다가 비주얼 타이머를 개발하게 되었다.

지난 앱은 Ionic을 써서 만들었는데 상당히 단순한 기능의 앱인데도 느린 부분이 보였다. 그 사이 인터뷰 준비로 리액트를 살펴본 덕분에 리액트 네이티브도 크게 어렵게 느껴지지 않았고 특히 성능면에서는 확연히 빨랐다. 필요한 대부분의 라이브러리도 있었고 궁금한 부분도 쉽게 찾을 수 있었다.

## Good & Bad



