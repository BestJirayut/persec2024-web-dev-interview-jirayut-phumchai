/////////////////////////////ข้อที่ 1 แปลง hexToRgb ////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function hexToRgb(hex) {
    var validHex = /^#?([0-9A-Fa-f]{3}){1,2}$/;
    if (!validHex.test(hex)) {
        return null;
    }

    hex = hex.replace(/^#/, '');

    var r, g, b;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16); 
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16); 
        b = parseInt(hex.substring(4, 6), 16);
    }


    return { r: r, g: g, b: b };
}
console.log("----------------ข้อที่ 1 ---------------------"); 
console.log(hexToRgb("#FF9933"));
console.log(hexToRgb("#ff9933"));
console.log(hexToRgb("#bbb")); 
console.log(hexToRgb("#000")); 
console.log("-------------------------------------------"); 
/////////////////////////////ข้อที่ 1 แปลง hexToRgb ////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////ข้อที่ 2 รับค่า array แล้วเรียง ///////////////////////
////////////////////////////////////////////////////////////////////////////
function sortStringsByNumberSuffix(arr) {
    arr.sort(function(a, b) {
        var numA = parseInt(a.match(/\d+/)[0]);
        var numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
    });

    return arr;
}
console.log("----------------ข้อที่ 2 ---------------------"); 
console.log(sortStringsByNumberSuffix(["TH19", "SG20", "TH2"]));
console.log(sortStringsByNumberSuffix(["TH10", "TH3Netflix", "TH1", "TH7"]));
console.log("-------------------------------------------"); 
/////////////////////////////ข้อที่ 2 รับค่า array แล้วเรียง //////////////////////
////////////////////////////////////////////////////////////////////////////


/////////////////////////////ข้อที่ 3 รับคำแล้ว encode & decode ///////////////////
///////////////////////////////////////////////////////////////////////////////
class ReverseEncoder {
    encode(text) {
        return text.split('').map(char => {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
            } else if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
            } else {
                return char;
            }
        }).join('');
    }

    decode(encodedText) {
        return this.encode(encodedText);
    }
}

const reverseEncoder = new ReverseEncoder();
console.log("----------------ข้อที่ 3 ---------------------"); 
console.log(reverseEncoder.encode("Test"));
console.log(reverseEncoder.decode("Gvhg"));
console.log("-------------------------------------------"); 
/////////////////////////////ข้อที่ 3 รับคำแล้ว encode & decode //////////////////
//////////////////////////////////////////////////////////////////////////////


/////////////////////////////ข้อที่ 4 ค้นหาคำ ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function autocomplete(search, items, maxResult) {
    const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

    const sortedItems = filteredItems.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(search.toLowerCase());
        const indexB = b.toLowerCase().indexOf(search.toLowerCase());
        return indexA - indexB;
    });

    const slicedItems = sortedItems.slice(0, maxResult);

    return slicedItems;
}
console.log("----------------ข้อที่ 4 ---------------------"); 
console.log(autocomplete("mo", ["Mother", "Think", "Worthy", "Apple", "Android"], 5));
console.log("-------------------------------------------"); 
/////////////////////////////ข้อที่ 4 ค้นหาคำ ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
