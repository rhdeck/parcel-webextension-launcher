// import browser from "webextension-polyfill";
window.addEventListener("load", async () => {
  console.log("I am launching the second script dfdfdf");
  const src = browser.runtime.getURL("/main.js");
  console.log("I got the src", src);
  const main = await import(src);
  console.log("I got to the point where i can run main", Object.keys(main));
  main.main();
  console.log("After running main");
});
