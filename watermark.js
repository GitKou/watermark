function init(option) {
    option = Object.assign({
        font: 14,
        markTxt: '水印'
    }, option);

    let markTxtLength = option.markTxt.replace(/[\u4e00-\u9fa5]/gi, 'xx').length / 2;
    let markTxtWidth = markTxtLength * option.font;

    let canvas = document.createElement('canvas');
    canvas.setAttribute('width', markTxtWidth * 2);
    canvas.setAttribute('height', markTxtWidth * 2);


    let ctx = canvas.getContext('2d');
    ctx.font = `${option.font}px Arial`;

    ctx.translate(markTxtWidth, markTxtWidth); // translate to center of rotation
    ctx.rotate(-Math.PI * 15 / 180);
    ctx.translate(-markTxtWidth, -markTxtWidth); // translate back
    ctx.fillText(option.markTxt, markTxtWidth / 2, markTxtWidth + option.font / 2);

    let dataURL = canvas.toDataURL();
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