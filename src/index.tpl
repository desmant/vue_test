<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <% for (var css in htmlWebpackPlugin.files.css) { %>
    <link href="<%= htmlWebpackPlugin.files.css[css] %>" rel="stylesheet">
  <% } %>
  <title>Vue Test</title>
</head>
<body>
  <div id="app"></div>

  <% for (var js in htmlWebpackPlugin.files.js) { %>
    <script src="<%= htmlWebpackPlugin.files.js[js] %>"></script>
  <% } %>
</body>
</html>