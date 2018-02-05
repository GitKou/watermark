function init(option) {
    let font, lineHeight;
    font = 14;

    let markTxt = option.markTxt;
    let markTxtLength = option.markTxt.replace(/\u4e00-\u9fa5/gi, 'xx').length;
    let markTxtWidth = markTxtLength * font;

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    // lineHeight = 15; // this is guess and check as far as I know
    ctx.font = `${font}px Arial`;

    canvas.style.border = "1px solid";
    canvas.setAttribute('width', markTxtWidth * 2);
    canvas.setAttribute('height', markTxtWidth * 2);

    ctx.translate(markTxtWidth * 1.5, markTxtWidth * 2 - font / 2);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText(option.markTxt, 0, font);

    let dataURL = canvas.toDataURL();
    appendToBody(dataURL);
    // document.body.appendChild(canvas);
}

function appendToBody(dataURL) {
    let maskDiv = document.body.appendChild(document.createElement('div'));
    maskDiv.style.cssText = "position:fixed; width: 100%; height: 100%";
    maskDiv.style.backgroundImage = `url(${dataURL})`;
    maskDiv.style.backgroundRepeat = 'repeat';

}

const Watermark = {
    init
}
export {
    Watermark
}