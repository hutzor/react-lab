(function () {
  const formEl = document.querySelector('#form');
  const toggleBtn = document.querySelector('#editButton');
  const inputFirst = document.querySelector('#firstNameInput');
  const inputLast = document.querySelector('#lastNameInput');
  const textFirst = document.querySelector('#firstNameText');
  const textLast = document.querySelector('#lastNameText');
  const greetingEl = document.querySelector('#helloText');

  const model = createReactiveState({
    editing: false,
    first: 'John',
    last: 'Doe'
  }, updateUI);

  formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    model.editing = !model.editing;
  });

  inputFirst.addEventListener('input', function(event) {
    model.first = event.target.value;
  });

  inputLast.addEventListener('input', function(event) {
    model.last = event.target.value;
  });

  function updateUI() {
    const { editing, first, last } = model;

    if (!editing) {
      inputFirst.value = first;
      inputLast.value = last;
    }

    textFirst.textContent = first;
    textLast.textContent = last;
    greetingEl.textContent = `Hello, ${first} ${last}!`;

    toggleBtn.textContent = editing ? 'Save Profile' : 'Edit Profile';

    setVisibility(inputFirst, editing);
    setVisibility(inputLast, editing);
    setVisibility(textFirst, !editing);
    setVisibility(textLast, !editing);
  }

  function setVisibility(element, isVisible) {
    element.style.display = isVisible ? '' : 'none';
  }

  function createReactiveState(stateObj, onChange) {
    return new Proxy(stateObj, {
      set(obj, prop, val) {
        obj[prop] = val;
        onChange();
        return true;
      }
    });
  }

  updateUI();
})();
