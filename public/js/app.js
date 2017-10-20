console.log('JS Loaded & Proud');

angular
  .module('propertyApp', [])
  .controller('PropertiesCtrl', PropertiesCtrl);

PropertiesCtrl.$inject = ['$http'];
function PropertiesCtrl($http) {
  const vm = this;
  vm.all = [];

  vm.formVisible = false;
  vm.showForm = showForm;
  // vm.editFormVisible = false;
  // vm.showEditForm = showEditForm;

  function showForm() {
    vm.formVisible = true;
  }

  propertiesIndex();

  function propertiesIndex() {
    $http.get('http://localhost:3000/properties')
      .then((response) => {
        vm.all = response.data;
      });
  }

  vm.newProperty = {};

  vm.propertiesCreate = propertiesCreate;

  function propertiesCreate() {
    $http.post('http://localhost:3000/properties', vm.newProperty)
      .then((response) => {
        vm.all.push(response.data);
        vm.newProperty = {};
        vm.formVisible = false;
      });
  }

  vm.propertiesDelete = propertiesDelete;

  function propertiesDelete(property){
    $http.delete(`http://localhost:3000/properties/${property.id}`)
      .then(() => {
        const i = vm.all.indexOf(property);
        vm.all.splice(i, 1);
      });
  }

  // function showEditForm() {
  //   vm.showEditForm = true;
  // }
}
