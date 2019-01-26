<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        body {
            margin: 30px;
        }

        .file-title {
            display: block;
            margin: 10px 0;
            font-size: 16px;
            color: #6c6c6c;
        }

        a:hover {
            color: dodgerblue;
        }
    </style>
</head>
<body>
{{#each files}}
    <a href="{{../dir}}/{{this}}" class="file-title">🙄 {{this}}</a>
{{/each}}
</body>
</html>