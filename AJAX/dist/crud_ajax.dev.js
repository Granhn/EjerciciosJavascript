"use strict";

var d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $crudTemplate = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();