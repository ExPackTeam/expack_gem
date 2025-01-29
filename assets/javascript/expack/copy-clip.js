import $ from "jquery";
export function CopyClip() {
    const dataClip = $("*").find("[data-clip]");
    if (dataClip) {
        const dataText = $("*").find("[data-clip='text']").text().trim().replace(/\s+/g, ' ');
        $("[data-clip='button']").on("click", function () {
            if ($("*").attr("data-clip") === "alert") {
                alert(`Copied: ${dataText}`);
            }
            navigator.clipboard.writeText(dataText);
            $("[data-clip='text']").trigger("copy");
        });
    }
}
