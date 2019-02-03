var data = [];
if (window.location.href.includes('TapeDispenser'))
    data = [{
            id: 1,
            title: 'پایه چسب مشکی',
            description: '',
            specs: [],
            price: 6000,
            images: ["../img/23.jpg", "../img/24.jpg", "../img/25.jpg"]
        },
        {
            id: 2,
            title: 'پایه چسب کریستال',
            description: '',
            specs: [],
            price: 6500,
            images: ["../img/20.jpg", "../img/21.jpg", "../img/22.jpg"]
        },
        {
            id: 3,
            title: 'پایه چسب لاکی',
            description: '',
            specs: [],
            price: 7000,
            images: ["../img/1.jpg", "../img/2.jpg", "../img/3.jpg"]
        }
    ];
else if (window.location.href.includes('Kazie'))
    data = [{
            id: 1,
            title: 'کازیه',
            description: 'دوطبقه',
            specs: [' قهوه ای با زه کرم رنگ', 'طوسی با زه طوسی روشن', 'مشکی با زه طوسی روشن', 'تولید رنگ های سفارشی پذیرفته می شود.'],
            price: 20000,
            images: ["../img/8.jpg", "../img/9.jpg", "../img/10.jpg"]
        },
        {
            id: 2,
            title: 'کازیه',
            description: 'سه طیقه',
            specs: ['قهوه ای', 'طوسی', 'مشکی', 'تولید رنگ های سفارشی پذیرفته می شود.'],
            price: 27000,
            images: ["../img/11.jpg", "../img/12.jpg", "../img/13.jpg"]
        }
    ];
else if (window.location.href.includes('ZirTaqvim'))
    data = [{
            id: 1,
            title: 'زیرتقویم کریستال',
            description: '',
            specs: [],
            price: 4500,
            images: ["../img/14.jpg", "../img/15.jpg", "../img/16.jpg"]
        },
        {
            id: 2,
            title: 'زیرتقویم لاکی',
            description: '',
            specs: [],
            price: 4500,
            images: ["../img/4.jpg", "../img/5.jpg", "../img/6.jpg"]
        }
    ];
else if (window.location.href.includes('ZirPaee'))
    data = [{
            id: 1,
            title: 'زیرپایی پلاستیکی',
            description: '',
            specs: [],
            price: 20000,
            // images: ["../img/14.jpg", "../img/15.jpg", "../img/16.jpg"]
        },
        {
            id: 2,
            title: 'زیرپایی پلاستیکی فلزدار',
            description: '',
            specs: [],
            price: 32000,
            // images: ["../img/4.jpg", "../img/5.jpg", "../img/6.jpg"]
        }
    ];
else if (window.location.href.includes('JaYaddashti'))
    data = [{
            id: 1,
            title: 'جایادداشتی قائم',
            description: '',
            specs: [],
            price: 2200,
            images: ["../img/26.jpg", "../img/27.jpg", "../img/28.jpg"]
        },
        {
            id: 2,
            title: 'جایادداشتی چهارگوش',
            description: 'قاب (10×10)',
            specs: [],
            price: 1600,
            images: ["../img/29.jpg"]
        }
    ];

$(function () {
    let initData = data[0];
    $('.specs').empty();
    initData.specs.forEach(function (spec) {
        $('.specs').append(`<li>${spec}</li>`)
    });
    $('.carousel-item img').each(function (index) {
        $(this).attr('src', initData.images[index]);
    });
    if (!initData.specs.length) {
        $('h4').remove();
        $('hr')[0].remove();
    }
    $('.price').text(initData.price);
    $('h3.title').text(initData.title);
    $('.description').text(initData.description)

    $('.list-item').mouseover(function () {
        let parentIndex = $(this).index();
        let thisData = data[parentIndex];
        $('.carousel-item img').each(function (index) {
            $(this).attr('src', thisData.images[index]);
        });
        $('.specs').empty();
        thisData.specs.forEach(function (spec) {
            $('.specs').append(`<li>${spec}</li>`)
        });
        $('.price').text(thisData.price);
        $('h3.title').text(thisData.title);
        $('.description').text(thisData.description)
    })
});