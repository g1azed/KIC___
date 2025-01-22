window.onload = function () {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
    };
    var demo = new CountUp("number", 0, 1894, 0, 2.5, options);
    demo.start();


    // 11.59%
    var options1 = {
        useEasing: true,
        useGrouping: true,
        separator: "",
        decimal: ".",
        prefix: "",
        suffix: ".59%",
    };

    var demo1 = new CountUp("number2", 0, 11, 0, 2.5, options1);
    demo1.start();


    // 6.48%

    var options2 = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ".48%",
    };

    var demo2 = new CountUp("number3", 0, 6, 0, 2.5, options2);
    demo2.start();

    // 6.48%

    var options3 = {
        useEasing: true,
        useGrouping: true,
        decimalPlaces: 2,
        separator: '.',
        suffix: '%',
    };

    var demo3 = new CountUp("number4", 0, 22, 0, 2.5, options3);
    demo3.start();
};
