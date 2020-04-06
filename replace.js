let data =
[
    {
        title: "hello",
        content: "seunghwan",
        price: 1000000000
    },
    {
        title: "bye",
        content: " seunghwan",
        price: 20000
    }
];

let originHtml = "<li><h4>{title}</h4><p>{content}</p><div>{price}</div></li>";
let result = '';
data.forEach(Element=>{

    // let targetHtml = originHtml;
    // result += targetHtml.replace("{title}", Element.title)
    //                     .replace("{content}", Element.content)
    //                     .replace("{price}", Element.price);
    result += originHtml.replace("{title}", Element.title)
                        .replace("{content}", Element.content)
                        .replace("{price}", Element.price);
    result += "</br>";
});
var div = document.createElement("div");
div.innerHTML = result;
document.querySelector("h1").appendChild(div);