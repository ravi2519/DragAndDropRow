$(document).ready(function() {

  jQuery("div#add_row").draggable({
    cursor: "move",
    cursorAt: { top: -5, left: 20 },
    opacity: 0.7,
    helper: "clone",
    containment: "#main_cont"
  });


  jQuery("div#table1 tr").droppable({
    drop: function( event, ui ) {
      console.log("Dropped");
      $( this ).before( "<tr class='ui-droppable'><td>1111</td><td>Dropped</td></tr>");
      }
  });


});