var i = 0;

$(document).ready(function()
{
  $("#add").click(function()
  {
    var tache = document.createElement("div");
    tache.setAttribute("class", i);

    var select = document.createElement("select");
    var option = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    
    var suppr = document.createElement("input");
    suppr.setAttribute("type", "button");
    suppr.setAttribute("value", "supprimer");
    suppr.setAttribute("class", i);

    var info = document.createElement("div");
    var info2 = document.createElement("div");

    var br = document.createElement("br");
    var hr = document.createElement("hr");

    select.setAttribute("id", "state");
    option.setAttribute("value", "à faire");
    var text = document.createTextNode("à faire");
    option.appendChild(text);
    select.appendChild(option);

    option2.setAttribute("value", "en cours");
    text = document.createTextNode("en cours");
    option2.appendChild(text);
    select.appendChild(option2);

    option3.setAttribute("value", "faites");
    text = document.createTextNode("faites");
    option3.appendChild(text);
    select.appendChild(option3);

    tache.appendChild(select);
    tache.appendChild(suppr);

    var text = document.createTextNode("📅 ".concat($("#new_date").val().concat("    ⏱ ".concat($("#new_time").val()))));
    info.appendChild(text);
    tache.appendChild(info);
    tache.appendChild(br);
    
    text = document.createTextNode($("#new_task").val());
    info2.appendChild(text);
    tache.appendChild(info2);
    tache.appendChild(hr);

    var list = document.getElementById("list");
    list.appendChild(tache);

    i++;
  });
});

$("input").click(function()
{
  var class_name = this.className;
  $(class_name).remove();
});
