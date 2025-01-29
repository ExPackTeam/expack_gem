export function TextBackup(option) {
    // for "./text_changes.js"
    if (option == "color" || option == "bg" || option == "fg") {
        const bgElements = document.querySelectorAll("[class*='bg-']");
        bgElements.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("bg-")) {
                    const colorCode = cls.substring(3);
                    if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                        element.style.backgroundColor = `#${colorCode}`;
                    }
                }
            });
        });
        const mnElements = document.querySelectorAll("[class*='fg-']");
        mnElements.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("fg-")) {
                    const colorCode = cls.substring(3);
                    if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                        element.style.color = `#${colorCode}`;
                    }
                }
            });
        });
    } else {
        const fontSizeValue = document.querySelectorAll("[class*='fs-']");
        fontSizeValue.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("fs-")) {
                    const sizeValue = cls.substring(3);
                    if (/^\d+px?$/.test(sizeValue)) {
                        element.style.fontSize = sizeValue;
                    }
                }
            });
        });
        const fontWeightClass = document.querySelectorAll("[class*='fw-']");
        fontWeightClass.forEach(element => {
            const classes = element.className.split(" ");
            classes.forEach(cls => {
                if (cls.startsWith("fw-")) {
                    const fwValue = cls.substring(3);
                    if (/^\d+(px|em|rem|pt|in|cm|mm)?$/.test(fwValue)) {
                        element.style.fontWeight = fwValue;
                    }
                }
            });
        });
    }
}
export function PageBackup(option, optionSub) {
    if (option == "class") {
        if (optionSub == "margin") {
            const marginElements = document.querySelectorAll("[class*='marg-']");
            marginElements.forEach(element => {
                const classes = element.className.split(" ");
                classes.forEach(cls => {
                    if (cls.startsWith("marg-")) {
                        const marginValue = cls.substring(5);
                        element.style.margin = `${marginValue}`;
                    }
                    else if (cls.startsWith("marg-top-")) {
                        const topMargin = cls.substring(8);
                        element.style.marginTop = `${topMargin}`;
                    } else if (cls.startsWith("marg-rgt-")) {
                        const rightMargin = cls.substring(8);
                        element.style.marginRight = `${rightMargin}`;
                    } else if (cls.startsWith("margin-btm-")) {
                        const bottomMargin = cls.substring(8);
                        element.style.marginBottom = `${bottomMargin}`;
                    } else if (cls.startsWith("margin-lft-")) {
                        const leftMargin = cls.substring(8);
                        element.style.marginLeft = `${leftMargin}`;
                    }
                });
            });
        } else if (optionSub == "height") {
            const heightElements = document.querySelectorAll("[class*='higt-']");
            heightElements.forEach(element => {
                const classes = element.className.split(" ");
                classes.forEach(cls => {
                    const elementHeight = substring(5);
                    element.style.height = elementHeight;
                });
            });
        } else if (optionSub == "width") { 
            const widthElements = document.querySelectorAll("[class*='widt'");
            widthElements.forEach(element => {
                const classes = element.className.split(" ");
                classes.forEach(cls => {
                    const elementWidth = substring(5);
                    element.style.width = `${elementWidth}`;
                });
            });
        } else if (optionSub == "zindex") { 
            const zIndexElements = document.querySelectorAll("[class*='indz-']");
            zIndexElements.forEach(element => {
                const classes = element.className.split(" ");
                classes.forEach(cls => {
                    if (cls.startsWith("zind")) {
                        const zIndexValue = cls.substring(5);
                        element.style.zIndex = `${zIndexValue}`;
                    }
                });
            });
        } else {
            const paddingElements = document.querySelectorAll("[class*='padd-']");
            paddingElements.forEach(element => {
                const classes = element.className.split(" ");
                classes.forEach(cls => {
                    if (cls.startsWith("padd-")) {
                        const paddingValue = cls.substring(5); // Get the padding value after "padding-"
                        element.style.padding = `${paddingValue}`; // Apply the padding to all sides
                    } else if (cls.startsWith("padd-top-")) {
                        const topPadding = cls.substring(8); // Get the top padding value
                        element.style.paddingTop = `${topPadding}`; // Apply padding-top
                    } else if (cls.startsWith("padd-rgt-")) {
                        const rightPadding = cls.substring(8); // Get the right padding value
                        element.style.paddingRight = `${rightPadding}`; // Apply padding-right
                    } else if (cls.startsWith("padd-bot")) {
                        const bottomPadding = cls.substring(8); // Get the bottom padding value
                        element.style.paddingBottom = `${bottomPadding}`; // Apply padding-bottom
                    } else if (cls.startsWith("padd-lft-")) {
                        const leftPadding = cls.substring(8); // Get the left padding value
                        element.style.paddingLeft = `${leftPadding}`; // Apply padding-left
                    } 
                });
            });
            
        }
    } else {
        if (optionSub == "border") {
            const borderElements = document.querySelectorAll("[data-bord]");
            borderElements.forEach(element => {
                const borderData = element.getAttribute("data-bord");
                const borderClasses = borderData.split(" ");
                borderClasses.forEach(borderClass => {
                    if (borderClass.startsWith("clr")) {
                        var colorCode = borderClass.substring(4);
                        if (borderClass.includes("top")) {
                            colorCode = borderClass.substring(4);
                            if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                                element.style.borderTopColor = `#${colorCode}`;
                            } else {
                                element.style.borderTopColor = colorCode;
                            }
                        } else if (borderClass.includes("lft")) {
                            colorCode = borderClass.substring(4);
                            if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                                element.style.borderLeftColor = `#${colorCode}`;
                            } else {
                                element.style.borderLeftColor = colorCode;
                            }
                        } else if (borderClass.includes("rgt")) {
                            if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                                element.style.borderRightColor = `#${colorCode}`;
                            } else {
                                element.style.borderRightColor = colorCode;
                            }
                        } else {
                            if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
                                element.style.borderBottomColor = `#${colorCode}`;
                            } else {
                                element.style.borderBottomColor = colorCode;
                            }
                        }
                    }
                    if (borderClass.startsWith("wid")) {
                        var size = borderClass.substring(4);
                        if (size.startsWith("top")) {
                            const topSize = size.substring(4);
                            element.style.borderTopWidth = topSize;
                        } else if (size.startsWith("lft")) {
                            const leftSize = size.substring(4)
                            element.style.borderLeftWidth = leftSize;
                        } else if (size.startsWith("rgt")) {
                            const rightSize = size.substring(4);
                            element.style.borderRightWidth = rightSize;
                        } else if (size.startsWith("btm")) {
                            const bottomSize = size.substring(4);
                            element.style.borderBottomWidth = bottomSize;
                        } else {
                            element.style.borderWidth = size;
                        }
                    }
                });
            });
        }
    }
}