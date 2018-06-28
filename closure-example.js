<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Clicker</title>
  <meta name="description" content="">
  <style></style>
</head>

<body>
  <button>
Click!
</button>

  <script>
    const counter = function() {

      var cnt = 0;  //The inside function has a Closure over this variable

      function inc() {
        cnt++;
        console.log(cnt);
      }
      return inc;
    };

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', counter(), false);
  </script>

</body>

</html>
