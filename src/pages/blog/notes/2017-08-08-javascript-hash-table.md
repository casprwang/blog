---
title: Javascript Hash Table
date: '2017-08-08T03:32:30-04:00'
tags:
  - javascript
  - algorithm
---
```js
const findTheDifference = (s, t) => {
  let hash = {}
  for (let v of [...t]) {
    hash[v] ? hash[v]++ : (hash[v] = 1)
  }
  for (let v of [...s]) {
    hash[v]--
  }
  for (let key in hash) {
    if(hash[key] === 1) return key
  }
}
```

Ref: <?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
	<array>
		<string>https://leetcode.com/problems/find-the-difference/description/</string>
	</array>
	<array>
		<string>https://leetcode.com/problems/find-the-difference/description/</string>
	</array>
</array>
</plist>

