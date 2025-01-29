import $ from "jquery";
import { TextBackup } from "./backup";
function TextOptions(cssName) {
    var classGet = [];
    var backUp = null;
    const classLook = $("body").find("[class]").each(function () {
        var classSearch = $(this).attr("class");
        const getBackUp = classSearch == undefined ? true : false;
        classGet = classSearch ? classSearch.split(" ") : null;
        backUp = getBackUp;
        if (backUp != true) {
            const classGetSize = classGet.length;
            for (var i = 0; i < classGetSize; i++) {
                var classPlace = classGet[i];
                if (classPlace.includes("bg") || classPlace.includes("fg")) {
                    var classPart = classPlace.substring(3);
                    var color;
                    if (/^[0-9A-Fa-f]{6}$/.test(classPart)) {
                        color = `#${classPart}`;
                    } else {
                        color = classPart;
                    }
                    if (classPlace.includes("bg")) {
                        $(this).css("background-color", color);
                    } else if (classPlace.includes("fg")) {
                        $(this).css("color", color);
                    }
                } else if (classPlace.includes("fs")) {
                    var classPart = classPlace.substring(3);
                    $(this).css("font-size", classPart);
                } else if (classPlace.includes("fw")) {
                    var classPart = classPlace.substring(3);
                    $(this).css("font-weight", classPart);
                }
            }
        } else {
            var classError;
            const jqueryError = new Error("[jQuery] failed to find the class");
            if (cssName === "background-color" || cssName === "color") {
                TextBackup("color");
                if (cssName === "background-color") {
                    classError = new Error("[bg] jquery failed to find the [bg] class, using backup [bg] code");
                } else if (cssName === "color") {
                    classError = new Error("[fg] jquery failed to find the [fg] class, using backup [fg] code");
                }
            } else if (cssName === "font-weight") {
                TextBackup("other");
                if (cssName === "font-weight") {
                    classError = new Error("[fw] jquery failed to find the [fw] class, using backup [fw] code");
                }
            } else if (cssName === "font-size") {
                TextBackup("other");
                if (cssName === "font-size") {
                    classError = new Error("[fs] jquery failed to find the [fs] class, using backup [fs] code");
                }
            }
            console.error(jqueryError + "\n" + classError);
        }
    });
    return classLook;
}
export function TextFunction() {
    TextOptions("bg", "background-color");
    TextOptions("fg", "color");
    TextOptions("fw", "font-weight");
    TextOptions("fs", "font-size");
}