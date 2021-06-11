let devices = [{
        name: 'HUAWEI Mate 40 Pro',
        description: 'Powerful 5 nm Kirin 9000 5G SoC. Ultra Vision Cine Camera. Ultra Vision Selfie Camera. 66 W Wired and 50 W Wireless HUAWEI SuperCharge. New AI Gesture Control. In-screen Fingerprint and 3D Face Unlock.',
        price: '3699.00',
        type: 'phone',
        photo: "url('https://raw.githubusercontent.com/ArtiomB5/8FAQ-page-15VanillaJSProjects/main/img/phones/HUAWEIMate40Pro.png')"
    },
    {
        name: 'HUAWEI nova 7',
        description: '64MP AI Quad Camera. Kirin 985 7nm 5G SoC. DUAL-VIEW Video Mode. 40W HUAWEI SuperCharge. 20X Digital Zoom. 32MP Front Camera Super Night Selfie.',
        price: '1649.00',
        type: 'phone',
        photo: "url('https://raw.githubusercontent.com/ArtiomB5/8FAQ-page-15VanillaJSProjects/main/img/phones/HUAWEInova7.png')"
    },
    {
        name: 'HUAWEI Y7a',
        description: '5000 mAh Large Battery. 48 MP Quad AI Camera.',
        price: '729.00',
        type: 'phone',
        photo: "url('https://raw.githubusercontent.com/ArtiomB5/8FAQ-page-15VanillaJSProjects/main/img/phones/HUAWEIY7a.png')"
    },
    {
        name: 'HUAWEI MatePad Pro',
        description: 'HUAWEI FullView Display. Kirin 990 Flagship Chipset. Huawei Share.',
        price: '2199.00',
        type: 'tablet',
        photo: "url('https://raw.githubusercontent.com/ArtiomB5/8FAQ-page-15VanillaJSProjects/main/img/tablets/HUAWEIMatePadPro.png')"
    },
    {
        name: 'HUAWEI MatePad New',
        description: '2K FullView Display. 4GB+128GB. 22.5W Quick Charge.',
        price: '989.00',
        type: 'tablet',
        photo: "url('https://raw.githubusercontent.com/ArtiomB5/8FAQ-page-15VanillaJSProjects/main/img/tablets/HUAWEIMatePadNew.png')"
    }
];

let buttons = document.querySelectorAll('button');
buttons.forEach(function (item) {
    item.addEventListener('click', pressButtonAction);
})

function pressButtonAction(param) {
    let devicesFilter = [];

    if (this.id === 'phones') {
        devicesFilter = devices.filter(function (device) {
            return device.type === 'phone';
        });
    } else if (this.id === 'tablets') {
        devicesFilter = devices.filter(function (device) {
            return device.type === 'tablet';
        });
    } else if (param === 'first start' || this.id === 'all') {
        devicesFilter = devices;
    };

    let devicesHTML = devicesFilter.map(function (item) {
        return '<div class="main__device"><div class="main__image" style="background-image:' + item.photo + ';"></div><div class="main__content"><h2 class="main__name">' + item.name + '</h2>' + '<p class="main__description">' + item.description + '</p>' + '<p class="main__price"> SAR ' + item.price + '</p></div></div>';
    });
    let allDevicesInnerHTML = devicesHTML.reduce(function (sum, current) {
        return sum + current;
    });
    document.getElementById('main').innerHTML = allDevicesInnerHTML;
}

document.addEventListener("DOMContentLoaded", function () {
    pressButtonAction('first start');
});
