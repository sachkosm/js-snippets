
if (isNaN(toCreateId) === true || isNaN(parseInt(toCreateId.toString())) === true || parseInt(toCreateId.toString()) < 1) { 
  alert("Id must be a valid Number.");
  return;
}
