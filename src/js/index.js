let slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'touch': false
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function () {
  slideout.toggle();
});

let ViewModel = function () {
  let self = this;
  self.marketWt = ko.observable();
  self.ADG = ko.observable();
  self.buyDate = ko.observable();
}

ko.applyBindings(new ViewModel());