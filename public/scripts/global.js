$(document).ready(function(){
  
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  
  $('select').material_select();
});

function pickSchedule(obj) {
  
  var value = obj.value;
  
  if(value === 'eating') {
    $(".tab.disabled").removeClass("disabled");
    $(".tab").has("a.active").addClass("disabled");
    $('ul.tabs').tabs('select_tab', 'step-two');
  } else {
    window.location = "/training";
  }
}

/*
* Redirect function for the schedule blocks
*/
function redirect(id, type) {
  if(type === 'training') {
    window.location = "/training/" + id; 
  } else {
    window.location = "/meal/" + id;
  }
}
      