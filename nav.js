document.addEventListener('init', function(event) {
  var page = event.target;

  switch (page.id) {
    case page1:
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
      break;
    case page3:
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 2'}});
    };
      break;
    case page4:
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page4.html', {data: {title: 'Page 2'}});
    };
      break;
    case page5:
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page5.html', {data: {title: 'Page 2'}});
    };
      break;


  }
  if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
