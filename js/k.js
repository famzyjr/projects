//string template//
const firstname = "ahmed";
const title = "blog";
const likes =   30;

// //templat strings//

// const body =  `am a boy${firstname}with a car ${title} with a house ${likes} `

// console.log(body)


//html template//

let html = `
<h2> i am a boy ${firstname}</h2>
<p> with a ${title}</p>
<span> with a total likes of ${likes}<s/span>
`

console.log(html)
