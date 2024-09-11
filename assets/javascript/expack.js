import { modalFunction } from "./expack/modals";
modalFunction();
document.addEventListener("DOMContentLoaded", () => { 
	const brandImage = document.querySelectorAll("[class='brand']");
	brandImage.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			
		})
	})
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
	const mnElements = document.querySelectorAll("[class*='fr-']");
	mnElements.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("fr-")) {
				const colorCode = cls.substring(3);
				if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
					element.style.color = `#${colorCode}`;
				}
			}
		});
	});
    // FINALLY FUCKING WORKS!!!!!!! 15/08/2024
	// Doesn't work again 08/09/2024
    const fontWeightClass = document.querySelectorAll("[class^='fw-'");
	fontWeightClass.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("fw-")) {
				const fwValue = cls.substring(3);
				if (/^\d+px?$/.test(fwValue)) {
					element.style.fontWeight = fwValue;
				}
			}
		});
	});
	const closingClass = document.getElementByClassName("close");
	closingClass.textContent = "&times;";
	const elementAlignment = document.querySelectorAll("[class^='align-']");
	elementAlignment.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("align-")) {
				const alignment = cls.substring(5);
				if (alignment === "center" || alignment === "left" || alignment === "right") {
					element.style.textAlign = alignment;
				}
			}
		});
	});
	const elementPadding = document.querySelectorAll("[class^='pad-']")
	elementPadding.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("pad-")) {
				const paddingValue = cls.substring(5);
				if (/^\d+px?$/.test(paddingValue)) {
                // Apply padding to all sides
					element.style.padding = paddingValue;
				}
			}
		});
	});
	// figure out how to have this work for all borders
	const borderElements = document.querySelectorAll("[data-border]");
	borderElements.forEach(element => {
    	const borderData = element.getAttribute('data-border');
		if (borderData) {
			const parts = borderData.split(" ");
			parts.forEach(part => {
				if (part.startsWith("color-")) {
					const colorCode = part.substring(6);
					if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
						element.style.color = `#${colorCode}`;
					}
				}
				if (part.startsWith("radius-")) {
					let borderRadius = part.substring(7);
					if (borderRadius.includes("%")) {
						borderRadius = borderRadius + "%";
					}
					if (borderRadius) {
						borderRadius = borderRadius + "px";
					}
					element.style.borderRadius = borderRadius;
				}
				if (part.startsWith("size-")) {
					const borderSize = part.substring(7);
					element.style.borderWidth = borderSize;
				}
			});
		}
	});
	const imageDimension = document.querySelectorAll("[data-image]");
	imageDimension.forEach( element => {
		const imageData = element.getAttribute('data-image');
		if (imageData) {
			const parts = imageData.split(" ");
			parts.forEach(parts => {
				if (part.startsWith("height-")) {
					let imageHeight = part.substring(6);
					if (imageHeight.includes("%")) {
						imageHeight = imageHeight + "%";
					}
					if (imageHeight.includes("em") || imageHeight.includes("-em")) {
						imageHeight = imageHeight + "em";
					}
					else {
						imageHeight = imageHeight + "px";
					}
					element.style.height = imageHeight;
				}
				if (part.startsWith("width-")) {
					let imageWidth = part.substring(7);
					if (imageWidth.includes("%")) {
						imageWidth = imageWidth + "%";
					}
					if (imageWidth.includes("em") || imageWidth.includes("-em")) {
						imageWidth = imageWidth + "em";
					}
					else {
						imageWidth = imageWidth + "px";
					}
					element.style.width = imageWidth;
				}
			});
		}
	});
	const marginCheck = document.querySelectorAll("[data-margin]");
	marginCheck.forEach(element => {
		const parts = element.className.split(" ");
		if (parts.startsWith("a-")) {
			const everyMargin = parts.cls(5);
			element.style.margin = everyMargin;
		} else if (parts.startsWith("r-")) {
			const rightMargin = parts.cls(5);
			element.style.marginRight = rightMargin;
		} else if (parts.startsWith("l-")) {

		}
	});
	const indexValue = document.querySelectorAll("[data-index]");
	indexValue.forEach(element => {
		const indexData = element.getAttribute('data-index');
		if (indexData) {
			const parts = indexData.split(" ");
			if (parts.startsWith("z-")) {
				zIndex = part.substring(5);
				element.style.zIndex = zIndex;
			}
		}
	});
});