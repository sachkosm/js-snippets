
// Request with credentials
// By default, for non same origin request, browsers will not send credentials (such as HTTP Cookies, HTTP Authentication and client-side SSL certificates). A specific attribute has to be set on the XMLHttpRequest object when it is invoked.

<script type="text/javascript">
// jQuery CORS example
$.ajax({
    xhrFields: {
        withCredentials: true
    },
    type: "GET",
    url: "http://www.example.org/ajax.php"
}).done(function (data) {
    console.log(data);
});

// XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.example.org/ajax.php", true);
xhr.withCredentials = true;
xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();
</script>
