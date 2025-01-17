document.querySelector(browser.storage.local.get);

browser.storage.local.get("theme").then(
    (x) => {
        setTimeout(() => {
            alert("E");
            browser.tabs.executeScript({
                code: `console.log("${x.theme}")`,
            });
            document.querySelector(`#${x.theme}`).click();
        }, 500);
    },
    (err) => console.log(err),
);

document.querySelectorAll("input").forEach((x) => {
    x.addEventListener("click", () => {
        browser.storage.local.set({
            theme: x.nextSibling.innerText.toLowerCase(),
        });
        browser.storage.local.get("theme").then(
            (x) => {
                browser.tabs.executeScript({
                    code: `localStorage.setItem("theme", "${x.theme}");`,
                });
            },
            (err) => console.log(err),
        );
    });
});
