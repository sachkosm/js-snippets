function traverse(data) {
  if(typeof data == "object") {
    $.each(data, function(key, val) {
      alert(key + " : " + val)
      traverse(val);
    });
  } else {
    // jsonOb is a number or string
  }
}

traverse(data);
