import $ from "jquery";
import { PageBackup } from "./backup";
// Retype Count: ~5 // This is the amount I have re-written this code FROM scratch
// All `console.log()`s are for debugging, they are going to removed once it's ready for the master branch
function PageClasses() {
    var classGet = [];
    var backUp = null;
    var classHasLocations = null;
    const classLook = $("body").find("[class]").each(function () {
        var classSearch = $(this).attr("class");
        const getBackUp = classSearch == undefined ? true : false;
        classGet = classSearch ? classSearch.split(" ") : null;
        backUp = getBackUp;
        // Check for classGet, classSearch, and backUp
        if (backUp != true) {
            const classGetSize = classGet.length;
            // check for classGetSize
            if (classGetSize == 1) {
                const classPlace = classGet[0];
                if (classPlace.includes("top") || classPlace.includes("btm") || classPlace.includes("lft") || classPlace.includes("rgt")) {
                    var classLocation = classPlace.includes("top") ? "top" : classPlace.includes("lft") ? "left" : classPlace.includes("btm") ? "btm" : classPlace.includes("rgt") ? "right" : null;
                    var classPart = classPlace.substring(9);
                    classHasLocations = true;
                } else {
                    classPart = classPlace.substring(5);
                    classHasLocations = false;
                }
                if (classHasLocations == true) {
                    classPart = classPlace.substring(9);
                } else {
                    classPart = classPlace.substring(5);
                }
                // check for classPart
                if (classPlace) {
                    if (classPlace.includes("marg")) {
                        if (classHasLocations == true) {
                            $(this).css(`margin-${classLocation}`, classPart);
                        } else {
                            $(this).css("margin", classPart);
                        }
                    } else if (classPlace.includes("padd")) {
                        if (classHasLocations == true) {
                            $(this).css(`padding-${classLocation}`, classPart);
                        } else {
                            $(this).css("padding", classPart);
                        }
                    } else if (classPlace.includes("indz")) {
                        $(this).css("z-index", classPart)
                    } else if (classPlace.includes("hgt")) {
                        $(this).css("height", classPart);
                    } else if (classPlace.includes("wid")) {
                        $(this).css("width", classPart);
                    } 
                }
            } else if (classGetSize > 1) {
                for (var i = 0; i < classGetSize; i++) {
                    const classPlace = classGet[i];
                    if (classGet.includes("top") || classGet.includes("btm") || classGet.includes("lft") || classGet.includes("rgt")) {
                        var classLocation = classPlace.includes("top") ? "top" : classPlace.includes("lft") ? "left" : classPlace.includes("btm") ? "bottom" : classPlace.includes("rgt") ? "right" : null;
                        classHasLocations = true;
                    } else {
                        classHasLocations = false;
                    }
                    if (classHasLocations == true) {
                        var classPart = classPlace.substring(9);
                    } else {
                        classPart = classPlace.substring(5);
                    }
                    if (classSearch.includes("marg")) {
                        if (classHasLocations == true) {
                            $(this).css(`margin-${classLocation}`, classPart);
                        } else {
                            $(this), css("margin", classPart);
                        }
                    } else if (classSearch.includes("padd")) {
                        if (classHasLocations == true) {
                            $(this).css(`padding-${classLocation}`, classPart);
                        } else {
                            $(this).css("padding", classPart);
                        }
                    } else if (classSearch.includes("indz")) {
                        $(this).css("z-index", classPart);
                    } else if (classPlace.includes("higt")) {
                        $(this).css("height", classPart);
                    } else if (classPlace.includes("widt")) {
                        $(this).css("width", classPart);
                    }
                }
            }
        } else {
            PageBackup("class", "margin");
            PageBackup("class", "padding");
            PageBackup("class", "zIndex");
            PageBackup("class", "height");
            PageBackup("class", "width");
            console.error("encountered an error with trying to run page options classes");
        }
    });
    return classLook;
}
function PageDatas() {
    var dataGet = [];
    var backUp = null;
    var dataHasLocations = null;
    const classLook = $("body").find("[data-bord]").each(function () {
        const dataSearch = $("[data-bord]").data("bord");
        const getBackUp = dataSearch == undefined ? true : false;
        dataGet = dataSearch ? dataSearch.split(" ") : null;
        backUp = getBackUp;
        if (backUp != true) {
            if (dataGet) {
                const dataSize = dataGet.length;
                for (var i = 0; i < dataSize; i++) {
                    var dataPlace = dataGet[i];
                    if (dataPlace.includes("top") || dataPlace.includes("btm") || dataPlace.includes("lft") || dataPlace.includes("rgt")) {
                        var dataLocation = dataPlace.includes("top") ? "top" : dataPlace.includes("lft") ? "left" : dataPlace.includes("btm") ? "btm" : dataPlace.includes("rgt") ? "right" : null;
                        var dataPart = dataPlace.substring(4);
                        dataHasLocations = true;
                    } else {
                        dataHasLocations = false;
                    }
                    if (dataPlace.includes("clr")) {
                        if (dataHasLocations == true) {
                            dataPart = dataPlace.substring(8);
                            if (/^[0-9A-Fa-f]{6}$/.test(dataPart)) {
                                $(this).css(`border-${dataLocation}-color`, `#${dataPart}`);
                            } else {
                                $(this).css(`border-${dataLocation}-color`, dataPart);
                            }
                        } else {
                            dataPart = dataPlace.substring(4);
                            if (/^[0-9A-Fa-f]{6}$/.test(dataPart)) {
                                $(this).css("border-color", `#${dataPart}`);
                            } else {
                                $(this).css("border-color", dataPart);
                            }
                        }
                    } else if (dataPlace.includes("rad")) { 
                        if (dataHasLocations == true) {
                            dataPart = dataPlace.substring(8);
                            $(this).css(`border-${dataLocation}-radius`, dataPart);
                        } else {
                            dataPart = dataPlace.substring(4);
                            $(this).css("border-radius", dataPart);
                        }
                    } else if (dataPlace.includes("wid")) {
                        if (dataHasLocations == true) {
                            dataPart = dataPlace.substring(8);
                            $(this).css(`border-${dataLocation}-width`, dataPart);
                        } else {
                            dataPart = dataPlace.substring(4);
                            $(this).css("border-width", dataPart);
                        }
                    } 
                }
            }
        } else {
            PageBackup("data", "border");
        }
    });
    return classLook;
}
export function PageFunction() {
    PageClasses();
    PageDatas();
}