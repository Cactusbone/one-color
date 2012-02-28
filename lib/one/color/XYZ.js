/*global one*/
one.include('js:one/color.js');

one.include('js:one/color-installColorSpace.js');
one.include('js:one/color/RGB.js');

one.color.installColorSpace('XYZ', ['x', 'y', 'z', 'Alpha'], {
    fromRgb: function () { // Becomes one.color.RGB.prototype.xyz
        // assume sRGB
        var r = this.r > 0.04045 ? Math.pow(((this.r + 0.055) / 1.055), 2.4) : (this.r / 12.92);
            g = this.g > 0.04045 ? Math.pow(((this.g + 0.055) / 1.055), 2.4) : (this.g / 12.92);
            b = this.b > 0.04045 ? Math.pow(((this.b + 0.055) / 1.055), 2.4) : (this.b / 12.92);

        return new one.color.XYZ(
            (r * 0.4124) + (g * 0.3576) + (b * 0.1805),
            (r * 0.2126) + (g * 0.7152) + (b * 0.0722),
            (r * 0.0193) + (g * 0.1192) + (b * 0.9505),
            this.a
        );
    },

    rgb: function () {
        var r = (this.x *  3.2406) + (this.y * -1.5372) + (this.z * -0.4986),
            g = (this.x * -0.9689) + (this.y *  1.8758) + (this.z *  0.0415),
            b = (this.x *  0.0557) + (this.y * -0.2040) + (this.z *  1.0570);

        // assume sRGB
        r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055) : r = (r * 12.92);
        g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055) : g = (g * 12.92);
        b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055) : b = (b * 12.92);

        return new one.color.RGB(
            (r < 0) ? 0 : r,
            (g < 0) ? 0 : g,
            (b < 0) ? 0 : b,
            this.a
        );
    },

    lab: function () {
        //http://en.wikipedia.org/wiki/Lab_color_space#CIE_XYZ_to_CIE_L.2Aa.2Ab.2A_.28CIELAB.29_and_CIELAB_to_CIE_XYZ_conversions
        var x = this.x * 1.05211106,
            y = this.y,
            z = this.z * 0.918417016;

        /*
        var convert = function (channel) {
            if (channel > Math.pow(6/29, 3)) {
                return Math.pow(channel, 1/3);
            } else {
                return ((1/3) * Math.pow(29/6, 2)) * channel + (4/29);
            }
        };
        */
        x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787037 * x) + (16 / 116);
        y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787037 * y) + (16 / 116);
        z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787037 * z) + (16 / 116);

        return new one.color.LAB(
            (116 * y) - 16,
            500 * (x - y),
            200 * (y - z),
            this.a
        );
    }
});
