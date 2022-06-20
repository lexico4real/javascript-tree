// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'topArticles' function below.
//  *
//  * The function is expected to return a STRING_ARRAY.
//  * The function accepts INTEGER limit as parameter.
//  * base url for copy/paste:
//  * https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>
//  */

// async function topArticles(limit) {
//     const url = 'https://jsonmock.hackerrank.com/api/articles?page=';
//     const pageNumber = 1;
//     const response = await fetch(url + pageNumber);
//     const json = await response.json();
//     const articles = json.data;
//     const articleTitles = articles.map(article => article.title);
//     const articleTitlesSorted = articleTitles.sort();
//     const articleTitlesSortedLimited = articleTitlesSorted.slice(0, limit);
//     console.log(articleTitlesSortedLimited);
// }

const https = require('https');
const makeRequest = (pageNumber = 1) =>
  new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`,
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (data) => (body += data));
        res.on('end', () => {
          const bodyParsed = JSON.parse(body);
          resolve({
            articles: bodyParsed.data,
            totalPages: bodyParsed.total_pages,
          });
        });
      }
    );
  });

const getTitle = (article) => {
  return article.title || article.story_title || null;
};

async function topArticles(limit) {
  if (limit < 0) return [];
  const sortByCommentsAndAlpha = (a, b) => {
    if (a.num_comments === b.num_comments) {
      if (a.parsedName > b.parsedName) return -1;
      else if (a.parsedName < b.parsedName) return 1;
      return 0;
    }
    if (a.num_comments > b.num_comments) return -1;
    return 1;
  };
  return new Promise(async (resolve, _reject) => {
    let articles = [];
    const initRequest = await makeRequest();
    articles = articles.concat(initRequest.articles);
    for (let i = 2; i <= initRequest.totalPages; i += 1) {
      let newReq = await makeRequest(i);
      articles = articles.concat(newReq.articles);
    }
    articles = articles.map((article) => ({
      ...article,
      parsedName: getTitle(article),
    }));
    articles.sort(sortByCommentsAndAlpha);
    articles.splice(limit);
    resolve(articles.map((article) => article.parsedName));
  });
}
