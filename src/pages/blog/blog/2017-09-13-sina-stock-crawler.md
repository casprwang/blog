---
title: Sina stock crawler
date: '2017-09-13T23:27:27-04:00'
tags:
  - stock
  - python
  - crawler
  - data
---
A few month ago, my friend Hongkai, Zhang, Ph.D. found me and asked me if I could crawl all the data from [sina stock source](http://stock.finance.sina.com.cn/option/quotes.html), which, provides all sorts of Chinese options data for the next season. I didn' know too much about the stock, especially from Chinese sites. But I kicked this out since Hongkai is a nice person and he helps me once before; I owe him once.

Before anything, I wanted to say sorry to my Chinese fellows who are reading this blog; I probably should have written this in Chinese since most of the people might find it useful is probably from China. But please excuse me that I am terrible at Chinese writing(didn’t even finish writing section on [Gaokao](https://www.wikiwand.com/en/National_Higher_Education_Entrance_Examination)), and I’ve been writing English for a while, and I am used to it now.

## Digging Sina’s API
### The source
First thing for this project is to find where the data comes from and if there is an API opened to the public already, so I can get the data without crawling raw web pages and mining the data. 

Typically the API would be written within the developer’s page from a company. But Sina, like a lot of other Chinese company, doesn’t have much of developer’s instructions, including API protocols. So I did some research on Sina and found the API lives on another one site, [here](http://hq.sinajs.cn/list=OP_DOWN_5100501707). 

### The REST API of Sina
The API site is a multi end point REST API, with the list of each stock table with a hash id. While the index comes from [here](http://stock.finance.sina.com.cn/futures/api/openapi.php/StockOptionService.getRemainderDay?date=201706), with a `getRemainderDay` method and a query string `date` for the month of each month’s stock index. And finally, the data stays and the endpoints in a normal JSON format.

## The algorithm
Since the index of all data is stored in one API endpoint, and the list for each stock option comes from another API endpoint. The data structure is similar to a two-dimensional list. So I can just loop through the first API to get all the list and paired them with `UP` table and `DOWN` table, and loop through all the paired `UP`s and `DOWN`s’ data and combine them with a whole table. It’s a simple and straightforward solution, and I don’t see anywhere around it.

## Python Codes
It’s been a few month I never write python, but thankfully Python is easy to pick up, as the syntax is pretty clean. I finished the two loops with seven functions and one extra loop with writing CSV file. Source code lives [here](https://github.com/wangsongiam/sina-stock-crawler). 
