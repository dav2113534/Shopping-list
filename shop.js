/* var state =[{
    name: 'clean',
    checked: false
}, {
    name:'house work',
    checked: true,
},
{
    name:'real work',
    checked: false
}
]

function renderCheckedBoxes(state){
    return state.map(function(item){
        var checkedAttr ='';
        if(item.checked){
            checkedAttr = "checked = 'checked' text-decoration='line-through'";
        }
        return "<input type='checkbox' " + checkedAttr + "value='" + item.name + "'>Todo</input>"
    });
}

function render() {
    $("input[type=checkbox]").click(function(event){
        var item=$(this).val();
        var foundTodo = state.find(function(todo) {
            return todo.name == item;
        } );
        foundTodo.checked = !foundTodo.checked;
        render ();
    });
    $(".state-todo").html(renderCheckboxes(state));
}
$(render);


  state.slice(0,1).concat(state.slice(2))
=> [ { name: 'brush teeth', checked: false },
  { name: 'todo', checked: false } ]
   
   var state = [{
  name: 'brush teeth',
  checked: false,
},
{
  name:'laundry',
  checked: true,
}, {name: 'todo', checked: false}
]

function findByName(state, name){
  return state.name === name;
}

var findLaundry = function(state) {
  return findByName(state, 'laundry');

}

*/

var state = {
    items: []
};

var addItem = function (state, item) {
    state.items.push( {
        name: item,
        checked: false,
    })
}

var deleteItem = function (state, itemIndex) {
   state.items.splice(itemIndex, 1);
}

var renderList = function (state, element) {
    var itemsHTML = state.items.map(function (item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
}

$('.js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});

$('.shopping-list-form').submit(function (event) {
    event.preventDefault();
    $('.shopping-list').append('<li>' + //
        $('.shopping-list-add-input').val() + '</li>');
});

$(".shopping-item-toggle").click(function(event){
    $(this).closet('li').find('.shopping-item').toggleClass//
    ('shopping-item_checked');
});

$('.shopping-item-delete').click(function(event){
    event.preventDefault();
     deleteItem.$(this).closest('li').find('.shopping-item').val();
    deleteListItem(shoppingList, deleteItem);
    console.log(shoppingList);
});

