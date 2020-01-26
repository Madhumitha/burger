function render({body}) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
            <link rel="stylesheet" href="/assets/css/burger_style.css" type="text/css" />
            <title>Eat-Da-Burger</title>
            <script src="https://code.jquery.com/jquery.js"></script>
		    <script src="/assets/js/burger.js"></script>
        </head>
        <body>
            ${body}
        </body>
    </html>
    `
}

exports.render = render;
