/*global one*/
one.include('js:one/color.js');

one.include('js:one/color-installColorSpace.js');
one.include('js:one/color/RGB.js');
one.include('js:one/color/XYZ.js');

one.color.installColorSpace('LAB', ['Lightness', 'A', 'B', 'Alpha'], {
    fromRgb: function () {
        return this.toXYZ().toLAB();
    },

    rgb: function () {
        return this.toXYZ().toRGB();
    },

    xyz: function () {
        console.warn('This is probably faulty!');
        // http://en.wikipedia.org/wiki/Lab_color_space#CIE_XYZ_to_CIE_L.2Aa.2Ab.2A_.28CIELAB.29_and_CIELAB_to_CIE_XYZ_conversions
        var l = this.l,
            a = this.a,
            b = this.b,
            x, y, z, y2;

        if (l <= 8) {
            y = l / 903.3;
            y2 = (7.787 * y + (16 / 116);
        } else {
            y = Math.pow((l + 16) / 116, 3);
            y2 = Math.pow(y, 1/3);
        }

        x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
        z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

        return new one.color.XYZ(x, y, z, this.a);

/*
        // This is from https://raw.github.com/harthur/color-convert/master/conversions.js
        var l = lab[0],
            a = lab[1],
            b = lab[2],
            x, y, z, y2;

        if (l <= 8) {
            y = (l * 100) / 903.3;
            y2 = (7.787 * (y / 100)) + (16 / 116);
        } else {
            y = 100 * Math.pow((l + 16) / 116, 3);
            y2 = Math.pow(y / 100, 1/3);
        }

        x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
        z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

        return [x, y, z];
*/
    }
});
