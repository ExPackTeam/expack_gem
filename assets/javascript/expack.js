function copyClip() {
  var copyText = document.querySelectorAll("[class^='copy-text']");
  var copyButtons = document.querySelectorAll("[class^='copy-button']");
  copyButtons.forEach(function (button, index) {
    button.onclick = function () {
      console.log("clicked");
      if (copyText[index] instanceof HTMLElement) {
        var textElement = copyText[index];
        // Check if the textElement is an input or textarea
        if (textElement instanceof HTMLInputElement || textElement instanceof HTMLTextAreaElement) {
          textElement.focus();
          textElement.select();
          navigator.clipboard.writeText(textElement.value).then(function () {
            alert("Copied Text: " + textElement.value);
          })["catch"](function (err) {
            console.error('Failed to copy: ', err);
          });
        } else {
          // For other types of elements, use textContent or innerText
          var textToCopy = textElement.textContent || textElement.innerText;
          navigator.clipboard.writeText(textToCopy).then(function () {
            alert("Copied Text: " + textToCopy);
          })["catch"](function (err) {
            console.error('Failed to copy: ', err);
          });
        }
      } else {
        console.error("Not a valid HTML element: ", copyText[index]);
      }
    };
  });
}

function modalFunction() {
  var modal = document.getElementsByClassName("modal");
  var modalBtn = document.getElementsByClassName("modal-btn");
  var closeClick = document.getElementsByClassName("close");
  modalBtn.onclick = function () {
    modal.style.display = "block";
  };
  closeClick.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function loginOption() {
  var emailClass = document.getElementsByClassName("login-email");
  var passwordClass = document.getElementsByClassName("login-password");
  var usernameClass = document.getElementsByClassName("login-username");
  function hasRequiredClass(elements) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('required')) {
        return true;
      }
    }
    return false;
  }
  var registerBtn = document.getElementsByClassName("register-btn");
  if (registerBtn.length > 0) {
    for (var i = 0; i < registerBtn.length; i++) {
      registerBtn[i].onclick = function () {
        var emailRequired = hasRequiredClass(emailClass);
        var passwordRequired = hasRequiredClass(passwordClass);
        var usernameRequired = hasRequiredClass(usernameClass);
        if (emailRequired && emailClass.length > 0) {
          var emailValue = emailClass[0].value;
          localStorage.setItem("email saved", emailValue);
          document.cookie = "userEmail=".concat(emailValue);
        }
        if (passwordRequired && passwordClass.length > 0) {
          var passwordValue = passwordClass[0].value;
          localStorage.setItem("password saved", passwordValue);
          document.cookie = "userPassword=".concat(passwordValue);
        }
        if (usernameRequired && usernameClass.length > 0) {
          var usernameValue = usernameClass[0].value;
          localStorage.setItem("username saved", usernameValue);
          document.cookie = "userUsername=".concat(usernameValue);
        }
      };
    }
  } else {
    console.log("no register");
  }
}

function unicodeFunction() {
  document.addEventListener("DOMContentLoaded", function () {
    var unicode = document.querySelectorAll("[class*='u-']");
    unicode.forEach(function (element) {
      var classes = element.className.split(" ");
      classes.forEach(function (cls) {
        if (cls.startsWith("c")) {
          var unicodeChar = cls.substring(4);
          element.textConent = unicodeMap[unicodeChar];
        }
      });
    });
  });
}

function expackExport() {
  document.addEventListener("DOMContentLoaded", function () {
    var bgElements = document.querySelectorAll("[class*='bg-']");
    bgElements.forEach(function (element) {
      var classes = element.className.split(" ");
      classes.forEach(function (cls) {
        if (cls.startsWith("bg-")) {
          var colorCode = cls.substring(3);
          if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
            element.style.backgroundColor = "#".concat(colorCode);
          }
        }
      });
    });
    var mnElements = document.querySelectorAll("[class*='fr-']");
    mnElements.forEach(function (element) {
      var classes = element.className.split(" ");
      classes.forEach(function (cls) {
        if (cls.startsWith("fr-")) {
          var colorCode = cls.substring(3);
          if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
            element.style.color = "#".concat(colorCode);
          }
        }
      });
    });
    var fontWeightClass = document.querySelectorAll("[class^='fw-']");
    fontWeightClass.forEach(function (element) {
      var classes = element.className.split(" ");
      classes.forEach(function (cls) {
        if (cls.startsWith("fw-")) {
          var _fwValue = cls.substring(3);
          if (/^\d+px?$/.test(_fwValue)) {
            element.style.fontWeight = _fwValue;
          }
        }
      });
    });
    var fontSizeValue = document.querySelectorAll("[class*='sz-']");
    fontSizeValue.forEach(function (element) {
      var classes = element.className.split(" ");
      classes.forEach(function (cls) {
        if (cls.startsWith("sz-")) {
          var sizeValue = cls.substring(3);
          if (/^\d+px?$/.test(sizeValue)) {
            element.style.fontSize = fwValue;
          }
        }
      });
    });
    var elementPadding = document.querySelectorAll("[class^='pad-']");
    elementPadding.forEach(function (element) {
      var classes = element.className.split(" ");
      classes.forEach(function (cls) {
        if (cls.startsWith("pad-")) {
          var paddingValue = cls.substring(5);
          if (cls.startsWith("pad-t-")) {
            if (/^\d+px?$/.test(paddingValue)) {
              element.style.paddingTop = paddingValue;
            }
          } else if (cls.startsWith("pad-l-")) {
            if (/^\d+px?$/.test(paddingValue)) {
              element.style.paddingLeft = paddingValue;
            }
          } else if (cls.startsWith("pad-r-")) {
            if (/^\d+px?$/.test(paddingValue)) {
              element.style.paddingRight = paddingValue;
            }
          } else if (cls.startsWith("pad-b-")) {
            if (/^\d+px?$/.test(paddingValue)) {
              element.style.paddingBottom = paddingValue;
            }
          } else {
            if (/^\d+px?$/.test(paddingValue)) {
              element.style.padding = paddingValue;
            }
          }
        }
      });
    });
    var borderElements = document.querySelectorAll("[data-border]");
    borderElements.forEach(function (element) {
      var borderData = element.getAttribute('data-border');
      if (borderData) {
        var parts = borderData.split(" ");
        parts.forEach(function (part) {
          if (part.startsWith("color-")) {
            var colorCode = part.substring(7);
            if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
              element.style.borderColor = "#".concat(colorCode);
            }
          }
          if (part.startsWith("radius-")) {
            var borderRadius = part.substring(7);
            if (borderRadius.includes("%")) {
              borderRadius += "%";
            } else {
              borderRadius += "px";
            }
            element.style.borderRadius = borderRadius;
          }
          if (part.startsWith("size-")) {
            var borderSize = part.substring(7);
            element.style.borderWidth = borderSize;
          }
        });
      }
    });
    var imageDimension = document.querySelectorAll("[data-image]");
    imageDimension.forEach(function (element) {
      var imageData = element.getAttribute('data-image');
      if (imageData) {
        var parts = imageData.split(" ");
        parts.forEach(function (part) {
          if (part.startsWith("height-")) {
            var imageHeight = part.substring(7);
            if (imageHeight.includes("%")) {
              imageHeight += "%";
            } else if (imageHeight.includes("em") || imageHeight.includes("-em")) {
              imageHeight += "em";
            } else {
              imageHeight += "px";
            }
            element.style.height = imageHeight;
          }
          if (part.startsWith("width-")) {
            var imageWidth = part.substring(6);
            if (imageWidth.includes("%")) {
              imageWidth += "%";
            } else if (imageWidth.includes("em") || imageWidth.includes("-em")) {
              imageWidth += "em";
            } else {
              imageWidth += "px";
            }
            element.style.width = imageWidth;
          }
        });
      }
    });
    var marginCheck = document.querySelectorAll("[data-margin]");
    marginCheck.forEach(function (element) {
      var parts = element.className.split(" ");
      parts.forEach(function (part) {
        if (part.startsWith("a-")) {
          var everyMargin = part.substring(5);
          element.style.margin = everyMargin + "px";
        } else if (part.startsWith("r-")) {
          var rightMargin = part.substring(5);
          element.style.marginRight = rightMargin + "px";
        } else if (part.startsWith("l-")) {
          var leftMargin = part.substring(5);
          element.style.marginLeft = leftMargin + "px";
        } else if (part.startsWith("t-")) {
          var topMargin = part.substring(5);
          element.style.marginTop = topMargin + "px";
        } else if (part.startsWith("b-")) {
          var bottomMargin = part.substring(5);
          element.style.marginBottom = bottomMargin + "px";
        }
      });
    });
    var indexValue = document.querySelectorAll("[data-index]");
    indexValue.forEach(function (element) {
      var indexData = element.getAttribute('data-index');
      if (indexData) {
        var parts = indexData.split(" ");
        parts.forEach(function (part) {
          if (part.startsWith("z-")) {
            var zIndex = part.substring(5);
            element.style.zIndex = zIndex;
          }
        });
      }
    });
  });
  copyClip();
  modalFunction();
  loginOption();
  unicodeFunction();
}
var global = expackExport();

export { global as default };
