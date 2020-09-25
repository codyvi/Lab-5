let todoArray = [];
//Post element into the list

const obtenerDatos = (e) => {
  e.preventDefault();
  let areaField = $("#todoText").val();
  if (areaField != "") {
    todoArray.push(areaField);
    $("#todoList").append(`
    <p>
      <input type="checkbox" id="post" style="margin-right:5px"/>
      <label> ${todoArray[todoArray.length -1]}</label>
    </p>`);
    $("#todoText").val("");
  }
};

const marcaTodos = (e) => {
  e.preventDefault();
  $("#todoList #post").each(function () {
    $(this).prop("checked", true);
  });
};

const desMarcaTodos = (e) => {
  e.preventDefault();
  $("#todoList #post").each(function () {
    $(this).prop("checked", false);
  });
};

const deleteAll = (e) => {
  e.preventDefault();
  todoArray = [];
  $("#todoList").empty();
};

$("#btnPost").on("click", obtenerDatos)

$("#btnMark").on("click", marcaTodos)

$("#btnClear").on("click", desMarcaTodos)

$("#btnDelete").on("click", deleteAll)