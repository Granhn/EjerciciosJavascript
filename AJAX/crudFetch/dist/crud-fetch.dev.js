"use strict";

var d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $crudTemplate = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

var getAll = function getAll() {
  var res, json, message;
  return regeneratorRuntime.async(function getAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/santos"));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          json = _context.sent;

          if (res.ok) {
            _context.next = 9;
            break;
          }

          throw {
            status: res.status,
            statusText: res.statusText
          };

        case 9:
          json.forEach(function (element) {
            $crudTemplate.querySelector(".name").textContent = element.nombre;
            $crudTemplate.querySelector(".constelacion").textContent = element.constelacion;
            $crudTemplate.querySelector(".edit").dataset.id = element.id;
            $crudTemplate.querySelector(".edit").dataset.name = element.nombre;
            $crudTemplate.querySelector(".edit").dataset.constelacion = element.constelacion;
            $crudTemplate.querySelector(".eliminar").dataset.id = element.id;
            var $clone = d.importNode($crudTemplate, true);
            $fragment.appendChild($clone);
          });
          $table.querySelector("tbody").appendChild($fragment);
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          message = _context.t0.statusText || "Ocurrio un error";
          $table.insertAdjacentHTML("afterend", "<p><b>Error ".concat(_context.t0.status, ": ").concat(message, "</b></p>"));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

d.addEventListener("DOMContentLoaded", getAll);
d.addEventListener("submit", function _callee(e) {
  var options, res, json, message, _options, _res, _json, _message;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(e.target === $form)) {
            _context2.next = 39;
            break;
          }

          e.preventDefault();

          if (e.target.id.value) {
            _context2.next = 22;
            break;
          }

          _context2.prev = 3;
          options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value
            })
          };
          _context2.next = 7;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/santos", options));

        case 7:
          res = _context2.sent;
          _context2.next = 10;
          return regeneratorRuntime.awrap(res.json());

        case 10:
          json = _context2.sent;

          if (res.ok) {
            _context2.next = 13;
            break;
          }

          throw {
            status: res.status,
            statusText: res.statusText
          };

        case 13:
          location.reload();
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](3);
          message = _context2.t0.statusText;
          $form.insertAdjacentElement("afterend", "<p><b>Error : ".concat(_context2.t0.status, ": ").concat(message));

        case 20:
          _context2.next = 39;
          break;

        case 22:
          _context2.prev = 22;
          _options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value
            })
          };
          _context2.next = 26;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/santos/".concat(e.target.id.value), _options));

        case 26:
          _res = _context2.sent;
          _context2.next = 29;
          return regeneratorRuntime.awrap(_res.json());

        case 29:
          _json = _context2.sent;

          if (_res.ok) {
            _context2.next = 32;
            break;
          }

          throw {
            status: _res.status,
            statusText: _res.statusText
          };

        case 32:
          location.reload();
          _context2.next = 39;
          break;

        case 35:
          _context2.prev = 35;
          _context2.t1 = _context2["catch"](22);
          _message = _context2.t1.statusText;
          $form.insertAdjacentElement("afterend", "<p><b>Error : ".concat(_context2.t1.status, ": ").concat(_message));

        case 39:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 16], [22, 35]]);
});
d.addEventListener("click", function _callee2(e) {
  var isDelete, options, res, json, message;
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (e.target.matches(".edit")) {
            console.log("Si");
            $title.textContent = "Editar Santo";
            $form.nombre.value = e.target.dataset.name;
            $form.constelacion.value = e.target.dataset.constelacion;
            $form.id.value = e.target.dataset.id;
          }

          if (!e.target.matches(".eliminar")) {
            _context3.next = 21;
            break;
          }

          isDelete = confirm("\xBFEstas seguro de elimira el id ".concat(e.target.dataset.id, "?"));

          if (!isDelete) {
            _context3.next = 21;
            break;
          }

          _context3.prev = 4;
          options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8"
            }
          };
          _context3.next = 8;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/santos/".concat(e.target.dataset.id), options));

        case 8:
          res = _context3.sent;
          _context3.next = 11;
          return regeneratorRuntime.awrap(res.json());

        case 11:
          json = _context3.sent;

          if (res.ok) {
            _context3.next = 14;
            break;
          }

          throw {
            status: res.status,
            statusText: res.statusText
          };

        case 14:
          location.reload();
          _context3.next = 21;
          break;

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](4);
          message = _context3.t0.statusText;
          $form.insertAdjacentElement("afterend", "<p><b>Error : ".concat(_context3.t0.status, ": ").concat(message));

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 17]]);
});