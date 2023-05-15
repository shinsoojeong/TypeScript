import React, { ChangeEvent, SyntheticEvent } from "react";

let firstName: string = 'Jane';
let lastName: string = 'Jacobs';
let isEditing: boolean = false;

function handleFormSubmit(this: GlobalEventHandlers, e: SubmitEvent): void {
  e.preventDefault();
  setIsEditing(!isEditing);
}

//again
function handleFirstNameChange(this: GlobalEventHandlers, e: Event): void {
  //setFirstName(e.target.value);
}
//agin
function handleLastNameChange(this: GlobalEventHandlers, e: Event): void {
  //setLastName(e.target.value);
}

function setFirstName(value: string) {
  firstName = value;
  updateDOM();
}

function setLastName(value: string) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value: boolean) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = 'Save Profile';
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  helloText.textContent = (
    'Hello ' +
    firstName + ' ' +
    lastName + '!'
  );
}

function hide(el: HTMLElement) {
  el.style.display = 'none';
}

function show(el: HTMLElement) {
  el.style.display = '';
}

let form = document.getElementById('form') as HTMLFormElement;
let editButton = document.getElementById('editButton') as HTMLButtonElement;
let firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement;
let firstNameText = document.getElementById('firstNameText') as HTMLTextAreaElement;
let lastNameInput = document.getElementById('lastNameInput') as HTMLInputElement;
let lastNameText = document.getElementById('lastNameText') as HTMLTextAreaElement;
let helloText = document.getElementById('helloText') as HTMLTextAreaElement;
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
