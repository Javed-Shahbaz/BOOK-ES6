const List = document.getElementById('lisTab');
const AddNew = document.getElementById('addTab');
const contactTab = document.getElementById('cTab');

const getList = () => {
  List.style.display = 'block';
  AddNew.style.display = 'none';
  contactTab.style.display = 'none';
};
const getAdd = () => {
  List.style.display = 'none';
  AddNew.style.display = 'block';
  contactTab.style.display = 'none';
};
const getContact = () => {
  List.style.display = 'none';
  AddNew.style.display = 'none';
  contactTab.style.display = 'flex';
};
export { getList, getAdd, getContact };