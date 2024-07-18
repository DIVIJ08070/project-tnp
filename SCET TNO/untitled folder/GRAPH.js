
        var opts = {
            angle: 0.0, // The span of the gauge arc
            lineWidth: 0.09, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
                length: 0.5, // Relative to gauge radius
                strokeWidth: 0.035, // The thickness
                color: '#000000' // Fill color
            },
            limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
            limitMin: false,     // If true, the min value of the gauge will be fixed
            colorStart: '#6FADCF',   // Colors
            colorStop: '#8FC0DA',    // just experiment with them
            strokeColor: '#E0E0E0',   // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true,     // High resolution support

            // Custom gauge settings
            staticZones: [
                {strokeStyle: "#6976CB", min: 0, max: 250},
                {strokeStyle: "#F2F3F6", min: 250, max: 320}
            ]
        };
        var target = document.getElementById('gauge'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        gauge.maxValue = 320; // set max gauge value
        gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(250); // set actual value
  